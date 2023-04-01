import { Link } from "react-router-dom";

const Error404page = () =>{
  return(
    <div className="blog-con2">
      <h2 className="h2">Error 404 page</h2>
      <Link to="/" className="decoration">
        go to Home page
      </Link>
    </div>
  )
}
export default Error404page;