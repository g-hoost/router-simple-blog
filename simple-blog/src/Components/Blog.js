import Blogcard from "./Blogcard";
import Blogdata from "./Blogdata";


const Details = () =>
{
    return (

        <div className="blogContent">
            <Blogcard data={Blogdata}>
            </Blogcard>
        </div >
    );
}

export default Details;