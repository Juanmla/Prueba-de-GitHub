import React, { Component } from 'react';

class Buscador extends Component {
	
	busquedaRef = React.createRef();
	

	handleSubmit = (e) => {
		e.preventDefault();
		const datos = this.busquedaRef.current.value;
		this.props.dataSearch(datos);
	}



	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="row">
					<div className="form-group col-md-8">
						<input ref={this.busquedaRef} type="text" 
						className="form-control form-control-lg" 
						placeholder="Vamos, pruebame!"/>						
					</div>

					<div className="form-group col-md-4">
					<input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar"/>						
					</div>
				</div>
			</form>
			);
	}
}


export default Buscador;