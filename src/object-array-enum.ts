const person1: {
  name: string;
  age: number;
} = {
  name: 'Ale',
  age: 29
}

const person2: object = {
  name: 'Ale',
  age: 29
}

const person3: {} = {
  name: 'Ale',
  age: 29
}

const person4 = {
  name: 'Ale',
  age: 29
}

console.log(person1.name)
// console.log(person2.name) wrong
// console.log(person3.name) wrong
console.log(person4.name)

// *************** ARRAY

const personArray = {
  name: 'Ale',
  age: 29,
  hobbies: ['Sports', 'Cooking']
}

console.log('Name', personArray.name)

let favoriteActivities: string[];
favoriteActivities = ['Sports']

let favoriteActivitiesAny: any[];
favoriteActivitiesAny = ['Sports', 1]

for (const hobby of personArray.hobbies) {
  console.log('Hobby', hobby.toUpperCase())
}

personArray.hobbies.map(console.log)

// *************** TUPLE
const personTuple: { // fixed array length
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // first value always needs to be number, the second string
} = {
  name: 'Ale',
  age: 29,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
}

personTuple.role.push('admin') // ignore
// personTuple.role[0] = '10' // wrong
// personTuple.role = [0, 'admin', 'user'] // wrong
personTuple.role = [2, 'user'] 

// *************** ENUMS

enum Role { ADMIN=9, READ_ONLY=81, AUTHOR='hi' }

const Enums = {
  name: 'Ale',
  age: 29,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

console.log('Enums', Enums)