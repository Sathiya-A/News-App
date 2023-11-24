import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import IndividualArticle from "./IndividualArticle";

export default function IndividualArticleContainer(){
    const [currArticle, setCurrArticle] = useState({});
    const [isLoading, setIsLoading] = useState([]);
  
    const { article_id } = useParams();

    const fetchcurrArticle=()=>{
       
        fetch(`https://nc-news-7v3f.onrender.com/api/articles/${article_id}`).then((data)=>
    data.json()
       ).then((resultarticle)=>setCurrArticle(resultarticle.article))
    }
    useEffect(()=>{
        setIsLoading(true)
        fetchcurrArticle();
        setIsLoading(false)
    })
    if (isLoading) {
        return <p>Loading...</p>;
      }
    return(
   
        <IndividualArticle
        key={currArticle.article_id}
        article_id={currArticle.article_id}
        title={currArticle.title}
        topic={currArticle.topic}
        author={currArticle.author}
        votes={currArticle.votes}
        imageUrl={currArticle.article_img_url}
        body={currArticle.body}
        created_at={currArticle.created_at}
        comments={currArticle.comment_count}
      />
    
      
    )
}