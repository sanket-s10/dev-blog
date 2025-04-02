import ArticleContent from "@/app/components/blog-article-content/article-content";
import ArticleHeader from "@/app/components/blog-article-header/article-header";
import Footer from "@/app/components/footer/footer";
import Navbar from "@/app/components/nav-bar/nav-bar";

const BlogPost = () => {

    return (
        <div className="page-wrapper">
            <Navbar />
            <section className="section">
                <div className="container-large">
                    <ArticleHeader />
                    <ArticleContent />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default BlogPost;