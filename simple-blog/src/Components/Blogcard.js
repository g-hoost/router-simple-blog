import { Link } from "react-router-dom";

const Blogcard = (props) =>
{
    return (

        <section className="myLife">
            {props.data.map((item, index) =>
            (
                <div key={index} className="titles">
                    <img src={item.img_url} alt="keyboard"></img>
                    <h3>{item.title}</h3>
                    <Link to="/content"><button>Read More!</button></Link>

                </div>
            ))}

        </section>

    );
}

export default Blogcard;