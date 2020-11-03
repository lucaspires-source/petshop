const tableBody = document.querySelector("[data-table]");

const showClient = (cpf, name) => {
  const line = document.createElement("tr");

  const lineContent = `
        <td>${cpf}</td>
        <td>${name}</td>
    `;

  line.innerHTML = lineContent;

  return line;
};

listingClients().then(
    show =>{ 
        show.forEach((index) => {
        tableBody.appendChild(showClient(index.cpf, index.nome));
      });
    }   
)