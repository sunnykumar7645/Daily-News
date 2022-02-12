// import React, { Component } from 'react'
import React from 'react'


//  this is a part of class based component.
// export class NewsItems extends Component {
//   render() { 
const NewsItems = (props) => {

  // let {title, description, imageUrl, newsUrl, author, date, source} = this.props;  in  class based componet we are using this,props
  let {title, description, imageUrl, newsUrl, author, date, source} = props;
  return (
      <div>
        <div className="card" style={{margin: "20px", backgroundImage:`url(https://images.unsplash.com/photo-1644307788550-bbbb1687d3c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`, textColor:'while',}}>
        <div style={ {
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
        }} >
        <span className=" badge rounded-pill bg-warning" style={{left: '90%', zIndex: '1'}}>
         {source}
          
        </span>
        
        </div>
        

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


export default NewsItems
