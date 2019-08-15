
jsSHA = require("jssha");

import { hex_rmd160 } from './hex-ripe';

function bundleDigest(inflow) {
    // Use this to perform doubleSHA and RIPEMD160!
    let shaObj = new jsSHA("SHA-256", "TEXT");
    let shaObj2 = new jsSHA("SHA-256", "TEXT");
    shaObj.update(inflow);
    let s1 = shaObj.getHash("HEX");
    shaObj2.update(s1);
    let s2 = shaObj2.getHash("HEX");
    console.log(s2)
    return hex_rmd160(s2);
  }

export { 
    bundleDigest
}
