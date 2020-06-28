import React from 'react';
import axios from 'axios';

class Book extends React.Component {
	
  constructor(props){
    super(props);
    this.state = { 
    book: props.book,
    storage_url: props.storage_url
    }
  } 

	render() {

  const  book = this.state.book; 
  const  storage_url = this.state.storage_url;
  return(
  <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center"> 
              <a></a>
                <div className="job-listing-logo">
                  <img src={storage_url + book.img} alt="{book.name}" className="img-fluid" />
                </div>

                <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                  <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                    <h2>{book.name}</h2>
                    <i>{book.annotation}</i>
                  </div>
                   
                </div>
                
              </li>
    )
	}
}

export default Book;
