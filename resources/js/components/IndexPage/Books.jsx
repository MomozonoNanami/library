import React from 'react';
import axios from 'axios';
import Book from './Book';
import Slide from './Slide'; 

class Books extends React.Component {
	
  constructor(props){
    super(props);
    this.state = {
    books: props.books,
    storage_url: props.storage_url
    }
  }

 

	render() {
  if(this.state.books.length !== 0){
  const books = this.state.books.slice(0,10);
  const storage_url = this.state.storage_url;
		return (

			<div>
      <Slide />
			<section className="site-section" id="new-book">
      <div className="container">

        <div className="row mb-5 justify-content-center">
          <div className="col-md-7 text-center">
            <h2 className="section-title mb-2">10 Новинок месяца</h2>
          </div>
        </div>
        
        <ul className="job-listings mb-5">
          
          {
            books.map(book => 

              <Book 
                  book={book} 
                  storage_url={storage_url}
                  key={book.id}
              />

            )
          } 
           
        </ul> 

      </div>
    </section>
			</div>
		)
    }else {
    return (
    <span>Загрузка...</span>
    )
    }
	}
}

export default Books;
