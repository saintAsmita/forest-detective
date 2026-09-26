importScripts('./precache.js');
const CACHE=self.FOREST_CACHE;
self.addEventListener('install',event=>{event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(self.FOREST_ASSETS);})());});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith('forest-detective-')&&k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim();})());});
self.addEventListener('message',event=>{if(event.data?.type==='ACTIVATE_UPDATE')self.skipWaiting();});
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE),cached=await cache.match(req);
    if(cached){
      const range=req.headers.get('range'),path=new URL(req.url).pathname;
      // Safari requests byte ranges when playing cached audio.
      if(range&&/\.(wav|mp3)$/.test(path)){
        const bytes=await cached.arrayBuffer(),match=/^bytes=(\d*)-(\d*)$/.exec(range);
        if(match&&(match[1]||match[2])){
          const start=match[1]?Number(match[1]):Math.max(0,bytes.byteLength-Number(match[2]));
          const end=match[1]&&match[2]?Math.min(Number(match[2]),bytes.byteLength-1):bytes.byteLength-1;
          if(start>end||start>=bytes.byteLength)return new Response(null,{status:416,headers:{'Content-Range':`bytes */${bytes.byteLength}`}});
          return new Response(bytes.slice(start,end+1),{status:206,headers:{'Content-Type':path.endsWith('.mp3')?'audio/mpeg':'audio/wav','Accept-Ranges':'bytes','Content-Length':String(end-start+1),'Content-Range':`bytes ${start}-${end}/${bytes.byteLength}`}});
        }
        return new Response(bytes,{headers:cached.headers});
      }
      return cached;
    }
    if(req.mode==='navigate'){const page=await cache.match('./index.html');if(page)return page;}
    return fetch(req);
  })());
});
