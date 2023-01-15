import { ServerErrorResponse, ServerUnaryCall, sendUnaryData, status } from '@grpc/grpc-js'
import { UserId, User } from '../../stubs/protos/users_pb'
import { users } from '../../utils/fakeData'

export function resultUnary(call: ServerUnaryCall<UserId, User>, callback: sendUnaryData<User>) {
	const resErr: ServerErrorResponse = { name: '', message: '' }

	if (!call.request.getId()) {
		// sending response error into client, after server received request body from client
		resErr.name = 'resultUnary'
		resErr.code = status.NOT_FOUND
		resErr.message = `User data not found, for this id ${call.request.getId()}`

		callback(resErr, null)
	}

	// set response and send success into client, after server received request body from client
	const getUser: User = users.find((val: User) => val.getId() === call.request.getId())
	callback(null, getUser)
}
