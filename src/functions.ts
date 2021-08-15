function add(n1: number, n2: number): number {
  return n1 + n2
}

function printResult(num: number): void {
  console.log('Result: ' + num)
}

printResult(add(5, 12))

// ######### Callbacks typed
function addAndHandler(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2
  cb(result)
}

let combineValues: (a: number, b: number) => number

combineValues = add
// combineValues = printResult // wrong

console.log(combineValues(8, 8,))

addAndHandler(10, 20, (res) => {
  console.log('Callback', res)
})