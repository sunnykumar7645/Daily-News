import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const upateNews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=94ed4ac0da734b908412b71dd4e1beee&page=${page}&pageSize=${props.PageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(70);
    let parseData = await data.json();
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(
      props.category
    )} Daily News Update `;
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1644307788550-bbbb1687d3c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`;
    document.body.style.color = "white";

    upateNews();
  }, []);

  // const handleNextClick = async () => {
  //   setPage(page + 1);
  //   upateNews();
  // };

  // const handlePrevClick = async () => {
  //   setPage(page - 1);
  //   upateNews();
  // };
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=94ed4ac0da734b908412b71dd4e1beee&page=${page+1}&pageSize=${props.PageSize}`;
    setPage(page =>page+1)
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(totalResults);
  }

  return (
    <>
      <h1 style={{ textAlign: "center", margin: "40px", marginTop:"110px" }}>
        Daily News Presents - Top {capitalizeFirstLetter(props.category)}{" "}
        Headlines
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItems
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={
                      element.author ? element.author : "author name hidden"
                    }
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
// }

News.defaultProps = {
  country: "in",
  PageSize: 11,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  PageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
