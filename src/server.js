import app from './index.js'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Servidor aberto em \nhttp://localhost:${port}`)
})