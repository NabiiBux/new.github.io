(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{23646:function(e,t,a){var n=a(67228);e.exports=function(e){if(Array.isArray(e))return n(e)}},59713:function(e){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},46860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,a){var n=a(23646),s=a(46860),i=a(60379),r=a(98206);e.exports=function(e){return n(e)||s(e)||i(e)||r()}},23398:function(e,t,a){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var s=((n=a(67294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=s},76393:function(e,t,a){"use strict";t.__esModule=!0,t.isInAmpMode=r,t.useAmp=function(){return r(s.default.useContext(i.AmpStateContext))};var n,s=(n=a(67294))&&n.__esModule?n:{default:n},i=a(23398);function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,a=void 0!==t&&t,n=e.hybrid,s=void 0!==n&&n,i=e.hasQuery,r=void 0!==i&&i;return a||s&&r}},92775:function(e,t,a){"use strict";var n=a(59713);function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}t.__esModule=!0,t.defaultHead=m,t.default=void 0;var i,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=h();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var i=n?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(a,s,i):a[s]=e[s]}a.default=e,t&&t.set(e,a);return a}(a(67294)),l=(i=a(73244))&&i.__esModule?i:{default:i},o=a(23398),c=a(41165),d=a(76393);function h(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return h=function(){return e},e}function m(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function x(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function u(e,t){return e.reduce((function(e,t){var a=r.default.Children.toArray(t.props.children);return e.concat(a)}),[]).reduce(x,[]).reverse().concat(m(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,a=new Set,n={};return function(s){var i=!0,r=!1;if(s.key&&"number"!==typeof s.key&&s.key.indexOf("$")>0){r=!0;var l=s.key.slice(s.key.indexOf("$")+1);e.has(l)?i=!1:e.add(l)}switch(s.type){case"title":case"base":t.has(s.type)?i=!1:t.add(s.type);break;case"meta":for(var o=0,c=p.length;o<c;o++){var d=p[o];if(s.props.hasOwnProperty(d))if("charSet"===d)a.has(d)?i=!1:a.add(d);else{var h=s.props[d],m=n[d]||new Set;"name"===d&&r||!m.has(h)?(m.add(h),n[d]=m):i=!1}}}return i}}()).reverse().map((function(e,a){var i=e.key||a;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var l=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.props||{});return l["data-href"]=l.href,l.href=void 0,l["data-optimized-fonts"]=!0,r.default.cloneElement(e,l)}return r.default.cloneElement(e,{key:i})}))}var f=function(e){var t=e.children,a=(0,r.useContext)(o.AmpStateContext),n=(0,r.useContext)(c.HeadManagerContext);return r.default.createElement(l.default,{reduceComponentsToState:u,headManager:n,inAmpMode:(0,d.isInAmpMode)(a)},t)};t.default=f},73244:function(e,t,a){"use strict";var n=a(319),s=a(34575),i=a(93913),r=(a(81506),a(2205)),l=a(78585),o=a(29754);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=o(e);if(t){var s=o(this).constructor;a=Reflect.construct(n,arguments,s)}else a=n.apply(this,arguments);return l(this,a)}}t.__esModule=!0,t.default=void 0;var d=a(67294),h=function(e){r(a,e);var t=c(a);function a(e){var i;return s(this,a),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(n(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(a,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),a}(d.Component);t.default=h},56124:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return i}});var n=a(85893),s=a(9008);function i(){return(0,n.jsxs)("div",{id:"bodyy",className:"flex flex-col items-center justify-center min-h-screen py-2",children:[(0,n.jsxs)(s.default,{children:[(0,n.jsx)("title",{children:"ELe Fans NFT"}),(0,n.jsx)("link",{rel:"icon",href:"/images/favicon.ico"}),(0,n.jsx)("meta",{property:"og:title",content:"Boring Bananas Co."},"ogtitle"),(0,n.jsx)("meta",{property:"og:description",content:"Here at Boring Bananas company, we specialise in the world's finest digital bananas. We've put together a team spanning 3 continents, to bring you some of the most \u200dNUTRITIOUS and DELICIOUS\r\nbananas out known to man."},"ogdesc"),(0,n.jsx)("meta",{property:"og:type",content:"website"},"ogtype"),(0,n.jsx)("meta",{property:"og:url",content:"https://elefansnft.com/"},"ogurl"),(0,n.jsx)("meta",{property:"og:image",content:"https://elefansnft.com//images/Hola.gif"},"ogimage"),(0,n.jsx)("meta",{property:"og:site_name",content:"https://elefansnft.com//"},"ogsitename"),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"},"twcard"),(0,n.jsx)("meta",{property:"twitter:domain",content:"elefansnft.com"},"twdomain"),(0,n.jsx)("meta",{property:"twitter:url",content:"https://elefansnft.com//"},"twurl"),(0,n.jsx)("meta",{name:"twitter:title",content:"Boring Bananas Co."},"twtitle"),(0,n.jsx)("meta",{name:"twitter:description",content:"Here at boring Bananas company, we specialise in the world's finest digital bananas. We've put together a team spanning 3 continents, to bring you some of the most \u200dNUTRITIOUS and DELICIOUS\r\nbananas out known to man."},"twdesc"),(0,n.jsx)("meta",{name:"twitter:image",content:"https://elefansnft.com/images/Hola.gif"},"twimage")]}),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"flex items-center justify-between w-full border-b-2\tpb-6",children:[(0,n.jsx)("a",{href:"/",className:"",children:(0,n.jsx)("img",{src:"images/Hola.gif",width:"108",alt:"",className:"logo-image"})}),(0,n.jsxs)("nav",{className:"flex flex-wrap flex-row justify-around Poppitandfinchsans",children:[(0,n.jsx)("a",{href:"#about",className:"text-4xl text-white hover:text-black m-6",children:"About"}),(0,n.jsx)("a",{href:"/mint",className:"text-4xl text-white hover:text-black m-6",children:"MINT!"}),(0,n.jsx)("a",{href:"#roadmap",className:"text-4xl text-white hover:text-black m-6",children:"Roadmap"}),(0,n.jsx)("a",{href:"#roadmap",className:"text-4xl text-white hover:text-black m-6",children:"Faqs"}),(0,n.jsx)("a",{href:"#team",className:"text-4xl text-white hover:text-black m-6",children:"Team"}),(0,n.jsx)("a",{href:"https://twitter.com/boringbananasco",className:"text-4xl  hover:text-black m-6 text-white",children:"TWITTER"}),(0,n.jsx)("a",{href:"https://discord.gg/8Wk9Hp6UyV",className:"text-4xl  hover:text-black m-6 text-white",children:"DISCORD"})]})]})}),(0,n.jsxs)("div",{className:"md:w-2/3 w-4/5 ",id:"about",children:[(0,n.jsxs)("div",{className:"mt-6 border-b-2 py-6",children:[(0,n.jsxs)("div",{className:"flex flex-wrap lg:flex-nowrap justify-around items-center",children:[(0,n.jsxs)("div",{className:"lg:w-1/2 w-3/4",children:[(0,n.jsxs)("h1",{className:"text-7xl ChocoMellowDemoRegular text-white ",children:["EVERYONE, meet ",(0,n.jsx)("br",{}),(0,n.jsx)("span",{className:"text-white",children:"Ele Fans NFT"})]}),(0,n.jsxs)("p",{className:"text-2xl text-white my-6  OpenSans-Light",children:[" The ",(0,n.jsx)("span",{className:"text-5xl OpenSans-Light ",children:"ELE"})," ",(0,n.jsx)("span",{className:"text-blau text-5xl Poppitandfinchsans",children:"Fans"})," ",(0,n.jsx)("span",{className:"text-5xl Poppitandfinch",children:"NFT"}),", is your subscription to all our events and activities.  ",(0,n.jsx)("span",{className:"text-span-2 font-bold",children:"finest digital Elephants"}),".",(0,n.jsx)("br",{}),"\u200d",(0,n.jsx)("br",{}),"We've put together a team spanning 3 continents, to bring you some of the most ",(0,n.jsx)("br",{}),"\u200d",(0,n.jsx)("span",{className:"text-black text-5xl Poppitandfinchsans",children:"NUTRITIOUS "}),(0,n.jsx)("span",{className:"text-5xl Poppitandfinch ",children:"and"}),(0,n.jsx)("span",{className:"text-black text-5xl Poppitandfinchsans",children:" DELICIOUS"})," ",(0,n.jsx)("br",{}),"Elephants out there."]}),(0,n.jsxs)("p",{className:"text-2xl text-white my-6  montserrat",children:[(0,n.jsx)("strong",{children:"LAUNCH DATE:"})," 20 Jan 2022. 2pm EST. ",(0,n.jsx)("br",{}),"\u200d",(0,n.jsxs)("span",{className:"text-white text-2xl montserrat",children:[(0,n.jsx)("strong",{children:"TOTAL SUPPLY: 10000"})," EleFansNft.",(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"PRICE: 0.09 ETH "}),"each."]})]}),(0,n.jsx)("iframe",{src:"https://free.timeanddate.com/countdown/i7vcex5b/n107/cf11/cm0/cu4/ct0/cs1/ca2/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fn3/fs100/szw448/szh189/iso2021-06-29T21:00:00",allowtransparency:"true",frameBorder:"0",width:"425",height:"25"})]}),(0,n.jsx)("img",{className:"lg:w-1/2 w-3/4",src:"images/Hola.gif",width:"500px"})]}),(0,n.jsx)("div",{className:"flex flex-col items-center",children:(0,n.jsx)("a",{href:"/mint",className:"mt-4 OpenSans-Light text-4xl border-6 bg-black  text-white hover:text-black p-2 ",children:"GO TO MINTING PAGE!"})})]}),(0,n.jsxs)("div",{id:"traits",className:"flex flex-wrap justify-around items-center  mx-6 py-6",children:[(0,n.jsx)("div",{className:"border-4 border-black-300 p-4",children:(0,n.jsx)("img",{src:"images/Traits4.gif",alt:"",width:"400px",className:"feature-image"})}),(0,n.jsxs)("div",{className:"flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ",children:[(0,n.jsx)("h2",{className:"text-blau Montserrat-Bold text-7xl text-center",children:" The Story"}),(0,n.jsxs)("p",{className:"text-xl text-white my-6  montserrat",children:[" Following the recent worldwide pandemic, ",(0,n.jsx)("span",{className:"font-bold",children:" emerging reports "}),"  suggest that several ",(0,n.jsx)("span",{className:"font-bold",children:" EleFans species "})," have begun exhibiting ",(0,n.jsx)("span",{className:"font-bold",children:" strange characteristics. "})," Our research team located across the globe has commenced efforts to ",(0,n.jsx)("span",{className:"font-bold",children:" study and document "}),"  these unusual phenomena."]}),(0,n.jsx)("p",{className:"text-xl text-white my-6  montserrat",children:" Elephants are the largest land animals in the world, they are very bright and have great communication skills (vibration). Not forgetting how cute their newborns are. The largest land animals have come together and brought to us the ELE FANS."}),(0,n.jsx)("p",{className:"text-xl text-white my-6  montserrat",children:" A collection of 10000 baby ELE Fans to help use those skills to give back to the community and the less fortunate in this world. ELE Fans love giving back and changing lives."}),(0,n.jsx)("p",{className:"text-xl text-white my-6  montserrat",children:" They live on the BLOCKCHAIN and each ELE Fan NFT holder will be able to take part in the community activities.  The ELE Fans will work full time to bring change to the community and the world."})]})]}),(0,n.jsxs)("div",{id:"gallery",className:"   mx-6 py-6",children:[(0,n.jsx)("h2",{className:"text-blau Poppitandfinchsans text-7xl text-center",children:"FAQS"}),(0,n.jsx)("p",{className:"text-blau Poppitandfinchsans text-3xl text-center",children:" How much does minting an NFT and the Nanopasses cost?"}),(0,n.jsx)("p",{className:"text-white Poppitandfinchsans text-2xl text-center",children:"The ELE FANS NFTs will cost 0.09ETH each. The Nano passes for the other competitions will always cost 0.02ETH per pass."}),(0,n.jsx)("p",{className:"text-blau Poppitandfinchsans text-3xl text-center",children:" How many ELE FANS NFTs do I need to hold to buy 5 Nano passes?"}),(0,n.jsx)("p",{className:"text-white Poppitandfinchsans text-3xl text-center",children:" The ELE FANS NFT will be your subscription to all competitions, Each NFT will whitelist you for the Nano Passes. To buy 5 nano passes you will need to hold 5 ELE FANS NFTs."}),(0,n.jsx)("p",{className:"text-blau Poppitandfinchsans text-3xl text-center",children:" Following the prizes, charity donation and adding to the community fund, What happens to the rest of the funds?"}),(0,n.jsx)("p",{className:"text-white Poppitandfinchsans text-3xl text-center",children:"  The funds will go towards salaries, partnerships and marketing. All aspects of the project that needs funding will be funded from that. The Community funds will be used strictly for the community giveaways nothing else and the charity funds will be used strictly for charities."}),(0,n.jsx)("p",{className:"text-blau Poppitandfinchsans text-3xl text-center",children:" How many NFTS can one buy on launch?"}),(0,n.jsx)("p",{className:"text-white Poppitandfinchsans text-2xl text-center",children:"There is no limit to how many NFTs can be bought per wallet. There will be a transaction limit of 10 NFTs per transaction."}),(0,n.jsx)("p",{className:"text-blau Poppitandfinchsans text-3xl text-center",children:"How can i mint the NFTs and the Nano passes?"}),(0,n.jsx)("p",{className:"text-white Poppitandfinchsans text-2xl text-center",children:"The minting of the ELE FANS NFT and all the nano passes will happen here on our website."}),(0,n.jsx)("p",{className:"text-blau Poppitandfinchsans text-3xl text-center",children:"What is the supply amounts of the Nano passes?"}),(0,n.jsx)("p",{className:"text-white Poppitandfinchsans text-2xl text-center",children:"The nano passes supply changes per competition. See the Roadmap for details on the competitions and the supply for each competition."}),(0,n.jsx)("p",{className:"text-blau Poppitandfinchsans text-3xl text-center",children:" Are there benefits to holding multiple ELE FANS NFTs?"}),(0,n.jsx)("p",{className:"text-white Poppitandfinchsans text-2xl text-center",children:"There is a few benefits. 1- ELE FANS NFTs are limited to 10,000 supply, 100 NFTS will be given back to the community throughout the first year. 2- ELE FANS NFTs will have Rarity traits and will be of different value 3- ELE FANS NFT will be your lifetime subscription to enter all competitions and giveaways for the community. 4- ELE FAN NFT is your entry to the first competition which up to two winners will WIN a Tesla Model 3."}),(0,n.jsx)("p",{className:"text-blau Poppitandfinchsans text-3xl text-center",children:" How and where will the competitions be drawn?"}),(0,n.jsx)("p",{className:"text-white Poppitandfinchsans text-2xl text-center",children:" All our competitions will be drawn LIVE on our YouTube channel. Make sure you subscribe to get all the notifications. All the draws will be done using random.org on live stream."}),(0,n.jsx)("p",{className:"text-blau Poppitandfinchsans text-3xl text-center",children:" How will the live draw work?"}),(0,n.jsx)("p",{className:"text-white Poppitandfinchsans text-2xl text-center",children:"The live draw will be done on random.org. The process is: 1- we will state the LIVE TIME in GMT format to ensure that we are live and it's not recorded. 2- We will open random.org on a browser which is in 'private browsing mode' to ensure no cache data is in play. 3- We will draw a minimum of 5 numbers drawn to ensure that the software is random. it will be in a range of numbers that is not included in the actual draw. 4- we will then setup the draw numbers and pick the winners. 4.1- If the draw is crowning multiple winners we will use the same draw."}),(0,n.jsx)("p",{className:"text-blau Poppitandfinchsans text-3xl text-center",children:" How will you know you are rewarding the prizes to the right winners?"}),(0,n.jsx)("p",{className:"text-white Poppitandfinchsans text-2xl text-center",children:"All winners of the competitions will need to be verified by ID to ensure we are rewarding the rightful winners."}),(0,n.jsx)("p",{className:"text-blau Poppitandfinchsans text-3xl text-center",children:" The giveaways are the same as the competitions?"}),(0,n.jsx)("p",{className:"text-white Poppitandfinchsans text-2xl text-center",children:"The giveaways are not the same as the competitions, the competitions require nanopasses and will be minted from our website. the giveaways are done randomly on our discord, the prizes are ELE FANS NFT, ETH, BTC and many more. They are available for our community even if you are not an ELE FANS NFT holder."}),(0,n.jsxs)("div",{className:"flex flex-wrap  items-center mx-6   py-6 ",children:[(0,n.jsx)("div",{className:"md:w-1/2",children:(0,n.jsx)("div",{className:" border-blue-300 p-2",children:(0,n.jsx)("img",{src:"images/gallery1.jpeg",alt:"",width:"600px",className:"feature-image"})})}),(0,n.jsxs)("div",{className:"md:w-1/2 flex flex-wrap",children:[(0,n.jsx)("div",{className:" p-2 w-1/2",children:(0,n.jsx)("img",{src:"images/gallery2.jpeg",alt:"",width:"400px",className:"feature-image"})}),(0,n.jsx)("div",{className:" p-2 w-1/2",children:(0,n.jsx)("img",{src:"images/gallery3.jpeg",alt:"",width:"400px",className:"feature-image"})}),(0,n.jsx)("div",{className:" p-2 w-1/2",children:(0,n.jsx)("img",{src:"images/gallery4.jpeg",alt:"",width:"400px",className:"feature-image"})})]})]})]}),(0,n.jsxs)("div",{id:"roadmap",className:"",children:[(0,n.jsx)("img",{src:"/images/Roadmap.png"}),(0,n.jsx)("h2",{className:"text-7xl text-center Poppitandfinchsans text-blau my-4",children:"OUR MISSION STATEMENT"}),(0,n.jsxs)("p",{className:"text-xl text-white text-center my-6  montserrat",children:[" Simple. To be the largest contributor to charity in the NFT space, as measured by % ",(0,n.jsx)("span",{className:"font-bold",children:" of primary sales. "})]}),(0,n.jsx)("h2",{className:"text-7xl text-center Poppitandfinchsans text-blau my-4",children:"HOW WE'RE GIVING BACK"}),(0,n.jsxs)("p",{className:"text-xl text-white my-6  montserrat",children:["Ever since the inception of the ",(0,n.jsx)("span",{className:"text-5xl Poppitandfinch ",children:"boring"})," ",(0,n.jsx)("span",{className:"text-blau text-5xl Poppitandfinchsans",children:"Bananas"})," ",(0,n.jsx)("span",{className:"text-5xl Poppitandfinch",children:"company"})," after ",(0,n.jsx)("a",{target:"_blank",href:"https://twitter.com/thedigitalvee/status/1405896585142280192",className:"underline text-black font-bold",children:"this tweet"}),", our goal has been to ",(0,n.jsx)("span",{className:"text-blau text-5xl Poppitandfinchsans",children:"GIVE BACK"})," as much as possible."]}),(0,n.jsxs)("p",{className:"text-xl text-white my-6  montserrat",children:[" A minimum of",(0,n.jsx)("span",{className:"font-bold",children:" 25% of all sales"})," are donated to charity."]}),(0,n.jsxs)("p",{className:"text-xl text-white my-6  montserrat",children:[" At 100% sellout, we pledge to donate ",(0,n.jsx)("span",{className:"font-bold",children:" 60 ETH "})," from primary sales."]}),(0,n.jsx)("h2",{className:"text-6xl text-center Poppitandfinchsans text-blau my-4",children:"ROADMAP"}),(0,n.jsxs)("ul",{className:"",children:[(0,n.jsxs)("li",{className:"text-3xl text-Black my-6  montserrat",children:[(0,n.jsx)("span",{className:"font-bold",children:" Pre-Mint "})," ",(0,n.jsx)("p",{children:" Community Development - Community Building (Discord, Twitter, You Tube). - Artwork Designing. - Smart Contract development. - Ele Fans Marketing on all platforms. - Recruitment of Core Team. - DAO Development. -- Community will decide how we achieve our goals, how we give back to the community."})]}),(0,n.jsxs)("li",{className:"text-xl text-white my-6  montserrat",children:[(0,n.jsx)("span",{className:"font-bold",children:" MINT "})," ",(0,n.jsx)("p",{children:"ELE FANS NFT Launch -Pre / Public-sale -Price 0.09 ETH -Supply: 10,000 ELE FANS NFT -REVEAL -Rarity will be available on elefansnft.com and rarity.tools. -No limit to how many NFTs one wallet can buy. -Each NFT is one Whitelist spot to all future Nano passes. -Nano passes are limited to one entry per ELE FANS NFT."})]}),(0,n.jsxs)("li",{className:"text-xl text-white my-6  montserrat",children:[(0,n.jsx)("span",{className:"font-bold",children:" First Competition "})," - ELE FANS NFT Competition - Prize: Up to 2x TESLA MODEL 3 - MUST BE A HOLDER to get entry to this competition on the day of the draw. -- 50% sales means 1x Tesla Model 3 winner. -- 100% sales means 2x Tesla Model 3 winner. - Draw will be conducted and announced live on our YOUTUBE CHANNEL. - ELE Fans NFT numbers will be your entry number to the competition. - Vehicles will be ordered for the winners from their nearest TESLA branch (ETH Alternative available if the winner prefers it)."]}),(0,n.jsxs)("li",{className:"text-xl text-white my-6  montserrat",children:[(0,n.jsx)("span",{className:"font-bold",children:" Second Competition "})," 5 ETH NFT COMPETITION - Nano pass Competition - Prize: 3x NFTs worth 5 ETH of winner's choice (3 Winners) -+ - Supply: 3000 ONLY - Price: 0.02 ETH - Nano passes will be minted. - Available for all ELE FAN HOLDERS via our website. - Draw will be conducted and announced live on our YOU TUBE CHANNEL. - Nano pass numbers will be your entry numbers to the competition. - The winners will be contacted, the NFT of their choice."]}),(0,n.jsxs)("li",{className:"text-xl text-white my-6  montserrat",children:[(0,n.jsx)("span",{className:"font-bold",children:" Third Competition "})," 10 ETH NFT COMPETITION - Nano pass Competition - Prize: 2x NFT worth 10 ETH of winner's choice (2 Winners) - Supply: 3000 ONLYPrice: 0.02 ETH - Nano passes will be minted. - Available for all ELE FAN HOLDERS via our website. - Draw will be conducted and announced live on our YOU TUBE CHANNEL. - Nano pass numbers will be your entry numbers to the competition. - Winners will be contacted and rewarded the NFTs."]})]})]}),(0,n.jsxs)("div",{id:"team",className:"mx-12 my-16 ",children:[(0,n.jsx)("h2",{className:"text-7xl text-center Poppitandfinchsans text-blau my-4",children:"ELe Fans Nft RESEARCH TEAM"}),(0,n.jsxs)("div",{className:"flex justify-around flex-wrap",children:[(0,n.jsxs)("div",{className:"flex flex-col  my-6",style:{width:"360px"},children:[(0,n.jsx)("div",{className:"cards-image-mask",children:(0,n.jsx)("img",{src:"/images/ELE FATHER.png",width:"360px",alt:"",className:"cards-image"})}),(0,n.jsx)("h3",{className:"my-4 text-center text-5xl text-center Poppitandfinchsans text-blau",children:"ELE Father"}),(0,n.jsx)("a",{className:"text-center text-4xl text-center Poppitandfinchsans text-white",children:"Co-Founder Project Manager"})]}),(0,n.jsxs)("div",{className:"flex flex-col  my-6",style:{width:"360px"},children:[(0,n.jsx)("div",{className:"cards-image-mask",children:(0,n.jsx)("img",{src:"/images/ELE Mother.png",width:"360px",alt:"",className:"cards-image"})}),(0,n.jsx)("h3",{className:"my-4 text-center text-5xl text-center Poppitandfinchsans text-blau",children:"ELE Mother"}),(0,n.jsx)("a",{className:"text-center text-4xl text-center Poppitandfinchsans text-white",children:"Co-Founder Team Manager"})," "]}),(0,n.jsxs)("div",{className:"flex flex-col  my-6",style:{width:"360px"},children:[(0,n.jsx)("div",{className:"cards-image-mask",children:(0,n.jsx)("img",{src:"/images/ELE Guardian.png",width:"360px",alt:"",className:"cards-image"})}),(0,n.jsx)("h3",{className:"my-4 text-center text-5xl text-center Poppitandfinchsans text-blau",children:"ELE Guardian"}),(0,n.jsx)("a",{className:"text-center text-4xl text-center Poppitandfinchsans text-white",children:" Community Manager"}),"                "]}),(0,n.jsxs)("div",{className:"flex flex-col  my-6",style:{width:"360px"},children:[(0,n.jsx)("div",{className:"cards-image-mask",children:(0,n.jsx)("img",{src:"/images/ELE Developer.png",width:"360px",alt:"",className:"cards-image"})}),(0,n.jsx)("h3",{className:"my-4 text-center text-5xl text-center Poppitandfinchsans text-blau",children:"ELE Developer"}),(0,n.jsx)("a",{className:"text-center text-4xl text-center Poppitandfinchsans text-white",children:"Project Developer"})]})]})]}),(0,n.jsxs)("div",{id:"contact",className:"flex flex-wrap justify-around items-center  mx-6 py-6",children:[(0,n.jsx)("div",{className:" p-4",children:(0,n.jsx)("img",{src:"images/letstalk.png",alt:"",width:"400px",className:"feature-image"})}),(0,n.jsxs)("div",{className:"flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ",children:[(0,n.jsx)("h2",{className:"text-blau Poppitandfinchsans text-6xl text-center",children:"CONTACT ELEFANS RESEARCH TEAM"}),(0,n.jsx)("p",{className:"text-xl text-white my-6  montserrat",children:" We'd love to hear from you!"}),(0,n.jsxs)("p",{className:"text-xl text-white my-6  montserrat",children:[" Drop us a line at ",(0,n.jsx)("a",{className:"text-black underline font-bold",target:"_blank",href:"mailto:boringbananas69@gmail.com",children:"boringbananas69@gmail.com"}),",",(0,n.jsx)("br",{}),"or alternatively reach out to us on Twitter ",(0,n.jsx)("a",{className:"text-black underline font-bold",target:"_blank",href:"https://twitter.com/boringbananasco",children:"@BoringBananasCo"}),(0,n.jsx)("br",{}),"Or alternatively, join our ",(0,n.jsx)("a",{className:"text-black underline font-bold",target:"_blank",href:"https://discord.gg/8Wk9Hp6UyV",children:"Discord Server"}),"."]})]})]})]})]})}},78581:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(56124)}])},9008:function(e,t,a){e.exports=a(92775)}},function(e){e.O(0,[774,888,179],(function(){return t=78581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);