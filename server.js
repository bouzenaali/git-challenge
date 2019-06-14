const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') return respondHello(req, res)
<<<<<<< HEAD
  if (req.url === '/user-agent') return respondUserAgent(req, res)
=======
  if (req.url.match(/^\/b64\//)) return respondBase64(req, res)
>>>>>>> f7b98cc (feat: add base64 endpoint)

  res.end()
})

function respondHello (req, res) {
  res.end(JSON.stringify({ msg: 'hello' }))
}

<<<<<<< HEAD
function respondUserAgent (req, res) {
  const ua = req.headers['user-agent']
  res.end(JSON.stringify({ ua }))
=======
function respondBase64 (req, res) {
  const phrase = req.url.replace(/^\/b64\//, '')
  res.end(JSON.stringify({ b64: Buffer.from(phrase).toString('base64') }))
>>>>>>> f7b98cc (feat: add base64 endpoint)
}

server.listen(PORT)
console.log(`Server listening on port ${PORT}`)

if (require.main !== module) module.exports = server
