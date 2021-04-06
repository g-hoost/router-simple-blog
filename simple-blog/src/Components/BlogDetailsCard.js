import { Link } from "react-router-dom";

const BlogDetailsCard = (props) =>
{
    return (

        <section className="myLife">
            {props.data.map((index) =>
            (
                <div key={index} className="details">
                    <img src={index.img_url} alt=""></img>
                    <h3>{index.title}</h3>
                    <Link to="/:id/blog"><button>Read More!</button></Link>

                </div>
            ))}

        </section>

    );
}

export default BlogDetailsCard;