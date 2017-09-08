var Nightmare = require("nightmare")
var nightmare = Nightmare()

const test = {
  marginsType: 0,
  printBackground: false,
  printSelectionOnly: false,
  landscape: false
}

nightmare
  .goto("https://www.google.com")
  .wait(3000)
  .viewport(1920, 1080)
  .print('./test.pdf', test)