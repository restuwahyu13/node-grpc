import { User, Empty } from '../typedefs/users_pb'
import { client } from './client'

function createUser() {
  return new Promise<User.AsObject>((resolve, reject) => {
    const reqBody = new User()
    reqBody.setId(3)
    reqBody.setName('restu wahyu saputra')
    reqBody.setAge(24)

    const stream = client.createUser(() => {})
    resolve(reqBody.toObject())
    stream.end()
  })
}

createUser().then((res) => console.log(res))
