const users = [
  {
      nome: "Guido",
      idade: 32,
      status: true,
  },
  {
      nome: "Dani",
      idade: 30,
      status: true,
  },
  {
      nome: "João",
      idade: 40,
      status: false,
  },
  {
      nome: "Guilherme",
      idade: 29,
      status: true,
  },
  {
      nome: "Ana",
      idade: 18,
      status: false,
  },
  {
      nome: "José",
      idade: 28,
      status: false,
  },
]

const filterUsers = (usersList: { nome: string, idade: number, status: boolean }[], nameFilter: string): object[] => {
  let filteredUsers: { nome: string, idade: number, status: boolean }[] = [];

  usersList.forEach(user => {
    let usernameMatchesFilter: boolean = true;
    
    for(let i = 0; i < nameFilter.length - 1; i++) {
      if (user.nome[i].toLowerCase() !== nameFilter[i].toLowerCase()) {
        usernameMatchesFilter = false;
        break;
      }
    }

    if (usernameMatchesFilter === true) {
      filteredUsers.push(user);
    }
  });


  return filteredUsers;
}

console.log(filterUsers(users, 'Jo'));
