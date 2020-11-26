import React, { Component, Fragment } from 'react';
import '../../App.css';
import 'materialize-css/dist/css/materialize.min.css';

import Header from "../../Components/Header/Header";
import Tabela from '../../Components/Tabela/Tabela';
import Formulario from '../../Components/Formulario/Formulario';
import Popup from '../../Utils/Popup';
import ApiService from '../../Utils/ApiService';

class Home extends Component {

  constructor(props){
    super(props);

    this.state = {
      autores: [],  
    }

  }

  

  removeAutor = id => {

    const { autores } = this.state;

    const autoreAtualizado = autores.filter(autor => {
      return autor.id !== id;
    })    

    ApiService.RemoveAutor(id)
                .then(res => {
                  if(res.message === 'deleted'){
                    this.setState({ autores: [...autoreAtualizado] })
                    Popup.exibeMensagem('success', 'Autor removido');
                  }
                })
                .catch(err => {
                  Popup.exibeMensagem('error', 'Erro na comunicação com a API ao tentar remover o autor');
                });

    
    

  }

  escutadorDeSubmit = autor => {

    ApiService.CriaAutor(JSON.stringify(autor))                
                .then(res => {

                  if(res.message === 'success'){
                    this.setState({ autores: [...this.state.autores, res.data] })
                    Popup.exibeMensagem('success', 'Autor Adicionado com sucesso')
                  }                  
                })
                .catch(err => {
                 
                  Popup.exibeMensagem('error', 'Erro na comunicação com a API ao tentar criar o autor')
                });   
  }


  componentDidMount(){

    ApiService.ListaAutores()
                .then(res =>  {

                  if(res.message === 'success'){
                    this.setState({ autores: [...this.state.autores, ...res.data]})
                  }
                  
                })
                .catch(err => {
                 
                  Popup.exibeMensagem('error', 'Erro na comunicação com a API ao tentar listar autores')
                });

  }


  render() {    
    
    return (
      <Fragment>

        <Header />       

        <div className="container mb-10">
        
          <h1> Casa do Codigo </h1>

          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />

          <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>

      </Fragment>
    );
  }


}

export default Home;
