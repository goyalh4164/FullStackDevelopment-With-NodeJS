// rce
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles= [
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Thailand: Parliament dissolved ahead of May election",
        "description": "Opinions polls say former PM Thaksin's daughter Paetongtarn is widely favoured to become the next PM.",
        "url": "http://www.bbc.co.uk/news/world-asia-65010818",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/18103/production/_129036589_c6155730fdc9f789a9c1c4cb97ced8efd591b85f0_0_5500_30941000x563.jpg",
        "publishedAt": "2023-03-20T09:22:25.6785313Z",
        "content": "Thailand has dissolved its parliament, ahead of what is expected to be a fiercely contested general election scheduled for early May. \r\nPrime Minister Prayuth Chan-ocha's new United Thai Nation party… [+3073 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Two decades on, how the UK/US-led invasion turbo-charged Iraq into chaos",
        "description": "The BBC's Jeremy Bowen explains why Iraqis are still living with the consequences 20 years on.",
        "url": "https://www.bbc.co.uk/news/world-middle-east-64976144",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/109B6/production/_129022086_1200nonsupermass-grave-women-1.jpg",
        "publishedAt": "2023-03-20T09:22:25.3348664Z",
        "content": "The invasion of March 2003 was a catastrophe for Iraq and its people. \r\nMore proof of that, measured in broken lives, was at a suspected site of a mass grave in the desert outside Sinjar, not far fro… [+14607 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Why asylum seekers are choosing Canada in record numbers",
        "description": "Tens of thousands are crossing into Canada via Roxham Road, an unofficial border in upstate New York.",
        "url": "http://www.bbc.co.uk/news/world-us-canada-64825197",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1C84/production/_129000370_afghansandthecanadinapoliceatborder2.jpg",
        "publishedAt": "2023-03-20T09:22:25.1161707Z",
        "content": "Last year, nearly 40,000 migrants crossed into Canada at an unofficial border at the end of a remote rural road in upstate New York - a record number - to seek asylum. Many are driven by the belief t… [+7687 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Ukraine war: Xi Jinping heads to Russia for talks with Vladimir Putin",
        "description": "China's leader is visiting Moscow, days after the International Criminal Court issued an arrest warrant for the Russian leader.",
        "url": "http://www.bbc.co.uk/news/live/world-europe-64993665",
        "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
        "publishedAt": "2023-03-20T09:22:24.4757057Z",
        "content": "Hello and thanks for joining us as we await Xi Jinpings arrival in Moscow, where Chinas leader will meet Russian President Vladimir Putin.\r\nThe Kremlin and Beijings foreign ministry have said very li… [+989 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Amritpal Singh: Punjab police intensifies search for controversial preacher",
        "description": "The police in India's Punjab state are looking for Amritpal Singh, a supporter of the Khalistan movement.",
        "url": "http://www.bbc.co.uk/news/world-asia-india-65010808",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11B0F/production/_129036427_gettyimages-1247675641.jpg",
        "publishedAt": "2023-03-20T08:22:17.9289941Z",
        "content": "Police in India's Punjab have launched a massive search for Amritpal Singh, a controversial self-styled preacher who has been on the run since Saturday.\r\nInternet and messaging services in the state … [+2855 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Credit Suisse: Markets react after Swiss bank rescued by UBS",
        "description": "The troubled Swiss bank was bought by its rival UBS in a government-backed deal after urgent weekend talks.",
        "url": "http://www.bbc.co.uk/news/live/business-65011579",
        "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
        "publishedAt": "2023-03-20T07:52:23.0067175Z",
        "content": "Credit Suisse has become the latest and most important casualty of a crisis of confidence that has already seen the failure of two mid-sized US banks and an emergency industry whip-round for another.… [+888 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Australian former SAS soldier held over alleged war crime in Afghanistan",
        "description": "The 41-year-old man will be charged with murdering an Afghan man in 2012, Australian police say.",
        "url": "http://www.bbc.co.uk/news/world-australia-65010345",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/14927/production/_129036248_gettyimages-134603282.jpg",
        "publishedAt": "2023-03-20T05:37:16.2718444Z",
        "content": "A former Australian SAS soldier has been arrested and will be charged with murder, following an investigation into alleged war crimes in Afghanistan.\r\nThe 41-year-old man was detained on Monday in Ne… [+1302 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Central banks to boost flow of US dollars amid market unease",
        "description": "Six central banks move to keep credit flowing worldwide after two big institutions collapsed.",
        "url": "http://www.bbc.co.uk/news/business-65010255",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/128B1/production/_129035957_mediaitem129035953.jpg",
        "publishedAt": "2023-03-20T00:37:20.975031Z",
        "content": "Central banks have moved globally to keep credit flowing after an unsettled period in the US banking sector and the Credit Suisse merger. \r\nSix central banks, including the Bank of England, announced… [+3341 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Saudi Arabia invited Iran's President Raisi to visit, Tehran says",
        "description": "The visit - not yet confirmed by Riyadh - would build on a thaw in tensions, brokered by China.",
        "url": "http://www.bbc.co.uk/news/world-middle-east-65010185",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/267D/production/_129035890_62b1d2e0d1231a7ca051dbe80d8bd083be3740f0.jpg",
        "publishedAt": "2023-03-20T00:07:19.5107337Z",
        "content": "Iran says Saudi Arabia has invited Iranian President Ebrahim Raisi for an official visit - just over a week since the countries agreed to restore diplomatic relations.\r\nThe invitation is said to have… [+2304 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Xi Putin meeting: What to expect from China-Russia talks",
        "description": "Our correspondents Steve Rosenberg and Stephen McDonell tell us what to expect from the talks.",
        "url": "http://www.bbc.co.uk/news/world-europe-64990826",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C42F/production/_129032205_5dd807a6cae412a941dac780105ebec61d5085a2.jpg",
        "publishedAt": "2023-03-19T22:22:21.9907987Z",
        "content": "Chinese President Xi Jinping is embarking on his first trip to Russia since the country invaded Ukraine last year, and is set to sit down for talks with President Vladimir Putin.\r\nOur Russia editor S… [+6442 chars]"
    }
]
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
      articles :this.articles,
      loading :false
    }
  }

  render() {
    return (
      <div>
        <div className="container my-3">
        <h1>NewsMonkey - Top Headlines </h1>
        {this.state.articles.map((element)=>{
          console.log(element)
        })}
        <div className="row">
            <div className="col-md-4">
            <NewsItem title="News.com" description="Fastest News" imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/18103/production/_129036589_c6155730fdc9f789a9c1c4cb97ced8efd591b85f0_0_5500_30941000x563.jpg" newsUrl="TODO"/>
            </div>
        </div>
        </div>
      </div>
    )
  }
}

export default News
