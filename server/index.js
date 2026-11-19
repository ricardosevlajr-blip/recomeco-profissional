import express from 'express'

const app = express()
const port = Number(process.env.PORT || 3001)

// Rota solicitada no enunciado da Atividade 1.
app.get('/api/health', (_request, response) => {
  response.set('Cache-Control', 'no-store')
  response.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.listen(port, '127.0.0.1', () => {
  console.log(`API Recomeço Profissional: http://localhost:${port}/api/health`)
})
