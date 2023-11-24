import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

function ArticlesList() {
  const [articles, setarticles] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
const fetchdata=()=>{
    fetch('https://nc-news-7v3f.onrender.com/api/articles').then((data)=>
    data.json()
       ).then((resultarticle)=>setarticles(resultarticle.articles))
}
  useEffect(() => {
    setIsLoading(true);
   
    fetchdata()
    setIsLoading(false)
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="articles_list">
      {articles.map((article, index) => (
      
        <ArticleCard
          key={index}
          article_id={article.article_id}
          title={article.title}
          imageUrl={article.article_img_url}
          author={article.author}
          votes={article.votes}
          created_at={article.created_at}
          comments={article.comment_count}
        ></ArticleCard>
      ))}
    </main>
  );
}
export default ArticlesList;
