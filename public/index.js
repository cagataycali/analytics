// Client side script which is provider, will be here.
console.log(window.location)
// get fingerpring
const fingerprint = 'demo'

fetch("http://135.181.150.199:3000/", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ href: window.location.href, fingerprint }),
});