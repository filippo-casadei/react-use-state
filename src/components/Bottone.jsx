
function Bottone (props) {



    const clickHandler = (click) => {
        console.log(props.id)
        props.setAttivo(props.id);
    };

    let classe = "";
    if (props.attivo === props.id) {
        classe = "btn btn-warning mt-2";
    }
    else {
        classe = "btn btn-primary mt-2"
    }

    return (
            <button className={classe}
            onClick={clickHandler}>
            {props.titolo}   
            </button>
    )
};

export default Bottone;