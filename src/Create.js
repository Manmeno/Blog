import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mina");
  const [ispending, setIspending] = useState(false)
  const handelSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIspending(true)
    fetch('http://localhost:8000/blogs', {
    method:"POST",
    headers:{"Content-Type" : "application/json"},
    body: JSON.stringify(blog)
    }).then(()=>{setIspending(false)})
  }

  return(
    <div className="blog-con2">
      <h2 className="h2 h1"> Add New Blog </h2>
      <form onSubmit={handelSubmit} >
      <label className="blog-new-ti">Blog title:</label>
      <input type="text" required value={title} onChange = {(e) =>{setTitle(e.target.value)}} />
      <label className="blog-new-ti">Blog body:</label>
      <textarea required value={body} onChange = {(e) =>{setBody(e.target.value)}}></textarea>
      <label required>Blog author:</label>
      <select value={author} onChange = {(e) =>{setAuthor(e.target.value)}}>
        <option value="Mina">Mina</option>
        <option value="Minameno">Minameno</option>
      </select>
      {!ispending && <button className="btn">Add Blog</button>}
      {ispending && <button className="btn">Adding Blog</button>}
      </form>
    </div>
  )
}
export default Create;