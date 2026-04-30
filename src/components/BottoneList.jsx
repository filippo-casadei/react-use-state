import languages from "../data/languages.js";
import Bottone from "./Bottone.jsx";

function BottoneList() {
    return (
        <div className="d-flex gap-2 flex-wrap">
            {languages.map((elemento) => {
                return (
                    <Bottone key={elemento.id} id={elemento.id} titolo={elemento.title} />
                );
            })}
        </div>
    );
}

export default BottoneList;