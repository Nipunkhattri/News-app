import React from "react";

const NewItem = (props) =>{

    let {title,description,imageUrl,newsurl,author,date}= props;
    return (
      <div style={{padding: "1px" , marginTop:"60px"}}>
        <div className="card" >
          <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">{description}..</p>
            <p class="card-text"><small class="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} className="btn btn-sm btn-dark">Read More..</a>
          </div>
        </div>
      </div>
    );
  }

  export default NewItem

//c73ba03a96af4ca4a929396b828347d4
// f9b0a36ddc15450998dd5f25f5b5aebc
// f9b0a36ddc15450998dd5f25f5b5aebc
// http://api.mediastack.com/v1/news?access_key=fa15993afee5692e01e8fbfbd5db3774&countries=in&categories=general
// f9b0a36ddc15450998dd5f25f5b5aebc

// 4e680a827c925f3d72a9838d656f20db