console.log('init')

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-string'

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor = 'as-number'
): Combinable {
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number')
    return +input1 + +input2

  return input1.toString() + input2.toString()
}

const combinedAges = combine(30, 26)
console.log('combinedAges', combinedAges)

const combinedStringAgesAsNumber = combine('30', '26')
console.log('combinedStringAgesAsNumber', combinedStringAgesAsNumber)

const combinedNames = combine('Alex', 'andre', 'as-string')
console.log('combinedNames', combinedNames)