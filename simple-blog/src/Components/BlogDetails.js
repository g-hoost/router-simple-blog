import React from 'react';
import
{
    Link,
    useParams
} from "react-router-dom";


const BlogDetails = (props) =>
{
    const { id } = useParams();
    return (

        <section className="blogcontent">
            <Link className="linkback" to="/blog"><button>back</button></Link>

            <div key={id} className="details">
                <img src={props.data[id].img_url} alt={props.data[id].title}></img>
                <h3>{props.data[id].title}</h3>


            </div>

        </section>

    );
}

export default BlogDetails;