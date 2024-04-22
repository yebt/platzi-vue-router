import express from 'express'
import history from 'connect-history-api-fallback'

const port = 8080
const app = express()

app.use(history())
app.use(express.static('dist'))

app.listen(port, () => console.log(`Server running on port ${port}: http://localhost:${port}`))
