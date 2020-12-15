const express = require('express')
const app = express()
const port = process.env.PORT || 3000
// const {getHREF} = require('./utils')
// const {all, get, count, add} = require('./db')

app.use(express.json())
app.use(express.static("public"));

// app.get("/", (req, res) => res.json(all()));
app.get("/", (req, res) => res.json({}));

// app.get("/a/*", (req, res) => res.json(get(getHREF(req))));

// app.get("/c/*", (req, res) => res.json({count: count(getHREF(req))}));

// app.post('/', (req, res) => {
//   // req.body must be includes {href: 'http://localhost:3000'} like object.
//   add(req.body);
//   res.sendStatus(200)
// })

app.listen(port, _ => console.log(`Example app listening at http://localhost:${port}`))