import { useParams, useHistory } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data :blogs, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory()
  const handelDel = () => {
    fetch('http://localhost:8000/blogs/' + id, {
      method:"DELETE"
    }).then(() =>{
      history.push("/")
    })
  }

  return(
    <div className="Blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div> {error} </div>}
      {blogs && (
        <artical>
        <h2 className="h2">{ blogs.title }</h2>
        <p className="blog-p">written by { blogs.author}</p>
        <div>{blogs.body}</div>
        <button className="btn" onClick={handelDel}>Delete blog</button>
      </artical>
      )}
    </div>
  )
}
export default BlogDetails;