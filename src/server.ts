import express from 'express'

const app = express()

app.get('/users', (req, res) => {
    return res.json([{ name: 'Yo' }, { name: 'Yo2' }])
})

app.listen(2345)