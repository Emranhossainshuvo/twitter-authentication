import { Link } from "react-router-dom";


const Heading = () => {
    return (
        <div>
            <Link to="/">Home</Link>           
            <Link to="/login">Login</Link>
        </div>
    );
};

export default Heading;