const apiUrl= 'https://random-data-api.com/api/v2/beers?size=6'

fetch(apiUrl)
.then (respuesta => respuesta.json())
.then (datos =>{
    for (let indice=0;indice<6;indice++) {
        let suma= indice+1
        let texto= "descripcion"+suma
        let cerveza1="nomCerveza"+(suma*2-1)
        let cerveza2="nomCerveza"+suma*2 

        let nom1 = document.getElementById(cerveza1)
        let nom2 = document.getElementById(cerveza2)
        let descrip = document.getElementById(texto)
        
        cNombre= (datos[indice].name)
        cEstilo= (datos[indice].style)
        cMalta= (datos[indice].malts)
        cGraduacion= (datos[indice].alcohol)
        cAmargor= (datos[indice].ibu)

        nom1.innerHTML = cNombre
        nom2.innerHTML = cNombre
        descrip.innerHTML = "Estilo: " + cEstilo + "<br>" + "<br>"
        descrip.innerHTML += "Malta: " + cMalta + "<br>" + "<br>"
        descrip.innerHTML += "Graduación alcohólica: " + cGraduacion + "<br>" + "<br>"
        descrip.innerHTML += "Amargor: " + cAmargor + "<br>" + "<br>"
    }
})
.catch (error => console.log('Problemas con la solicitud',error))





    

    
   



