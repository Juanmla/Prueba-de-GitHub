import React from 'react';
import Buscador from './components/Buscador';
import Outcome from './components/Outcome';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: '',
            images: [],
            pagina: '',
        };
    }

    scroll = () => {
        const element = document.querySelector('.jumbotron');
        element.scrollIntoView('smooth', 'start');
    };

    requestApi = () => {
        const busqueda = this.state.datos;
        const { pagina } = this.state;
        const url = `https://pixabay.com/api/?key=16579668-4a9b061217e7524720277dbe6&q=${busqueda}&per_page=30&page=${pagina}`;

        // eslint-disable-next-line no-undef
        fetch(url)
            .then((response) => response.json())
            .then((response) => this.setState({ images: response.hits }));
    };

    dataSearch = (datos) => {
        this.setState(
            {
                datos,
                pagina: 1,
            },
            () => {
                this.requestApi();
            },
        );
    };

    // eslint-disable-next-line no-unused-vars
    nextPage = (props) => {
        let { pagina } = this.state;
        pagina += 1;
        this.setState(
            {
                pagina,
            },
            () => {
                this.requestApi();
                this.scroll();
            },
        );
    };

    previousPage = (props) => {
        let { pagina } = this.state;
        if (pagina === 1) return null;
        pagina -= 1;
        this.setState(
            {
                pagina,
            },
            () => {
                this.requestApi();
                this.scroll();
            },
        );
    };

    render() {
        return (
            <div className="app container">
                <div className="jumbotron">
                    <p className="lead text-center">Buscador de imagenes</p>

                    <Buscador dataSearch={this.dataSearch} />
                </div>
                <div className="row justify-content-center">
                    <Outcome
                        // eslint-disable-next-line react/destructuring-assignment
                        images={this.state.images}
                        nextPage={this.nextPage}
                        previousPage={this.previousPage}
                    />
                </div>
            </div>
        );
    }
}

export default App;
