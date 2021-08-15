interface UserInterface {
  name: string
  age?: number
  getMessage(): string
}

const user1: UserInterface = {
  name: 'Alex',
  age: 1,
  getMessage() {
    return 'Hello' + this.name
  }
}

const user2: UserInterface = {
  name: 'Alex',
  getMessage() {
    return 'Hello' + this.name
  }
}

console.log(user1.getMessage())