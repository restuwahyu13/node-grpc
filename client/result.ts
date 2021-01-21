import { ServiceError } from 'grpc'
import { User, UserId } from '../typedefs/users_pb'
import { client } from './client'

function getUser() {
  return new Promise<User.AsObject>((resolve, reject) => {
    const params = new UserId()
    params.setId(2)

    client.getUser(params, (error: ServiceError, response: User) => {
      if (error) reject(error)
      resolve(response.toObject())
    })
  })
}

getUser().then((res) => console.log(res))
