import { IconContext } from "react-icons"
import { GoGlobe } from "react-icons/go"

export default function NavBar() {
    return (
        <nav>
            <span className="nav--heading">
                <IconContext.Provider value={{size: "1.5em", color: "#FFFFFF"}}>
                    <GoGlobe />
                </IconContext.Provider> 
                <h1>my travel journal.</h1>
            </span>
        </nav>
    )
}