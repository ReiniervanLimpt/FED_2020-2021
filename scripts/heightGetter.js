const body = document.body,
  html = document.documentElement

let height = Math.max(body.scrollHeight, body.offsetHeight,
  html.clientHeight, html.scrollHeight, html.offsetHeight)
console.log(height)