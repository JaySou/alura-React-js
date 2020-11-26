const urlBase = 'http://localhost:8000/api/autor';

const consomeAPI = (parametro = '', method = 'GET', body) => {

    return fetch(`${urlBase}/${parametro}`, {
        method,
        headers: {'content-type': 'application/json'},
        body
    })
            .then(res => ApiService.TrataErros(res))
            .then(res => res.json())
}


const ApiService = {


    ListaAutores: () => consomeAPI(),

    ListaNome: () => consomeAPI('nome'),

    ListaLivros: () => consomeAPI(),

    CriaAutor: autor => consomeAPI('', 'POST', autor),

    RemoveAutor: id =>consomeAPI(id, 'DELETE'),

    TrataErros: res => {
        if(!res.ok){
            throw Error(res.responseText);
        }

        return res;
    }


}

export default ApiService;