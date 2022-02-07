import React, { Component } from 'react'

export class NewsItems extends Component {
  render() { 
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div>
        <div className="card" style={{margin: "20px", background:'#311D1D', textColor:'while',}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-warning" style={{left: '90%', zIndex: '1'}}>
         {source}
          
        </span>

          <img src={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2022/01/stocks_sensex_nifty_stockmarket-5-770x433.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'> By {author} on {new Date(date).toGMTString()}</small> </p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
          </div>
        </div>
      </div> 
    )
  }
}

export default NewsItems
