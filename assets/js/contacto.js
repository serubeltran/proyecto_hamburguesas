const vFormulario = document.querySelector('#idForm')
vFormulario.addEventListener('submit', tomarSubmit)
const btnCerrarGracias = document.getElementById("bGracias")
const modalGracias = document.getElementById("mGracias")


async function tomarSubmit(event) {
    event.preventDefault()
    const vform = new FormData(this)
    const respuesta = await fetch(this.action, {
        method: this.method,
        body: vform,
        headers: {
            'Accept': 'application/Json'
        }
    })
    if(respuesta.ok){
        this.reset()
        modalGracias.showModal()
        btnCerrarGracias.addEventListener("click" , ()=> {
            modalGracias.close()
        })
    }
}



