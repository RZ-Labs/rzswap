if(!self.define){let e,a={};const c=(c,i)=>(c=new URL(c+".js",i).href,a[c]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=a,document.head.appendChild(e)}else e=c,importScripts(c),a()})).then((()=>{let e=a[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,s)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(a[t])return;let n={};const d=e=>c(e,t),f={module:{uri:t},exports:n,require:d};a[t]=Promise.all(i.map((e=>f[e]||d(e)))).then((e=>(s(...e),n)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Bq1owdfE-xjGG9CqVIYNr/_buildManifest.js",revision:"7682080dc7a79166011e38b7c27900b0"},{url:"/_next/static/Bq1owdfE-xjGG9CqVIYNr/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/Bq1owdfE-xjGG9CqVIYNr/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/134-e4bfc7873908434a.js",revision:"e4bfc7873908434a"},{url:"/_next/static/chunks/195-22358dfdafa93ae5.js",revision:"22358dfdafa93ae5"},{url:"/_next/static/chunks/202-a742ccadb83fb5b1.js",revision:"a742ccadb83fb5b1"},{url:"/_next/static/chunks/258.8c25fc4a92750b4b.js",revision:"8c25fc4a92750b4b"},{url:"/_next/static/chunks/260.936419a2816fb969.js",revision:"936419a2816fb969"},{url:"/_next/static/chunks/28-ed0f7f974befd9f6.js",revision:"ed0f7f974befd9f6"},{url:"/_next/static/chunks/320.2e0e06820cb5eca4.js",revision:"2e0e06820cb5eca4"},{url:"/_next/static/chunks/336.69cbcba82f6ed53d.js",revision:"69cbcba82f6ed53d"},{url:"/_next/static/chunks/349.ca646563769971cc.js",revision:"ca646563769971cc"},{url:"/_next/static/chunks/402-78e8c5578c1f551d.js",revision:"78e8c5578c1f551d"},{url:"/_next/static/chunks/436-0da3af0c6daee1b9.js",revision:"0da3af0c6daee1b9"},{url:"/_next/static/chunks/465-33281cd33f5c8a3b.js",revision:"33281cd33f5c8a3b"},{url:"/_next/static/chunks/528.1ab6e7e8a4a740e3.js",revision:"1ab6e7e8a4a740e3"},{url:"/_next/static/chunks/585-5ce94afdc54321eb.js",revision:"5ce94afdc54321eb"},{url:"/_next/static/chunks/60-49d6138923e4f737.js",revision:"49d6138923e4f737"},{url:"/_next/static/chunks/852.021ebb4a2d342fa1.js",revision:"021ebb4a2d342fa1"},{url:"/_next/static/chunks/framework-75db3117d1377048.js",revision:"75db3117d1377048"},{url:"/_next/static/chunks/main-0bd3c435660b751b.js",revision:"0bd3c435660b751b"},{url:"/_next/static/chunks/pages/404-78c3f46f47f40510.js",revision:"78c3f46f47f40510"},{url:"/_next/static/chunks/pages/_app-8cd400f8ace8c02e.js",revision:"8cd400f8ace8c02e"},{url:"/_next/static/chunks/pages/_error-d419484d69bbcf53.js",revision:"d419484d69bbcf53"},{url:"/_next/static/chunks/pages/create-nft-d0159dd4494461bb.js",revision:"d0159dd4494461bb"},{url:"/_next/static/chunks/pages/farms-2-dc3c0cb3c1fa0c57.js",revision:"dc3c0cb3c1fa0c57"},{url:"/_next/static/chunks/pages/farms-8d8a32d4bce82801.js",revision:"8d8a32d4bce82801"},{url:"/_next/static/chunks/pages/index-39f6919f72f93cf2.js",revision:"39f6919f72f93cf2"},{url:"/_next/static/chunks/pages/liquidity-6e7f414914f53642.js",revision:"6e7f414914f53642"},{url:"/_next/static/chunks/pages/liquidity-position-1175dad94de1b75c.js",revision:"1175dad94de1b75c"},{url:"/_next/static/chunks/pages/minimal-c41f5dff784541ef.js",revision:"c41f5dff784541ef"},{url:"/_next/static/chunks/pages/nft-details-1bedd17f33ad1b40.js",revision:"1bedd17f33ad1b40"},{url:"/_next/static/chunks/pages/notifications-cac2d812b4e98254.js",revision:"cac2d812b4e98254"},{url:"/_next/static/chunks/pages/profile-fdff80efe1d20005.js",revision:"fdff80efe1d20005"},{url:"/_next/static/chunks/pages/proposals-0524ada96c4d5c6d.js",revision:"0524ada96c4d5c6d"},{url:"/_next/static/chunks/pages/proposals/create-feafc47082fddb9d.js",revision:"feafc47082fddb9d"},{url:"/_next/static/chunks/pages/search-1d78e7c2c0af165a.js",revision:"1d78e7c2c0af165a"},{url:"/_next/static/chunks/pages/swap-6f29a474885f08e5.js",revision:"6f29a474885f08e5"},{url:"/_next/static/chunks/pages/vote-14d35af9fd8663d6.js",revision:"14d35af9fd8663d6"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-2e03b37bc76f6851.js",revision:"2e03b37bc76f6851"},{url:"/_next/static/css/e926be7506d0138e.css",revision:"e926be7506d0138e"},{url:"/_next/static/media/1.4dbca401.png",revision:"d67969903f203227c18bff2812f5b51a"},{url:"/_next/static/media/1.d89a279c.jpg",revision:"9f118459e357eb0ca2c74dd6c78ae29a"},{url:"/_next/static/media/10.0bb20a46.jpg",revision:"4f6864798753a1a92d272989a88102b4"},{url:"/_next/static/media/11.cdc3c463.jpg",revision:"227631f6acc4415277161219ade08f80"},{url:"/_next/static/media/2.3e7881c0.png",revision:"71812b8f50456b98783fc78a0cfcf1e7"},{url:"/_next/static/media/2.da1a3bbe.jpg",revision:"e1dde179bdc4f56360e5380e325f5b58"},{url:"/_next/static/media/3.270c90c0.png",revision:"6a35b214d45ed58c4de1bfd97f978960"},{url:"/_next/static/media/3.89ebc0f7.jpg",revision:"2481a5469a51d4dc8911967c84cb3065"},{url:"/_next/static/media/4.482c53fb.png",revision:"103d27c8d26e89bab96674bfe118caa0"},{url:"/_next/static/media/4.74841b1c.jpg",revision:"7a2adde8751d06c6fb8174386856ff38"},{url:"/_next/static/media/404-dark.88f7f707.svg",revision:"9946c2eac18c520941269bc63fe32c8f"},{url:"/_next/static/media/404-light.8463008b.svg",revision:"32787d88d42a468cc153117f015eaa09"},{url:"/_next/static/media/5.69fc4f70.png",revision:"35fbead9203f8cebc08874612db6f02d"},{url:"/_next/static/media/5.9dca2da8.jpg",revision:"4f2e789ce6cc4cad06435fdade79fbc8"},{url:"/_next/static/media/6.78ad5cf7.jpg",revision:"3151f885f547d339b1cf18b5bb1f73b3"},{url:"/_next/static/media/6.af406fae.png",revision:"1accbcd6285e73d2375a045650f3de79"},{url:"/_next/static/media/7.de2465aa.jpg",revision:"b2e872f79e72bb877dc4e757001ab3ee"},{url:"/_next/static/media/8.d01df0ca.jpg",revision:"a1ecd8202a9a1f4d382fea1bbd67ba43"},{url:"/_next/static/media/8.d5cf3f01.jpg",revision:"7821c7e8b4fbb7666c6ad32de2583213"},{url:"/_next/static/media/9.cbdf23e0.jpg",revision:"4badb43d5c1d2a96ed55e99dcf657120"},{url:"/_next/static/media/anchor.89a312fc.svg",revision:"e232e503327eefcc293f739c3ee8b953"},{url:"/_next/static/media/author.67e99d23.jpg",revision:"3094dd694f05fb77263bbb29593cb119"},{url:"/_next/static/media/avalanche.a059c315.svg",revision:"cfc1de02bb200da9b21997489189f1ce"},{url:"/_next/static/media/bank.4067932b.svg",revision:"3bfc1e4b90d78f886074cc6e222c29f6"},{url:"/_next/static/media/binance.72164c61.svg",revision:"2317499849a2ff3b6fad5d2b92bf46e1"},{url:"/_next/static/media/bitcoin.478c0c84.svg",revision:"7621b5d99802f3db51b5a47b29b835b0"},{url:"/_next/static/media/bitcoin.81bd702b.svg",revision:"947cd95b0c1dd8d9d8b819166dd9cdbb"},{url:"/_next/static/media/cappasity.a2361a5b.svg",revision:"d33e226d7aef92d7a38cafde8d723deb"},{url:"/_next/static/media/cardano.67050fa6.svg",revision:"51f6d0e8f5996b33fe81c18086d4ecbe"},{url:"/_next/static/media/claimable.58babc2f.svg",revision:"4dfea92ed4728771f17103933a609851"},{url:"/_next/static/media/collection-1.2655e340.jpg",revision:"fdb05a61a09c62a7f68b18c97566f6a2"},{url:"/_next/static/media/collection-2.89da124f.jpg",revision:"9de3f89c9d9830cbd76dc0c8b5bb21e8"},{url:"/_next/static/media/collection-3.4e0f5e37.jpg",revision:"34cfc9e1a7bbd81acedc92e2f2fa76f4"},{url:"/_next/static/media/collection-4.5ddfe301.jpg",revision:"5d999d5bd8bd89fb141ca5592a830790"},{url:"/_next/static/media/collection-5.0f331391.jpg",revision:"a9a5d93cdb915050bd59ed8502d64c77"},{url:"/_next/static/media/collection-6.c8c14afe.jpg",revision:"fa54c28f318f387e6cd4fce59c7f4086"},{url:"/_next/static/media/curve.846ed970.svg",revision:"3d487e6fa3bdbb81b23fed17fb2f67e7"},{url:"/_next/static/media/deposit.32fbbfad.svg",revision:"becd1c168d12fef51da297324270ee63"},{url:"/_next/static/media/discord.afeef450.svg",revision:"a3b20da39cf8cd3c3c013d5855381582"},{url:"/_next/static/media/ethereum.86228b51.svg",revision:"51171a5b732e737d80a6121fad3ef065"},{url:"/_next/static/media/forum.f35df0de.svg",revision:"e5608fc4d01e4f5d43433aeec61c6f28"},{url:"/_next/static/media/logo-white.c6f6ac2b.svg",revision:"2c07ae22aae1d04a5d5004736abd2099"},{url:"/_next/static/media/logo.46a30ae1.svg",revision:"f143f4be4cb036aa456aa9523068a814"},{url:"/_next/static/media/metamask.3285bae2.svg",revision:"c879a582a94e772b8ed27295ae83145d"},{url:"/_next/static/media/mirror.64731dd9.svg",revision:"90d520161466d2a45097af60dce0ec94"},{url:"/_next/static/media/nft-1.35139713.jpg",revision:"7c20fd9c46a7cdf82a5a89760b296c1e"},{url:"/_next/static/media/nft-2.c1c5fed8.jpg",revision:"c681f6e9baefd72f36b8284aecc6f576"},{url:"/_next/static/media/nft-3.906f9ce2.jpg",revision:"9ae6662be4a369208bd3b475b5116056"},{url:"/_next/static/media/nft-4.e9c10886.jpg",revision:"9d6cb2a72e479fe533a4505401757e25"},{url:"/_next/static/media/nft.d91683d5.svg",revision:"03fd8b644e3b914e415fedc2b328c64d"},{url:"/_next/static/media/pancake-bunny.2c04e85a.svg",revision:"dbb8526d54f27668cff04591bba4f7e7"},{url:"/_next/static/media/pancake.3978dfae.svg",revision:"33a17510e5cd4941467064c5ad798f4f"},{url:"/_next/static/media/poolto-gether.7f67a4c8.svg",revision:"d4280beb3891eaf46bea973eec6ad601"},{url:"/_next/static/media/profile-cover.56ac09da.jpg",revision:"e1e1bece5b85fdf3550de16b4f4a5f79"},{url:"/_next/static/media/single-nft.d4224f48.jpg",revision:"91ae2ed26ada3b60a45a7c6f3cb880a7"},{url:"/_next/static/media/tether.2812ac25.svg",revision:"422ffad64bede6a3055bc9905747d6d8"},{url:"/_next/static/media/uniswap.c61798be.svg",revision:"54492b4ffce3741c4a80451d3183ddbd"},{url:"/_next/static/media/user-1.d4b43d77.png",revision:"ddf3e4622304fda97b504081c06de271"},{url:"/_next/static/media/user-2.83edef50.png",revision:"d278930bbc7843dc9a7e389b1f3d26b1"},{url:"/_next/static/media/vote-pool.b7007dec.svg",revision:"9b9ccca42e873dff5b5fa0b5f9f766a8"},{url:"/_next/static/media/wallet.8a45e058.svg",revision:"c0de0d847ae00cb60c88bcefb58fde89"},{url:"/favicon.ico",revision:"f71078cabc737821880809764083689b"},{url:"/favicon_.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:c,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));