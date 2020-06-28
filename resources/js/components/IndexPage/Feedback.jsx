import React from 'react';

class Feedback extends React.Component {
	
	render() {

		return (
			 <section className="py-5 bg-image overlay-primary fixed overlay" >
		      <div className="container">
		        <div className="row align-items-center">
		          <div className="col-md-8">
		            <h2 className="text-white">Не нашли книгу в каталоге? Закажите !</h2>
		            <p className="mb-0 text-white lead">Обратитесь к библиотекарю.</p>
		          </div> 
		        </div>
		      </div>
		    </section>
		)
	}
}

export default Feedback;
