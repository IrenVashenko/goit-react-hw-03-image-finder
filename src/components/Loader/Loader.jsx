import { Oval } from "react-loader-spinner";
import './Loader.css'

export default function Loader() {
    return (
        <div className="LoderContainer">
            <Oval
                ariaLabel='loading'
                height="100"
                width="100"
                strokeColor="#FF5733"
                strokeWidth="1"
                animationDuration="3"
            />
        </div>);
}