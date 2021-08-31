import express from 'express';
import bodyParser from 'body-parser';
const PORT = 5000;
const app = express();
app.use(bodyParser.json());// Parses json object includes in post request

const articleInfo = {
    'learn-react': {
        upvotes: 0,
        comments: [],
    },
    'learn-node': {
        upvotes: 0,
        comments: [],
    },
}





app.post('/api/articles/:name/upvote', (req, res) => {
    const articleName = req.params.name;
    articleInfo[articleName].upvotes += 1;
    res.status(200).send(`article name now has ${articleInfo[articleName].upvotes} upvotes`)
})

app.post('/api/articles/:name/addComment', (req, res) => {
    console.log("hello")
    const articleName = req.params.name;
    const { username, text } = req.body;
    articleInfo[articleName].comments.push({ username, text });
    res.status(200).send(articleInfo[articleName]);
})

app.listen(PORT, () => console.log('listening on port `${PORT}`'));