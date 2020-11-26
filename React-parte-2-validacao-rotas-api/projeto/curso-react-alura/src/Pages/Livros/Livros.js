import React, { Component, Fragment } from 'react';
import Header from '../../Components/Header/Header';
import DataTable from '../../Components/DataTable/DataTable';
import ApiService from '../../Utils/ApiService';
import Popup from '../../Utils/Popup';


class Livros extends Component {
    constructor(props) {
        super(props);

        this.state = {
            livros: [],
            titulo: 'Livros'
        };
    }

    componentDidMount(){

      ApiService.ListaLivros()
                  .then(res => {

                    if(res.message === 'success'){
                      this.setState({livros: [...this.state.livros, ...res.data]});
                      Popup.exibeMensagem('success', 'Livros atualizados');
                    }
                     
                  })
                  .catch(err => {
                    Popup.exibeMensagem('error', 'Erro na comunicação com a API ao tentar listar livros');
                  })
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className='container'>
                    <h1>Página de Livros</h1>
                    <DataTable dados={this.state.livros} titulo={this.state.titulo} colunas={['livro']}/>
                </div>
            </Fragment>
        );
    }
}

export default Livros;