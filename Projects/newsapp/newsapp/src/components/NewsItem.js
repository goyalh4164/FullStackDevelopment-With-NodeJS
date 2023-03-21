import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    //way of passing props in class
    let {title,description,imageUrl} = this.props;
    return (
      <div className='my-3'>
        {/* Js accepts inline styling as an object */}
        <div className="card" style={{width: "18rem"}} > 
            <img className="card-img-top" src={imageUrl} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="/" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
  }
}

export default NewsItem
