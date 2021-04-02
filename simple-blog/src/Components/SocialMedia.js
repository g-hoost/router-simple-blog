import Blogcard from "./Blogcard";
import Blogdata from "./Blogdata";


const SocialMedia = () =>
{
    return (

        <div className="socialMedia">
            <Blogcard data={Blogdata}></Blogcard>
        </div >
    );
}

export default SocialMedia;