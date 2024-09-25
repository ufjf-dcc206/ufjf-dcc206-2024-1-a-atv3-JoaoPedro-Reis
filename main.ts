const url = "https://pokeapi.co/api/v2/pokemon/";

const buscaPoke = () => {
    const nome = document.querySelector

    sendByFetch(nome).then((obj) => {
        if(obj && obj.data){
            
        }
    })

}

const sendByFetch = async (pokeName) => {
    try {
        const response = await fetch(`${url}${pokeName}`, {
            headers: {
                "Accept": "application/json"
            },
            method: "GET",
        });

        if(!response.ok){
            throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        return json;
    } catch(error){
        throw new Error(`Erro na comunicação com o servidor: ${error.message}`);
    }
}