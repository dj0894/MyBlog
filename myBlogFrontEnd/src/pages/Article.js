import ArticleList from "../components/ArticleList.js";
import React, { useState, useEffect } from 'react';
import NotFound from "./NotFound.js";
import articleContent from "./ArticleContentJson.js";
import CommentsList from "../components/CommentsList";
import UpvotesSection from "../components/UpvotesSection";
function Article({ match }) {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            console.log(body);
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);

    if (!article)
        return <NotFound />

    const otherArticles = articleContent.filter(article => article.name !== name)

    return (
        <>
            <h1>{article.title}</h1>
            <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <CommentsList comments={articleInfo.comments} />
            <h3>Other Articles</h3>
            <ArticleList articles={otherArticles}></ArticleList>

        </>
    )

}

export default Article;