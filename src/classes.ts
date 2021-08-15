interface UserTestInterface {
  getFullname(): string
}

class User implements UserTestInterface {
  protected firstName: string // child class can allow to access
  private lastName: string
  readonly unchangableName: string
  static readonly maxAge = 50

  constructor(firstname: string, lastname: string) {
    this.firstName = firstname
    this.lastName = lastname
    this.unchangableName = firstname
  }

  // changeUnchangableName(value: string): void {
  //   this.unchangableName = value // cant be changed, it is readonly
  // }

  getFullname(): string {
    return this.firstName + ' ' + this.lastName
  }
}

const user = new User('Alex', 'Silva')
console.log(user.getFullname())
console.log(user.unchangableName)
// console.log(user.changeUnchangableName('new name')) // ????? cant change
// console.log(user.maxAge) // ???? object does not have to access to maxAge variable
console.log(User.maxAge)

console.log(user.getFullname)

class Admin implements UserTestInterface {
  private editor: string = 'editor'

  set editorValue(editor: string) {
    this.editor = editor;
  }

  get editorValue(): string {
    return this.editor
  }

  getFullname(): string {
    return this.editor
  }

}

const admin = new Admin()
console.log(admin.getFullname())
// console.log(admin.unchangableName)
// console.log(admin.changeUnchangableName('new name')) // ????? cant change
// console.log(admin.maxAge) // ???? object does not have to access to maxAge variable
// console.log(Admin.maxAge)
console.log(admin.getFullname())
