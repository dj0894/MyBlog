import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient, MOngoClient } from 'mongodb'; //to connect to local database
const PORT = 5000;
const app = express();
app.use(bodyParser.json());// Parses json object includes in post request

const withDB = async (operations) => {
    try {

        const client = await MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }) //async call for connecting mongoDB
        const db = client.db('my-blog') // connect db my-blog
        await operations(db);
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error while connecting database', error })
    }
}

app.get('/api/articles/:name', async (req, res) => {
    withDB(async (db) => {
        const articleName = req.params.name;
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(articleInfo);
    }, res)


})

app.post('/api/articles/:name/upvote', async (req, res) => {
    withDB(async (db) => {
        const articleName = req.params.name;
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                upvotes: articleInfo.upvotes + 1,
            },
        });
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(updatedArticleInfo);
    }, res)
})

app.post('/api/articles/:name/addComment', async (req, res) => {
    const articleName = req.params.name;
    const { username, text } = req.body;
    withDB(async (db) => {
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                comments: articleInfo.comments.concat({ username, text }),
            }
        })

        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });

        res.status(200).json(updatedArticleInfo);
    }, res)
})

app.listen(PORT, () => console.log('listening on port `${PORT}`'));