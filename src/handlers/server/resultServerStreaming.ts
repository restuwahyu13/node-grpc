import { ServerErrorResponse, ServerWritableStream, status } from '@grpc/grpc-js'
import { UserId, User } from '../../stubs/protos/users_pb'
import { users } from '../../utils/fakeData'

export function resultServerStreaming(stream: ServerWritableStream<UserId, User | ServerErrorResponse>): void {
	const resErr: ServerErrorResponse = { name: '', message: '' }

	if (!stream.request.getId()) {
		// sending response error into client, after server received request body from client
		resErr.name = 'resultUnary'
		resErr.code = status.NOT_FOUND
		resErr.message = `User data not found, for this id ${stream.request.getId()}`

		stream.write(resErr)
		stream.end()
	}
	console.log(`ServerStreaming:${new Date().toISOString()} - Request body from client: `, stream.request.toObject())

	// set response and send success into client, after server received request body from client
	const getUser: User = users.find((val: User) => val.getId() === stream.request.getId())

	stream.write(getUser)
	stream.end()
}
