import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p> U Fucked UP, Cannot be Found</p>
            <Link to = "/">Back to HOME page...</Link>
        </div>
    );
}
 
export default NotFound;