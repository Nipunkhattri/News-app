import React, {useEffect, useState} from 'react'
import NewItem from './NewItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0) 

    const updateNews = async ()=>{
          const url = `https://gnews.io/api/v4/search?token=${props.apikey}&country=in&q=${props.category}`;
          setLoading(true)
          let data = await fetch(url);
          let parsedata= await data.json();
          // console.log(parsedata);
          setArticles(parsedata.articles);
          setTotalResults(parsedata.totalArticles);
          setLoading(false);
        }

    useEffect(() => {
        updateNews(); 
    }, [])
 

    const handlePrevClick = async () => {
        setPage(page-1)
        updateNews();
    }

    const handleNextClick = async () => { 
        setPage(page+1)
        updateNews()
    }

    const fetchMoreData = async () => {
            setPage(page+1);
           const url = `https://gnews.io/api/v4/search?token=${props.apikey}&country=in&q=${props.category}`;
            let data = await fetch(url);
            let parsedata= await data.json();
            setArticles(articles.concat(parsedata.articles));
            setTotalResults(parsedata.totalArticles);
          };
 
    return (
            <>
            <div style={{height: "70px", marginTop:"9px"}}>
              <h2 className='text-center my-2'style={{padding:'57px'}}>News-Update</h2>
            </div>
              {loading && <Spinner/>}
              <InfiniteScroll
              dataLength={articles.length}
              next={fetchMoreData}
              hasMore={articles.length!==totalResults}
              loader={<Spinner/>}
              >
              <div className="container">
              <div className="row">
                  {articles.map((element)=>{
                    return <div className="col-lg-4 col-md-6 col-sm-6" key={element.url}>
                      <NewItem title={element.title?element.title.slice(0,80):""} description={element.description?element.description.slice(0,200):""} 
                      imageUrl={element.image?element.image:"https://images.hindustantimes.com/img/2022/07/21/1600x900/fd8598f2-0917-11ed-98cb-2e5b094d89f8_1658427189542.jpg"}
                       newsurl={element.url} author={element.author} date={element.publishedAt}/>
                      </div>
                  })}
              </div>
              </div>
              </InfiniteScroll>
            </>
          )
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News







