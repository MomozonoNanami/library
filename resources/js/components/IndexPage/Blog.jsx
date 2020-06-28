import React from 'react';
import axios from 'axios';

class Blog extends React.Component {
	
  constructor(props){
    super(props);
    this.state = { 
    blog: props.blog,
    storage_url: props.storage_url
    }
  } 

	render() {

  const  blog = this.state.blog; 
  const  storage_url = this.state.storage_url;
  return(

  <div className="col-md-6 col-lg-4 mb-5">
            <a><img src={storage_url + blog.img} alt="Image" className="img-fluid rounded mb-4"/></a>
            <h3><a className="text-black">{blog.title}</a></h3>
            <p>{blog.body}</p>
            <div>{blog.data} </div>
          </div> 
    )
	}
}

export default Blog;
