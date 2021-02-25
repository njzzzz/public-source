// test-download
// const baseUrl = 'http://10.200.1.145/ni.jin.rong/public-source/-/archive/master/public-source-master.zip'

// const download = require('download');
// (async () => {
//     await download(baseUrl, 'coonfig', {extract:true});
// })();

const fileUrl = 'http://10.200.1.145/ni.jin.rong/public-source/raw/master/es-dev-standard/config-conventional/.editorconfig?inline=false'
const download = require('download');
(async () => {
    await download(fileUrl, 'config', { extract: true });
})();