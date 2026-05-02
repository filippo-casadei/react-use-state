function Card (props) {

    if (props.selectedLanguage === undefined) {
        return null;
    }

    return (
        <div className="card mt-3">
            <div className="card-body">
                <p className="mb-0"> {props.selectedLanguage.description} </p>
            </div>
        </div>
    )
};

export default Card;