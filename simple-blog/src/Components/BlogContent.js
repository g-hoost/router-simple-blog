const BlogContent = (props) =>
{
    return (

        <section className="blogContent">
            {props.data.map((item, index) =>
            (
                <div key={index} className="titles">
                    <h3>{item.title}</h3>
                    <div>{item.published_date}</div>
                    <div>{item.author}</div>
                    <div>{item.description}</div>
                    <div>{item.img_url}</div>


                </div>
            ))}

        </section>

    );
}

export default BlogContent;