let userInput: unknown
let userInputAny: any
let userName: string

userInput = 5
userInput = '5'

//userName = userInput // error
userName = userInputAny // works

if (typeof userInput === 'string') {
  userName = userInput // extra check to garante the string value
}

function generateError(message: string, code: number): never {
  throw {
    message,
    errorCode: code
  }
}

generateError('Error here', 500)
