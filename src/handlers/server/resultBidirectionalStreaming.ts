import { ServerDuplexStream } from '@grpc/grpc-js'
import { User, UserId } from '../../stubs/protos/users_pb'
import { users } from '../../utils/fakeData'

export function resultBidirectionalStreaming(stream: ServerDuplexStream<UserId, User>) {
	new Promise((resolve, _) => {
		stream.on('data', (chunk: UserId) => {
			if (!chunk.getId()) {
				// set response and send error into client, after server received request body from client
				const res: InstanceType<typeof User> = new User()
				res.setId(0)
				res.setName('')
				res.setAge(0)

				stream.write(res)
				stream.end()
			}

			resolve(chunk.getId())
			console.log(`BidirectionalStreaming:${new Date().toISOString()} - Request body from client: `, chunk.toObject())
		})
	}).then((id: number) => {
		// set response and send success into client, after server received request body from client
		const getUser: User = users.find((val: User) => val.getId() === id)

		stream.write(getUser)
		stream.end()
	})
}
