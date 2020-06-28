import React from 'react'; 
import Book from '../IndexPage/Book';
import Slide from '../BooksPage/Slide'; 

class Index extends React.Component {
	
 constructor(props){
    super(props);
    this.state = {
    books: props.books,
    storage_url: props.storage_url
    }
  }

 

	render() {
  if(this.state.books.length !== 0){
  const books = this.state.books;
  const storage_url = this.state.storage_url;
		return (

			<div>
      <Slide />
			<section className="site-section" id="new-book">
      <div className="container">

        <div className="row mb-5 justify-content-center">
          <div className="col-md-7 text-center">
            <h2 className="section-title mb-2">Все книги</h2>
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
export default Index;