import express from 'express'
import db from './db/connection'

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.send("hola mundo!")
})

routes.get('/users', (req, res) => {
    console.log('query', req.query)
    return res.json([{ name: 'Yo' }, { name: 'Yo2' }])
})

routes.post('/classes', async (req, res) => {
    const { name, avatarUrl, phone, bio, subject, cost, schedule } = req.body

    await db('users').insert({
        name,
        avatar_url: avatarUrl,
        phone,
        bio
    })

    return res.send('back')
})

routes.delete('/users/:id', (req, res) => {
    console.log('params', req.params)
    return res.json([{ name: 'Yo' }, { name: 'Yo2' }])
})

export default routes