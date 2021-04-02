const Blogcard = (props) =>
{
    return (

        <section className="myLife">
            {props.data.map((item, index) =>
            (
                <div key={index} className="titles">
                    <img src={item.img_url} alt="keyboard"></img>
                    <h3>{item.title}</h3>


                </div>
            ))}

        </section>

    );
}

export default Blogcard;