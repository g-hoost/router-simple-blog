import Blogcard from "./Blogcard";
import Blogdata from "./Blogdata";


const MyWork = () =>
{
    return (

        <div className="myWork">
            <Blogcard data={Blogdata}></Blogcard>
        </div >
    );
}

export default MyWork;