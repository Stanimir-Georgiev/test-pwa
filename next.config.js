const path = require("path");
const withOffline = require("next-offline");

module.exports = withOffline({
  compress: false, // for better performance this should be done by the server
  generateInDevMode: false,
  dontAutoRegisterSw: true,
  generateSw: false,
  workboxOpts: {
    swDest: path.join(__dirname, `/public/service-worker.js`),
    swSrc: path.join(__dirname, "sw.js"),
  },
});
