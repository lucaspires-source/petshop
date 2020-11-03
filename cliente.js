const clientInformation = [
    {
        cpf: 04570736176,
        name:"Lucas"
    },
    {
        cpf: 54525545457842,
        name:"Neymar"
    }
]

const tableBody = document.querySelector("[data-table]")

const showClient = (cpf,name) =>{
    const line = document.createElement("tr")
    
    const lineContent = 
    `
        <td>${cpf}</td>
        <td>${name}</td>
    `

    line.innerHTML = lineContent

    return line
}

clientInformation.forEach( index => {
    tableBody.appendChild(showClient(index.cpf,index.name))
}) 