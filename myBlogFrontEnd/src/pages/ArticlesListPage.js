import articleContent from "./ArticleContentJson.js"
import ArticleList from "../components/ArticleList.js";


const ArticlesListPage = () => (
    <>
        <h1>Articles</h1>
        <ArticleList articles={articleContent} />

    </>
)


export default ArticlesListPage;