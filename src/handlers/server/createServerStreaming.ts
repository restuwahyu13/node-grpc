import { ServerErrorResponse, status, ServerWritableStream } from '@grpc/grpc-js'
import { User, Response } from '../../stubs/protos/users_pb'

export function createServerStreaming(stream: ServerWritableStream<User, Response | ServerErrorResponse>): void {
	const res: InstanceType<typeof Response> = new Response()

	if (!stream.request.toObject()) {
		// sending response and send error into client, after server received request body from client
		res.setStatCode(400)
		res.setStatMsg('Create new user failed')

		stream.write(res)
		stream.end()
	} else {
		console.log(`ServerStreaming:${new Date().toISOString()} - Request body from client: `, stream.request.toObject())

		// set response and send error into client, after server received request body from client
		res.setStatCode(200)
		res.setStatMsg('Create new user successfully')
		stream.write(res)

		stream.end()
	}
}
