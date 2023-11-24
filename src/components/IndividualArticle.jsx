export default function IndividualArticle(props){
    const {key,article_id,title,topic,author,votes,imageUrl,body,created_at,comments}=props;
    const date = new Date(created_at).toLocaleDateString();
    return(
        <article className="IndividualArticle">
        <h1>{title}</h1>
        <p className="dateAndcomments">🕙 {date}</p>
        <div className="image-div">
          <img src={imageUrl} alt={title} />
        </div>
  
        <p className="author">By: {author}</p>
  
        <p className="article-content">{body}</p>
      </article>
    )
}