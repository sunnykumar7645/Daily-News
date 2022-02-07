import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  // articles =[
  // {
  //     "source": {
  //         "id": "the-wall-street-journal",
  //         "name": "The Wall Street Journal"
  //     },
  //     "author": "Liz Hoffman",
  //     "title": "Bill Ackman Scored on Pandemic Shutdown and Bounceback",
  //     "description": "Two complex trades on the economy’s swift shutdown and its fevered reopening netted almost $4 billion",
  //     "url": "https://www.wsj.com/articles/bill-ackman-scored-on-pandemic-shutdown-and-bounceback-11643634004?mod=hp_lead_pos10",
  //     "urlToImage": "https://images.wsj.net/im-476902/social",
  //     "publishedAt": "2022-01-31T13:00:00Z",
  //     "content": "As the coronavirus emerged,\r\nBill Ackman\r\nmade billions betting that the market was misjudging the viruss economic toll.Then he did it again a year later.In two complex debt investmentsone presaging … [+5508 chars]"
  // },

  // ]

 

  static defaultProps = {
    country: "in",
    PageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    PageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    // console.log("I am a constructor class ");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} Daily News Update `;
    document.body.style.backgroundImage= `url(https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=201&q=80)`;
    document.body.style.color="white";
  }

  async upateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a9f2e0c84694ecda3335d21742a9176&page=${this.state.page}&pageSize=${this.props.PageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    // console.log("cmd");
    // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a9f2e0c84694ecda3335d21742a9176&page=${this.state.page}&pageSize=${this.props.PageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parseData = await data.json();
    // // console.log(parseData);
    // this.setState({
    //   articles: parseData.articles,
    //   totalResults: parseData.totalResults,
    //   loading:false,
    // })
    this.upateNews();
  }

  handleNextClick = async () => {
    // console.log("Next");
    // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a9f2e0c84694ecda3335d21742a9176&page=${this.state.page+1}&pageSize=${this.props.PageSize}`;
    // this.setState({loading: true})
    // let data = await fetch(url);
    // let parseData = await data.json();
    // // console.log(parseData);
    // this.setState({
    //   page: this.state.page+1,
    //   articles: parseData.articles,
    //   loading: false,
    // })
    this.setState({
      page: this.state.page + 1,
    });
    this.upateNews();
  };

  handlePrevClick = async () => {
    // console.log("Previous");
    // if (!( this.state.page+1 > Math.ceil(this.state.totalResults/this.props.PageSize))){

    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a9f2e0c84694ecda3335d21742a9176&page=${this.state.page-1}&pageSize=${this.props.PageSize}`;
    //   this.setState({loading:true})
    //   let data = await fetch(url);
    //   let parseData = await data.json();
    //   // console.log(parseData);
    //   this.setState({
    //     page: this.state.page-1,
    //     articles: parseData.articles,
    //     loading:false,
    //   })
    // }
    this.setState({
      page: this.state.page - 1,
    });
    this.upateNews();
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", margin: "40px" }}>
          Daily News Presents - Top{" "}
          {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h1>
        {/* {this.state.loading && <Spinner/>} */}
        <div className="container my-3">
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}
          >
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItems
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
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
          </InfiniteScroll>

          {/* This portion is commented because we are going to make this limited scroll bar into infinite scroll bar  */}
          {/* {!this.state.loading && this.state.articles.map((element)=>{

              return <div className='col-md-4' key={element.url}>
              <NewsItems  title={element.title?element.title:""}  description={element.description?element.description:""}
               imageUrl ={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"author name hidden"}
               date={element.publishedAt} source={element.source.name} />
              </div>

            })} */}

          {/* <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevClick}
            >
              &larr;Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.PageSize)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div> */}
        </div>
      </div>
    );
  }
}

export default News;
