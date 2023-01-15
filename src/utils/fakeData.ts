import { User } from '../stubs/protos/users_pb'

function transfromRequest({ id, age, name }: User.AsObject): User {
	const user = new User()
	user.setId(id)
	user.setName(name)
	user.setAge(age)

	return user
}

export const users: User[] = [
	{ id: 1, name: 'Jane Doe', age: 28 },
	{ id: 2, name: 'John Doe', age: 30 }
].map(transfromRequest)
