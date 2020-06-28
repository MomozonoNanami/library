import React from 'react';
import axios from 'axios';
import Blog from './Blog';

class Blogs extends React.Component {
	
  constructor(props){
    super(props);
    this.state = {
    blogs: props.blogs,
    storage_url: props.storage_url
    }
  }

 

	render() {
  if(this.state.blogs.length !== 0){
  const blogs = this.state.blogs.slice(0,3);
  const storage_url = this.state.storage_url;
		return ( 
			<section className="site-section">
      <div className="container">
      <div class="row mb-5 justify-content-center"><div class="col-md-7 text-center"><h2 class="section-title mb-2">Блог</h2></div></div>
        <div className="row mb-5"> 

          {
            blogs.map(blog => 

              <Blog 
                  blog={blog} 
                  storage_url={storage_url}
                  key={blog.id}
              />

            )
          } 
           
       </div>
        </div>
    </section>
		)
    }else {
    return (
    <span>Загрузка...</span>
    )
    }
	}
}

export default Blogs;
