import image_yellow from "../img/photo-imgyellow.png";
import { Link } from "react-router-dom";

const Home = () =>
{
    return (

        <div className="home">
            <img src={image_yellow} alt="keyboard"></img>
            <h1>Welcome to my simple Blog</h1>
            <Link to="/blog"><button>Go to Articles</button ></Link>

        </div >
    );
}

export default Home;