import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient, MOngoClient } from 'mongodb'; //to connect to local database
const PORT = 5000;
const app = express();
app.use(bodyParser.json());// Parses json object includes in post request



app.get('/api/articles/:name', async (req, res) => {
    try {
        const articleName = req.params.name;
        const client = await MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }) //async call for connecting mongoDB
        const db = client.db('my-blog') // connect db my-blog
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(articleInfo);

        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error while connecting database', error })
    }

})

app.post('/api/articles/:name/upvote', async (req, res) => {
    try {

        const articleName = req.params.name;
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });

        const db = client.db('my-blog');

        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                upvotes: articleInfo.upvotes + 1,
            },
        });
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
        console.log(updatedArticleInfo);
        res.status(200).json(updatedArticleInfo);

        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error });
    }
})

app.post('/api/articles/:name/addComment', async (req, res) => {
    const articleName = req.params.name;
    const { username, text } = req.body;
    articleInfo[articleName].comments.push({ username, text });
    res.status(200).send(articleInfo[articleName]);
})

app.listen(PORT, () => console.log('listening on port `${PORT}`'));