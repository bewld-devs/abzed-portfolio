import LazyLoad from "react-lazy-load";

export default function Card(props){
    console.log(props);
    return(
        <>
        <a target="_blank" rel="noreferrer" href={props.url}>
            <div className="card project-card mt-3">
                <div className="img-box">
                    <img src={props.picture} alt="card-img" />
                </div>
                <div className="content">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <div className="card-action">
                        <div className="name-container">
                            <LazyLoad>
                            <img 
                            src="https://res.cloudinary.com/abzed/image/upload/v1658123480/azagfvxpgtszyuqafdr0.jpg" 
                            className="avatar" alt="card-user-avatar" />
                            </LazyLoad>
                            <div className="name-box">
                                <span>Abzed Mohammed</span>
                                <small>{props.date ? props.date : "2022"}</small>
                            </div>
                        </div>
                        <ul className="tags-body">
                            {
                                props.tags ? 
                                props.tags.map(tag => {
                                    return <li>{tag}</li>
                                })
                                :
                                "Article"
                            }
                        </ul>                    
                    </div>
                </div>
            </div>
        </a>
        </>
    )
}