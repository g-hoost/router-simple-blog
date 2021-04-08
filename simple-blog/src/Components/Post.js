import React from 'react';
import
{
    Link,
    useParams
} from "react-router-dom";


const Post = (props) =>
{
    const { id } = useParams();
    return (

        <section className="blogcontent">
            <Link className="linkback" to="/blog"><button>back</button></Link>

            <div key={id} className="details">
                <img className="contentImg" src={props.data[id].img_url} alt={props.data[id].title}></img>
                <h3 className="contentHeader">{props.data[id].title}</h3>
                <div className="author">by {props.data[id].author}</div>
                <p className="description">{props.data[id].description}</p>


            </div>

        </section>

    );
}

export default Post;