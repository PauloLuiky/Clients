/*
const client1 = {
  nome: 'Guilherme',
  email: 'guilherme@test.com'
}

const client2 = {
  nome: 'Paulo',
  email: 'paulo@test.com'
}

const client3 = {
  nome: 'Ricardo',
  email: 'ricardo@test.com'
}

const list = [client1, client2, client3];
*/

/*
let counter = 0;
while(counter < 3) {
  console.log(list[counter]);
  counter ++;
}
*/
/*
for(let index = 0; index < 3; index++) {
  console.log(list[index]);
}
*/

const clients = [
  {
    nome: 'Guilherme',
    email: 'guilherme@test.com'
  },
  {
    nome: 'Paulo',
    email: 'paulo@test.com'
  },
  {
    nome: 'Ricardo',
    email: 'ricardo@test.com'
  }
]

const list = document.getElementById('clients');
/*console.log(list);*/

/* Usando o while
let index = 0;
while(index < clients.length) {
  const client = clients[index];
  const listItem = document.createElement('li');

  const text = document.createTextNode(client.nome);

  listItem.appendChild(text);
  list.appendChild(listItem);
  index ++;
}
*/

/*clients.forEach((client) => {
  const listItem = document.createElement('li');

  const text = document.createTextNode(client.nome);
  listItem.appendChild(text);

  list.appendChild(listItem);
});
*/
//usando forEach e abaixo colocando parágrafo

/*
clients.forEach((client) => {
  // li
  const listItem = document.createElement('li');

  // p
  const paragraph = document.createElement('p');
  listItem.appendChild(paragraph);
  const text = document.createTextNode(client.nome);
  listItem.appendChild(text);

  list.appendChild(listItem);
});
*/

function createParagraph(textContent, parent) {
  const paragraph = document.createElement('p');
  const text = document.createTextNode(textContent);
  paragraph.appendChild(text);

  parent.appendChild(paragraph);
}

clients.forEach((client) => {
  const listItem = document.createElement('li');

  createParagraph(client.nome, listItem);
  createParagraph(client.email, listItem);

  list.appendChild(listItem);
});
