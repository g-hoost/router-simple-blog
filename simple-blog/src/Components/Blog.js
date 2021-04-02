import Blogcard from "./Blogcard";
import Blogdata from "./Blogdata";


const Blog = () =>
{
    return (

        <div className="blogContent">
            <Blogcard data={Blogdata}></Blogcard>
        </div >
    );
}

export default Blog;