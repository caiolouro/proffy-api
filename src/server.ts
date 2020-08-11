import express from 'express'

const app = express()
app.use(express.json())

app.get('/users', (req, res) => {
    console.log('query', req.query)
    return res.json([{ name: 'Yo' }, { name: 'Yo2' }])
})

app.post('/users', (req, res) => {
    console.log('body', req.body)
    return res.json([{ name: 'Yo' }, { name: 'Yo2' }])
})

app.delete('/users/:id', (req, res) => {
    console.log('params', req.params)
    return res.json([{ name: 'Yo' }, { name: 'Yo2' }])
})

app.listen(2345)