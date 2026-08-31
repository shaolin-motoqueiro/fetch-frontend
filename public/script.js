const btnBuscar = document.querySelector("#btnBuscar");
const listaUsuarios = document.querySelector("#listaUsuarios");
const formUsuario = document.querySelector("#formUsuario");

// BUSCAR USUÁRIOS
async function buscarUsuarios() {
  const resposta = await fetch("/usuarios");
  const usuarios = await resposta.json();

  listaUsuarios.innerHTML = "";

  usuarios.forEach((usuario) => {
    const p = document.createElement("p");

    p.textContent = `${usuario.nome} - ${usuario.email}`;

    listaUsuarios.appendChild(p);
  });
}

// BOTÃO BUSCAR
btnBuscar.addEventListener("click", buscarUsuarios);

// CADASTRAR USUÁRIO
formUsuario.addEventListener("submit", async (event) => {
  event.preventDefault();

  const nome = document.querySelector("#nome").value;

  const email = document.querySelector("#email").value;

  const resposta = await fetch("/usuarios", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      nome: nome,
      email: email,
    }),
  });

  const novoUsuario = await resposta.json();

  console.log(novoUsuario);

  formUsuario.reset();

  buscarUsuarios();
});
