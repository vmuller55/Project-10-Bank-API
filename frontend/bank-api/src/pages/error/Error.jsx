import { Link } from "react-router-dom"

function ErrorPage() {
    return(
        <div>
            <h2>Error 404 / Page not found</h2>
            <Link to={"/"}><h3>Home</h3></Link>
        </div>
    )
}

export default ErrorPage