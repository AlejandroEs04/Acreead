import { Link } from "../../components/Link";

export default function NotFound() {
    return (
        <div className="page-message">
            <h1>Not Found</h1>
            <p>The page was not found, please come back to <Link to="/">Home</Link></p>
        </div>
    )
}
