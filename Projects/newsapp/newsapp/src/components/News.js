// rce
import React, { useEffect ,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
  const [articles,setArticles] =useState([]);
  const [loading,setLoading] =useState(true);
  const [page,setPage] =useState(1);
  const [totalResults,setTotalResults] =useState(0);
  
  const updateNews=async ()=>{
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3c01c27651cb47189046852bd8bdf521&page=${page}&pageSize=${props.pageSize}`
    setLoading(true);
    let data =await fetch(url);
    let parsedData = await data.json()
    // console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  }

  //we use useEffect instead of componentDidMount
  useEffect(()=>{
    document.title =`${props.category} News Monkey`;
    updateNews();
  },[])

  // async componentDidMount(){
  //   await this.updateNews();
  // }
  
  const fetchMoreData = async ()=>{
    setPage(page+1);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3c01c27651cb47189046852bd8bdf521&page=${page}&pageSize=${props.pageSize}`
    setLoading(true);
    let data =await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults);
  }
    return (
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div>
        <div className="container my-3">
        <h1 className='text-center' style={{margin : '90px'}}>NewsMonkey - Top  {(props.category)} Headlines</h1>
        {/* {loading && <Spinner/>} */}
        <div className="row">
        {articles.map((element)=>{
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

News.defaultProps={
  country : 'in',
  pageSize :5,
  category: 'general'
}
News.PropTypes = {
  country :PropTypes.string,
  pageSize :PropTypes.number,
  category : PropTypes.string
}


export default News
