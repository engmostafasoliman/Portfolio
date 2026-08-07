const https=require('https'), fs=require('fs');
const token=process.env.GH_TOKEN, OWNER='engmostafasoliman', REPO='Portfolio';
function api(method,path,body){return new Promise((res,rej)=>{const d=body?JSON.stringify(body):null;
 const r=https.request({hostname:'api.github.com',path,method,headers:{'Authorization':`Bearer ${token}`,
  'User-Agent':'bot','Accept':'application/vnd.github+json',...(d?{'Content-Type':'application/json','Content-Length':Buffer.byteLength(d)}:{})}},
  x=>{let c='';x.on('data',b=>c+=b);x.on('end',()=>{if(x.statusCode>=400)return rej(new Error(x.statusCode+': '+c));res(c?JSON.parse(c):{});});});
 r.on('error',rej);if(d)r.write(d);r.end();});}
(async()=>{
 const pr=await api('POST',`/repos/${OWNER}/${REPO}/pulls`,{
   title:'GitMind project, splash screen, personal photo & relocation copy',
   head:'feat/gitmind-splash-photo', base:'main', body:fs.readFileSync('pr_tmp/body.md','utf8')});
 console.log('PR '+pr.number+' '+pr.html_url);
 for(const f of ['c_lead.md','c_qa.md','c_colleague.md']){
   const c=await api('POST',`/repos/${OWNER}/${REPO}/issues/${pr.number}/comments`,{body:fs.readFileSync('pr_tmp/'+f,'utf8')});
   console.log('comment '+c.id);
 }
 fs.writeFileSync('pr_tmp/prnum.txt',String(pr.number));
})().catch(e=>{console.error(String(e).slice(0,400));process.exit(1);});
