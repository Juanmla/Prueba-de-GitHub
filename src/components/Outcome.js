import React, { Component } from 'react';
import Image from './Image';
import Pagination from './Pagination';

class Outcome extends Component {

	showImages = () => {
		const imagenes = this.props.images

		if(imagenes === 0) return null;
		return (
			<React.Fragment>
				<div className="col-12 p-5 row">
					{ imagenes.map(imagen => (
						<Image 
							key={imagen.id}
							imagen={imagen}
							
							/>
						)) }
				</div>
				<Pagination 
				nextPage={this.props.nextPage}
            	previousPage={this.props.previousPage}
				/>
			</React.Fragment>
			);
	}	




	render() {
		return ( 
			<React.Fragment>
				{ this.showImages() }
			</React.Fragment>
			);
	}
}

export default Outcome;