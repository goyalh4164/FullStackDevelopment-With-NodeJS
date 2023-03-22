import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    //way of passing props in class
    let {title,description,imageUrl,newsUrl ,author,date} = this.props;
    return (
      <div className='my-3'>
        {/* Js accepts inline styling as an object */}
        <div className="card"  > 
            <img className="card-img-top" src={imageUrl} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toISOString()}</small></p>
                <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
  }
}

export default NewsItem
