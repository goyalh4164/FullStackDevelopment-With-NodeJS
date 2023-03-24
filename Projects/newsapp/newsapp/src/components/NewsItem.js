import React from 'react'

const NewsItem =(props)=> {
    //way of passing props in class
    // let {title,description,imageUrl,newsUrl ,author,date} = props;
    return (
      <div className='my-3'>
        {/* Js accepts inline styling as an object */}
        <div className="card"  > 
            <img className="card-img-top" src={props.imageUrl} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text"><small className="text-muted">By {!props.author?"Unknown":props.author} on {new Date(props.date).toISOString()}</small></p>
                <a href={props.newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
  
}

export default NewsItem
