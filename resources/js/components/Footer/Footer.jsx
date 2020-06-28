import React from 'react';

class Footer extends React.Component {
	
	render() {

		return (
			 <footer className="site-footer">

      <a href="#top" className="smoothscroll scroll-top">
        <span className="icon-keyboard_arrow_up"></span>
      </a>

      <div className="container"> 
        <div className="row text-center">
          <div className="col-12">
            <p className="copyright"><small>
              
            Copyright &copy; 2020
           </small></p>
          </div>
        </div>
      </div>
    </footer>
		)
	}
}

export default Footer;
