import { IconContext } from "react-icons";
import { GoLocation } from "react-icons/go";

export default function Card(props) {
    console.log(props)
    return (
        <div className="flex--row">
            <img src={`images/${props.item.img}`}  alt={props.item.img} className="card--img" />
            <div className="flex--column">

                <div className="card--locationStats">
                    <span>
                        <IconContext.Provider value={{size: ".75em", color: "#F55A5A"}}>
                            <GoLocation />
                        </IconContext.Provider>
                    </span>
                    <span className="card--location">{props.item.location }</span>
                    <span className="card--googleMap"><a href={props.item.googleMap} target="_blank" rel="noreferrer" >View on Google Maps</a></span>
                </div>
                <h1 className="card--title">{props.item.destination}</h1>
                <span className="card--date">{`${props.item.startDate} - ${props.item.endDate}`}</span>
                <p className="card--text">{props.item.description}</p>
            </div>
        </div>
    )
}