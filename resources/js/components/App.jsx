import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Index from './IndexPage/Index'; 
 
import BooksPage from './BooksPage/Books';  
import BlogsPage from './BlogsPage/Blogs';  
import {BrowserRouter, Route, Link} from 'react-router-dom';

class App extends React.Component {
	constructor(props){
    super(props);
    this.state = {
    storage_url: process.env.MIX_STORAGE_URL,
    app_url: process.env.MIX_APP_URL,
    books: [],
    blogs: []
    }
  }

   componentDidMount(){
  const self = this;
    axios.get('books')
    .then(function (response){
      self.setState({
        books: response.data
      })
    })
    .catch(function (error){
      console.log(error);
    })

    axios.get('blogs')
    .then(function (response){
      self.setState({
        blogs: response.data
      })
    })
    .catch(function (error){
      console.log(error);
    })
  }

   

	render() {
		const storage_url = this.state.storage_url;
		const app_url = this.state.app_url;
		const books = this.state.books;
		const blogs = this.state.blogs;

		return ( 

		<BrowserRouter>	
			<Header /> 
			 
			<Route 
				path={'/'} exact
				component={props=> <Index {...props} storage_url={storage_url} app_url={app_url} books = {books} blogs = {blogs}/>}
			/> 
			<Route
				path={'/books'}
				component={props=> <BooksPage {...props} storage_url={storage_url} app_url={app_url} books = {books} storage_url={storage_url}/>}
			/> 
			<Route
				path={'/blogs'}
				component={props=> <BlogsPage {...props} storage_url={storage_url} app_url={app_url} blogs = {blogs} storage_url={storage_url} />}
			/> 
 			<Footer />
		</BrowserRouter>	
			 
		)
		}
}
export default App;