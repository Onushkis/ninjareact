import { useHistory, useParams } from "react-router-dom";
import Author from "./Author";
import Heading from "./Heading";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:3000/blogs/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:3000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          {/* <h2>{ blog.title }</h2> */}
           <Heading text={blog.title} color="lightgreen" /> 
            <p>Written by { blog.author }</p> 
          {/* <Author  text= writte by{ blog.author } /> */}
          <div>{ blog.body }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;