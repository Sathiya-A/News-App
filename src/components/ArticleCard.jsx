import { Link } from "react-router-dom";
export default function ArticleCard(props){
     const {article_id,title,imageUrl,author,votes,created_at,comments}=props
    const date = new Date(created_at).toLocaleDateString();
    return(
        <article className="card">
     
     <Link to={`/articles/${article_id}`}>
        <h3>{title}</h3>
        <img src={imageUrl} alt={title} />
      </Link>

               <p>By: {author}</p>
             </article>
    )
}
