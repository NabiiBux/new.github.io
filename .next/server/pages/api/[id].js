(function() {
var exports = {};
exports.id = 536;
exports.ids = [536];
exports.modules = {

/***/ 137:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _id_; }
});

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(25);
// EXTERNAL MODULE: external "web3"
var external_web3_ = __webpack_require__(409);
var external_web3_default = /*#__PURE__*/__webpack_require__.n(external_web3_);
;// CONCATENATED MODULE: ./database/traitsfinal.json
;// CONCATENATED MODULE: ./pages/api/[id].js

 // import the json containing all metadata. not recommended, try to fetch the database from a middleware if possible, I use MONGODB for example


const infuraAddress = config/* INFURA_ADDRESS */.WO;

const bananaApi = async (req, res) => {
  // SOME WEB3 STUFF TO CONNECT TO SMART CONTRACT
  const provider = new (external_web3_default()).providers.HttpProvider(infuraAddress);
  const web3infura = new (external_web3_default())(provider);
  const bananaContract = new web3infura.eth.Contract(config/* ABI */.dL, config/* ADDRESS */.o4); // IF YOU ARE USING INSTA REVEAL MODEL, USE THIS TO GET HOW MANY NFTS ARE MINTED
  //   const totalSupply = await bananaContract.methods.totalSupply().call();
  //   console.log(totalSupply)
  // THE ID YOU ASKED IN THE URL

  const query = req.query.id; // IF YOU ARE USING INSTA REVEAL MODEL, UNCOMMENT THIS AND COMMENT THE TWO LINES BELOW
  //   if(parseInt(query) < totalSupply) {

  const totalBananas = 8888;

  if (parseInt(query) < totalBananas) {
    // CALL CUSTOM TOKEN NAME IN THE CONTRACT
    const tokenNameCall = await bananaContract.methods.bananaNames(query).call();
    let tokenName = `#${query}${tokenNameCall === '' ? "" : ` - ${tokenNameCall}`}`; // IF YOU ARE NOT USING CUSTOM NAMES, JUST USE THIS
    // let tokenName= `#${query}`

    const signatures = [137, 883, 1327, 1781, 2528, 2763, 3833, 5568, 5858, 6585, 6812, 7154, 8412];
    const trait = traitsfinal_namespaceObject[parseInt(query)]; // const trait = traits[ Math.floor(Math.random() * 8888) ] // for testing on rinkeby 
    // CHECK OPENSEA METADATA STANDARD DOCUMENTATION https://docs.opensea.io/docs/metadata-standards

    let metadata = {}; // IF THE REQUESTED TOKEN IS A SIGNATURE, RETURN THIS METADATA

    if (signatures.includes(parseInt(query))) {
      metadata = {
        "name": tokenName,
        "description": "Ele Fans Nft is a community-centered enterprise focussed on preserving our research about the emerging reports that several banana species have begun exhibiting strange characteristics following the recent worldwide pandemic. Our research team located across the globe has commenced efforts to study and document these unusual phenomena. Concerned about parties trying to suppress our research, the team has opted to store our findings on the blockchain to prevent interference. Although this is a costly endeavour, our mission has never been clearer. The fate of the world's bananas depends on it.",
        "tokenId": parseInt(query),
        "image": `https://gateway.pinata.cloud/ipfs/${trait["imageIPFS"]}`,
        "external_url": "https://www.ElefansNft.com",
        "attributes": [{
          "trait_type": "Signature Series",
          "value": trait["Signature Series"]
        }]
      }; // console.log(metadata)
    } else {
      // GENERAL BANANA METADATA
      metadata = {
        "name": tokenName,
        "description": "BoringBananasCo is a community-centered enterprise focussed on preserving our research about the emerging reports that several banana species have begun exhibiting strange characteristics following the recent worldwide pandemic. Our research team located across the globe has commenced efforts to study and document these unusual phenomena. Concerned about parties trying to suppress our research, the team has opted to store our findings on the blockchain to prevent interference. Although this is a costly endeavour, our mission has never been clearer. The fate of the world's bananas depends on it.",
        "tokenId": parseInt(query),
        "image": `https://gateway.pinata.cloud/ipfs/${trait["imageIPFS"]}`,
        "external_url": "https://www.boringbananas.co",
        "attributes": [{
          "trait_type": "Background",
          "value": trait["Background"]
        }, {
          "trait_type": "Banana Base",
          "value": trait["Banana Base"]
        }, {
          "trait_type": "Mouth",
          "value": trait["Mouth"]
        }, {
          "trait_type": "Eyes",
          "value": trait["Eyes"]
        }, {
          "trait_type": "Head Gear",
          "value": trait["Head Gear"]
        }]
      }; // console.log(metadata)
    }

    res.statusCode = 200;
    res.json(metadata);
  } else {
    res.statuscode = 404;
    res.json({
      error: "The Ele Fans you requested is out of range"
    });
  } // this is after the reveal

};

/* harmony default export */ var _id_ = (bananaApi);

/***/ }),

/***/ 409:
/***/ (function(module) {

"use strict";
module.exports = require("web3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [25], function() { return __webpack_exec__(137); });
module.exports = __webpack_exports__;

})();