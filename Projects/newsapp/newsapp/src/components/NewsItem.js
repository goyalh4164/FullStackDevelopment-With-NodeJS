import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    //way of passing props in class
    let {title,description} = this.props;
    return (
      <div>
        {/* Js accepts inline styling as an object */}
        <div className="card" style={{width: "18rem"}} > 
            <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
  }
}

export default NewsItem
