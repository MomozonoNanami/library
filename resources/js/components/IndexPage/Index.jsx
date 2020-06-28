import React from 'react'; 
import Slide from './Slide';
import Books from './Books';
import Feedback from './Feedback';
import Blogs from './Blogs';

class Index extends React.Component {
	constructor(props){
    super(props);
    this.state = {
    storage_url: process.env.MIX_STORAGE_URL,
    books: props.books,
    blogs: props.blogs
    }
  }

	render() {
		const storage_url = this.state.storage_url;

		const books = this.state.books; 
		const blogs = this.state.blogs; 
		return ( 
			<div>
			<Books storage_url={storage_url} books={books} /> 
			<Feedback /> 
			<Blogs storage_url={storage_url} blogs={blogs} /> 
			  
			</div>
		)
		}
}
export default Index;