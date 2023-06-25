const carregaLista = lista => lista.reduce((acum, item) => acum = acum + `<li>${item}</li>`)

const carregaFilme = filme => {
    const carregaTitulo = titulo =>{
    }


//função onde filme.classificao é colocado em um if para mudar a cor da classificação indicativa de acordo com a idade recomendada
    const cores = corzinha => {
        if(filme.classificacao < 18){
            corzinha = `<p class="cl" style="background-color:red;padding=5px; border-radius:10px;">${filme.classificacao}</p>`
            if(filme.classificacao < 16){
                corzinha = `<p class="cl" style="background-color:orange;padding=5px; border-radius:10px;">${filme.classificacao}</p>`
                if(filme.classificacao < 14){
                    corzinha = `<p class="cl" style="background-color:#c6d208; padding=5px; border-radius: 5px;">${filme.classificacao}</p>`   
                    if(filme.classificacao < 12){
                        corzinha = `<p class="cl" style="background-color:green; padding=20px; border-radius: 5px;">${filme.classificacao = "L"}</p>`
                    }
                }
            }
        }else{
            corzinha = `<p class="cl" style="background-color:black;padding=5px; border-radius:10px;">${filme.classificacao}</p>`
        }
        return corzinha
    }

//função para ver qual a nota do filme e colocar estrelas no lugar de números
    const rating = nota => {
        let star = filme.opinioes[0].rating

        switch(star){
            case 4: {
                nota = `<img src="./css/star.png" alt="star" width="20px" height="20px">
                <img src="./css/star.png" alt="star" width="20px" height="20px">
                <img src="./css/star.png" alt="star" width="20px" height="20px">
                <img src="./css/star.png" alt="star" width="20px" height="20px">
                <img src="./css/starcinza.png" alt="star" width="20px" height="20px">`
            } break;
            case 5: {
                nota = `<img src="./css/star.png" alt="star" width="20px" height="20px">
                <img src="./css/star.png" alt="star" width="20px" height="20px">
                <img src="./css/star.png" alt="star" width="20px" height="20px">
                <img src="./css/star.png" alt="star" width="20px" height="20px">
                <img src="./css/star.png" alt="star" width="20px" height="20px">`
            }
        }
        
        return nota
    }



    let resp = `
    <div class="filme">
        <div>
            <div class="filme-p">
                <img src="${filme.figura}" alt="${filme.titulo}" width="220px" height="160px">
                <div>
                    <h2>${filme.id} - ${filme.titulo}</h2><br>
                    <h3>Sinópse</h3>
                    <p>${filme.resumo}</p><br>
                </div>
                <div class="caixa-cs"><div class="star">${rating()}</div>${cores()}</div>
                <h3>Títulos Semelhantes:</h3><p>${filme.titulosSemelhantes[filme.figura[filme.id]]}</p>
            </div>
            <div class="filme-b">
                <div class="c1">
                    <h3>Genêros:</h3>
                    <ul>${carregaLista(filme.generos)}</ul><br>
                </div>
                <div class="c2">
                    <h3>Elenco:</h3>
                    <ul>${carregaLista(filme.elenco)}</ul><br>
                </div>
                <div class="c3">
                    
            </div>
                
        </div>
    </div><br>`
    const divResp = document.querySelector("#filmes")
    divResp.innerHTML += resp
}



const xhttp = new XMLHttpRequest()
const url = "https://rafaelescalfoni.github.io/desenv_web/filmes.json"


xhttp.open("GET", url)

xhttp.send()

xhttp.onreadystatechange = function(){
    if(this.readyState == 4){
        if(this.status == 200){
            let resposta = this.responseText
            let filmes = JSON.parse(resposta)

            filmes.forEach(filme => {
               carregaFilme(filme) 
            });
        }
    }else{
        //deu bigode
    }
}