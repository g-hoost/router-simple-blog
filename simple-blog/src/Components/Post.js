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

        <section className="postsContent">

            <div key={id} className="details">
                <Link className="linkback" to="/blog"><p>back</p></Link>
                <div className="contentImgContainer">
                    <img className="contentImg" src={props.data[id].img_url} alt={props.data[id].title}></img>
                </div>
                <br></br>

                <div className="headerTitleDate">
                    <h3 className="contentHeader">{props.data[id].title}</h3>
                    <p className="date">{props.data[id].published_date}</p>
                </div>
                <p className="description">{props.data[id].description}</p>
                <br></br>
                <p className="author">by {props.data[id].author}</p>

            </div>

        </section>

    );
}

export default Post;