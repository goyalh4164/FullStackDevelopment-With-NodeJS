// rce
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>
        <div className="container my-3">
        <h1>NewsMonkey - Top Headlines </h1>
        <div className="row">
            <div className="col-md-4">
            <NewsItem title="News.com" description="Fastest News" imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/18103/production/_129036589_c6155730fdc9f789a9c1c4cb97ced8efd591b85f0_0_5500_30941000x563.jpg"/>
            </div>
            <div className="col-md-4">
            <NewsItem title="News.com" description="Fastest News" imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/18103/production/_129036589_c6155730fdc9f789a9c1c4cb97ced8efd591b85f0_0_5500_30941000x563.jpg"/>
            </div>
            <div className="col-md-4">
            <NewsItem title="News.com" description="Fastest News" imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/18103/production/_129036589_c6155730fdc9f789a9c1c4cb97ced8efd591b85f0_0_5500_30941000x563.jpg"/>
            </div>
        </div>
        </div>
      </div>
    )
  }
}

export default News
