import BlogDetailsCard from "./Blogcard";
import Blogdata from "./Blogdata";


const BlogDetails = () =>
{
    return (

        <div className="blogContent">
            <BlogDetailsCard data={Blogdata}>
            </BlogDetailsCard>
        </div >
    );
}

export default BlogDetails;