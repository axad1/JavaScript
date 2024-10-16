const dns = require("dns");

url = new URL("https://www.google.com/");
console.log(url);
dns.lookup(url.hostname, (err, address, family) => {
  if (err) {
    console.error("Domain does not resolve:", err);
  } else {
    console.log("IP address:", address); // e.g., 93.184.216.34
    console.log("IP version:", family); // e.g., IPv4
  }
});
