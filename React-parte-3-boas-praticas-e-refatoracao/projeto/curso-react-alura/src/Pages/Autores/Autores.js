
import React, { Component, Fragment } from 'react';
import Header from '../../Components/Header/Header';
import Tabela from '../../Components/Tabela/Tabela';
import ApiService from '../../Utils/ApiService';
import Popup from '../../Utils/Popup';


class Autores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nomes: []
        };
    }

    componentDidMount(){
      ApiService.ListaNome()
                  .then(res => {

                    if(res.message === 'success'){
                      this.setState({nomes: [...this.state.nomes, ...res.data]});
                      Popup.exibeMensagem('success', 'Autores atualizados');
                    }
                     
                  }).catch(err => {
                    Popup.exibeMensagem('error', 'Erro na comunicação com a API ao tentar listar autores');
                  })
    }

    render() {

      const campos = [{titulo: 'Autores', dado: 'nome'}]

        return (
            <Fragment>
                <Header />
                <div className='container'>
                    <h1>Página de Autores</h1>
                    <Tabela dados={this.state.nomes} titulo={this.state.titulo} campos={campos}/>
                </div>
            </Fragment>
        );
    }
}

export default Autores;