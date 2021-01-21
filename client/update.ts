import { ServiceError } from 'grpc'
import { User } from '../typedefs/users_pb'
import { client } from './client'

function updateUser() {
  return new Promise<User.AsObject>((resolve, reject) => {
    const requestBody = new User()
    requestBody.setId(1)
    requestBody.setName('aldi khan')
    requestBody.setAge(25)

    client.updateUser(requestBody, (error: ServiceError, response: User) => {
      if (error) reject(error)
      resolve(response.toObject())
    })
  })
}

updateUser().then((res) => console.log(res))
