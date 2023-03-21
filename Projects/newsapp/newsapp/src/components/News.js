// rce
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  constructor(){
    super(); //mandatory 
    //Do the work here
    console.log("Contructor from News.js")
    /* 
    What is state ?
    The state is an instance of React Component Class can be defined as an object of a set of observable properties that control the behavior of the component. In other words, the State of a component is an object that holds some information that may change over the lifetime of the component. For example, let us think of the clock that we created in this article, we were calling the render() method every second explicitly, but React provides a better way to achieve the same result and that is by using State, storing the value of time as a member of the component’s state. We will look into this more elaborately later in the article.
    */ 
   //It holds variable under observance
    this.state={
      articles :[],
      loading :false
    }
  }

  async componentDidMount(){
    // it will run when the complete render method has run completely
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=ed7485fdf71d495b860eaa1835fe5627"
    let data =await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles :parsedData.articles})

  }

  render() {
    return (
      <div>
        <div className="container my-3">
        <h1>NewsMonkey - Top Headlines </h1>
        <div className="row">
        {this.state.articles.map((element)=>{
          {/* Since we are using map we need to use key to uniquely identify the news item */}
        return <div className="col-md-4" key={element.url}>
          <NewsItem key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage?element.urlToImage:"https://cdn.ndtv.com/common/images/ogndtv.png"} newsUrl={element.url}/>
          </div>
        })}
        </div>
        </div>
      </div>
    )
  }
}

export default News
