import { ServiceError } from 'grpc'
import { UserList, UserId } from '../typedefs/users_pb'
import { client } from './client'

function deleteUser() {
  return new Promise<UserList.AsObject>((resolve, reject) => {
    const params = new UserId()
    params.setId(2)

    client.deleteUser(params, (error: ServiceError, response: UserList) => {
      if (error) reject(error)
      resolve(response.toObject())
    })
  })
}

deleteUser()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
