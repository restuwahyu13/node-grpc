import { ServerErrorResponse, ServerReadableStream, sendUnaryData, status } from '@grpc/grpc-js'
import { UserId, User } from '../../stubs/protos/users_pb'
import { users } from '../../utils/fakeData'

export function resultClientStreaming(stream: ServerReadableStream<UserId, User>, callback: sendUnaryData<User>): void {
	new Promise((resolve, _) => {
		stream.on('data', (chunk: UserId) => {
			if (!chunk.getId()) {
				// sending response error into client, after server received request body from client
				const res: ServerErrorResponse = { name: '', message: '' }
				res.name = 'resultUnary'
				res.code = status.NOT_FOUND
				res.message = `User data not found, for this id ${chunk.getId()}`

				callback(res, null)
			}

			resolve(chunk.getId())
			console.log(`ClientStreaming:${new Date().toISOString()} - Request body from client: `, chunk.toObject())
		})
	}).then((id: number) => {
		stream.on('end', () => {
			// set response and send success into client, after server received request body from client
			const getUser: User = users.find((val: User) => val.getId() === id)

			callback(null, getUser)
		})
	})
}
