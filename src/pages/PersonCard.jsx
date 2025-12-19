import "./PersonCard.css";
export default function PersonCard(person){
    const {photo, name, title, bio} = person;
    return(
        <article className="person">
            <img 
                className="person-photo" src={photo} alt={name} />
            <div className="person-content">
                <h3 className="person-name">{name}</h3>
                <p className="person-title">{title}</p>
                <p className="person-bio">{bio}</p>
            </div>
        </article>
    )
}