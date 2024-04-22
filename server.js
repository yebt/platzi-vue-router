import express from 'express'

const port = 8080
const app = express()

app.use(express.static('dist'))

app.listen(port, () => console.log(`Server running on port ${port}: http://localhost:${port}`))
