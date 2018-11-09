// console.log(this)
this.onmessage = function(res) {
  // console.dir(res.data)
  this.postMessage(res.data.one + res.data.two)
}