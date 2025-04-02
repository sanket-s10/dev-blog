import ArticleContent from "./article-content"
import ArticleHeader from "./article-header"

const BlogContent = () =>{
    return (
        <section className="section">
            <div className="container-large">
            <ArticleHeader />
            <ArticleContent />
            </div>
        </section>
    )
}

export default BlogContent