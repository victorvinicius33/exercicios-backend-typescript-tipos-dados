const filterUsers = (
  usersList: { 
    nome: string, 
    idade: number, 
    status: boolean 
  }[], 
  nameFilter: string
): {
    nome: string, 
    idade: number, 
    status: boolean
}[] => {
  const filteredUsers = usersList.filter((user) => {
    return user.nome.toLowerCase().includes(nameFilter.toLowerCase());
  })

  return filteredUsers;
}

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

console.log(filterUsers(users, 'Jo'));
