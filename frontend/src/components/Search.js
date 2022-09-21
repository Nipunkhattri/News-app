// import React, { Component } from 'react'
// import NewItem from './NewItem'
// import Spinner from './Spinner'

// let p = document.getElementById("searchbtn");
// export class Search extends Component {
    
//     constructor(){
//         super();
//         this.state = {
//             articles: [],
//             loading:false,
//             page:1
//         };
//     }
    
//     render() {
//         return (
//         <div>
//             <div className='container'>
//             <h2 className='text-center my-2'style={{padding:'8px'}}>News-Update</h2>
//             {this.state.loading && <Spinner/>}
//             <div className="row">
//             {this.state.articles.map((element)=>{
//               return <div className="col-lg-4 col-md-6 col-sm-6" key={element.url}>
//                 <NewItem title={element.title?element.title.slice(0,80):""} description={element.description?element.description.slice(0,200):""} 
//                 imageUrl={element.urlToImage?element.urlToImage:"https://images.hindustantimes.com/img/2022/07/21/1600x900/fd8598f2-0917-11ed-98cb-2e5b094d89f8_1658427189542.jpg"}
//                  newsurl={element.url} author={element.author} date={element.publishedAt}/>
//                 </div>
//             })}
//         </div>
//             <div className='container d-flex justify-content-between my-2'>
//         <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevclick}>Previous</button>
//         <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next</button>
//             </div>
//       </div>
//         </div>
//         )
//     }
// }

// export default Search



// // let url =`https://newsapi.org/v2/top-headlines?&q=${p.innerhtml}&country=in&apiKey=f9b0a36ddc15450998dd5f25f5b5aebc&pageSize=10`;


