const { chromium } = require('C:/Users/Chen/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('fs');
const path = require('path');
(async () => {
  const browser = await chromium.launch({headless:true, channel:'msedge'});
  const page = await browser.newPage();
  await page.route('**/*', r => r.request().url().startsWith('http://127.0.0.1:8000/') ? r.continue() : r.abort());
  await page.goto('http://127.0.0.1:8000/rm-ec-training/school-car-design/');
  await page.evaluate(() => {
    const article = document.querySelector('article');
    article.querySelectorAll('img').forEach(img => img.src = img.src);
    article.querySelectorAll('a').forEach(a => a.href = a.href);
    article.querySelectorAll('.headerlink,.md-content__button').forEach(e => e.remove());
    document.body.replaceChildren(article);
    document.querySelectorAll('link[rel="stylesheet"],style').forEach(e => e.remove());
  });
  await page.addStyleTag({content:`
    @page {size:A4; margin:17mm 17mm 19mm;}
    *{box-sizing:border-box} body{margin:0;color:#202b36;font-family:'Microsoft YaHei',sans-serif;font-size:10pt;line-height:1.65;}
    h1{font-size:22pt;line-height:1.4;color:#183e65;margin:0 0 18pt;}h2{font-size:15pt;color:#183e65;margin:22pt 0 10pt;border-bottom:1px solid #ccd8e4;padding-bottom:5pt;}
    h3{font-size:12pt;margin:16pt 0 7pt;color:#244d72;}h1,h2,h3{break-after:avoid;}p{margin:7pt 0;orphans:3;widows:3;}a{color:#255f94;text-decoration:none;overflow-wrap:anywhere;}
    table{width:100%;border-collapse:collapse;font-size:9pt;margin:10pt 0;break-inside:avoid;}th,td{border:1px solid #ccd5df;padding:6pt;text-align:left;vertical-align:top;}th{background:#edf2f7;}thead{display:table-header-group;}tr{break-inside:avoid;}
    img{display:block;max-width:100%;max-height:150mm;width:auto;height:auto;margin:10pt auto;object-fit:contain;break-inside:avoid;}img[src*="photo"]{max-height:85mm;}
    p:has(img){break-inside:avoid;}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#f2f5f8;padding:10pt;font-size:9pt;break-inside:avoid;}code{font-family:Consolas,'Microsoft YaHei',monospace;}ul,ol{padding-left:20pt;}li{margin:5pt 0;}strong{font-weight:700;}
  `});
  await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode()));});
  fs.mkdirSync('output/pdf',{recursive:true});
  const output=path.resolve('output/pdf/校内赛小车电控设计指南.pdf');
  await page.pdf({path:output,printBackground:true,preferCSSPageSize:true,displayHeaderFooter:true,headerTemplate:'<span></span>',footerTemplate:'<div style="width:100%;text-align:center;font-size:9px;color:#687786;"><span class="pageNumber"></span> / <span class="totalPages"></span></div>'});
  console.log(output);
  await browser.close();
})();
