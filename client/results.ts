import { User, Empty } from '../typedefs/users_pb'
import { client } from './client'

function getUsers() {
  return new Promise<User[]>((resolve, reject) => {
    const stream = client.getUsers(new Empty())
    const users: User[] = []

    stream.on('data', (user) => users.push(user.toObject()))
    stream.on('error', reject)
    stream.on('end', () => resolve(users))
  })
}

getUsers().then((res) => console.log(res))
