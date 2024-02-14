import express from 'express'
import { json } from 'express'
import serverless from 'serverless-http'

export async function handler(event, context) {
    const Item = require('./models/item');
    const cors = require('cors')
    const app = express();
    // const port = 4000;
    const mongoose = require('mongoose');

    app.use(json())
    app.use(cors())

    mongoose.connect('mongodb+srv://root:opoCxdf0cozCoOaF@cluster0.ynkwr2g.mongodb.net/onebody')
        .then(() => console.log('MongoDB connected...'))
        .catch(err => console.log(err));

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });


    app.get('/items', async (req, res) => {
        try {
            const items = await Item.find()
            res.send(items)
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    })

    app.get('/item/:id', async (req, res) => {
        try {
            const item = await Item.findById(req.params.id)
            res.send(item)
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    })
    return serverless(app)(event, context)
}

