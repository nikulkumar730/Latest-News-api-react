import React, { useEffect, useState } from "react";

import Datacard from "./Datacard";
import Navbar1 from "./Navbar";
const NewsComp = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=19c0fdba0c4d4e2ca9f41bc374e437f1`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setArticles(data.articles);
            })
            .catch(error => console.error('Error fetching the news:', error));
            
    },[]
    
);

    return (
        <>
        <Navbar1  />
            <h2 className="text-center">Latest <span className="badge bg-danger my-3">News</span></h2>

            <div className="news-articles container  d-flex flex-wrap justify-content-center; ">
                {articles.length > 0 ? (
                    articles.map((article, index) => {
                        
                        return <Datacard key={index} title={article.title} description={article.description} src={article.urlToImage} url={article.url} publishedAt={article.publishedAt}/>
                    })
                ) : (
                    <p>Loading news...</p>
                )}
            </div>
            
        </>
    );
}

export default NewsComp;
