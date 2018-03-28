const express = require('express')
const os = require('os');
const hostname=os.hostname();
const app = express()

app.get('/', (req, res) => res.send(hostname))

app.listen(8080, () => console.log('Example app listening on port 8080!'))
