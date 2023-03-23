// rce
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps={
    country : 'in',
    pageSize :5,
    category: 'general'
  }
  // static PropTypes = {
  //   country :PropTypes.string,
  //   pageSize :PropTypes.number,
  //   category : PropTypes.string
  // }
  constructor(props){
    super(props); //mandatory 
    //Do the work here
    console.log("Contructor from News.js")
    /* 
    What is state ?
    The state is an instance of React Component Class can be defined as an object of a set of observable properties that control the behavior of the component. In other words, the State of a component is an object that holds some information that may change over the lifetime of the component. For example, let us think of the clock that we created in this article, we were calling the render() method every second explicitly, but React provides a better way to achieve the same result and that is by using State, storing the value of time as a member of the component’s state. We will look into this more elaborately later in the article.
    */ 
   //It holds variable under observance
   //You need to pass the props to use it in your program
    this.state={
      articles :[],
      loading :false,
      page:1,
      totalResults : 0
    }
    document.title =`${this.props.category} News Monkey`;
  }
  async updateNews(){
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3c01c27651cb47189046852bd8bdf521&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading : true});
    let data =await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles :parsedData.articles,
      loading : false,
      totalResults : parsedData.totalResults
    })
    
  }
  async componentDidMount(){
    await this.updateNews();

  }
  
  fetchMoreData = async ()=>{
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3c01c27651cb47189046852bd8bdf521&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({page : this.state.page+1})
    this.setState({loading : true});
    let data =await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles :this.state.articles.concat(parsedData.articles),
      totalResults : parsedData.totalResults
    })
  }


  render() {
    return (
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div>
        <div className="container my-3">
        <h1 className='text-center'>NewsMonkey - Top  {(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {this.state.articles.map((element)=>{
          {/* Since we are using map we need to use key to uniquely identify the news item */}
          return <div className="col-md-4" key={element.url}>
          <NewsItem key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage?element.urlToImage:"https://cdn.ndtv.com/common/images/ogndtv.png"} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
          </div>
        })}
        </div>
        </div>
      </div>
    </InfiniteScroll>
    )
  }
}

export default News
