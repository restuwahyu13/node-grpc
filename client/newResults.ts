import { ServiceError } from 'grpc'
import { UserList, Empty } from '../typedefs/users_pb'
import { client } from './client'

function getNewUsers() {
  return new Promise<UserList.AsObject>((resolve, reject) => {
    client.getNewUsers(new Empty(), (error: ServiceError, response: UserList) => {
      if (error) reject(error)
      resolve(response.toObject())
    })
  })
}

getNewUsers()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
