const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16)

  return { ...obj, id }
}

type Meta = { 
  header: string
  url: string
  requestType: string
  count: number
}

interface User1Interface<T, V> {
  name: string
  data: T
  actions: V
}

const userA: User1Interface<Meta, number[]> = {
  name: 'Ale',
  data: {
    header: 'teste',
    url: 'teste',
    requestType: 'teste',
    count: 2
  },
  actions: [1, 2, 3, 4]
}

const result = addId(userA)
// const resultA = addId('userA') // worng

console.log('result', result)