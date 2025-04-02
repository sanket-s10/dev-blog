import BlogContent from "@/app/components/blog-content";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/nav-bar";

const BlogPost = () =>{

    return (
        <div className="page-wrapper">
        <Navbar/>
        <BlogContent />
        <Footer/>
        </div>
    )
}

export default BlogPost;