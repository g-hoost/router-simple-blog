import Blogcard from "./Blogcard";
import Blogdata from "./Blogdata";


const MyPets = () =>
{
    return (

        <div className="myPets">
            <Blogcard data={Blogdata}></Blogcard>
        </div >
    );
}

export default myPets;