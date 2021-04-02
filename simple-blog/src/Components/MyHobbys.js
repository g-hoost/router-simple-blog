import Blogcard from "./Blogcard";
import Blogdata from "./Blogdata";


const MyHobbys = () =>
{
    return (

        <div className="myHobbys">
            <Blogcard data={Blogdata}></Blogcard>
        </div >
    );
}

export default MyHobbys;