import { sendUnaryData, ServerUnaryCall, ServerErrorResponse, status } from '@grpc/grpc-js'
import { User, Response } from '../../stubs/protos/users_pb'

export function createUnary(call: ServerUnaryCall<User, Response>, callback: sendUnaryData<Response>): void {
	const errRes: ServerErrorResponse = { name: '', message: '' }
	const res: InstanceType<typeof Response> = new Response()

	if (!call.request.toObject()) {
		// sending response error into client, after server received request body from client
		errRes.name = 'CreateUnary'
		errRes.code = status.PERMISSION_DENIED
		errRes.message = 'Create new user failed'

		callback(errRes, null)
	} else {
		console.log(`Unary:${new Date().toISOString()} - Request body from client: `, call.request.toObject())

		// set response and send success into client, after server received request body from client
		res.setStatCode(200)
		res.setStatMsg('Create new user successfully')
		callback(null, res)
	}
}
