// const Content = (props) =>
// {
//     return (

//         <section className="myData">
//             {props.data.map((item, index) =>
//             (
//                 <div key={index} className="titles">
//                     <h3>{item.title}</h3>
//                     <div>{item.published_date}</div>
//                     <div>{item.author}</div>
//                     <div>{item.description}</div>
//                     <div>{item.img_url}</div>


//                 </div>
//             ))}

//         </section>

//     );
// }

// export default Content;

// import { Link } from "react-router-dom";
import Blogcard from "./Blogcard";
import Blogdata from "./Blogdata";


const Content = () =>
{
    return (

        <div className="content">
            <Blogcard data={Blogdata}></Blogcard>
        </div >
    )
}
export default Content;