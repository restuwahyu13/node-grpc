import { ServerErrorResponse, ServerReadableStream, sendUnaryData, status } from '@grpc/grpc-js'
import { User, Response } from '../../stubs/protos/users_pb'

export function createClientStreaming(stream: ServerReadableStream<User, Response>, callback: sendUnaryData<Response>): void {
	stream.on('data', (chunk: User): void => {
		const res: ServerErrorResponse = { name: '', message: '' }

		if (!chunk.toObject()) {
			// set response and send error into client, after server received request body from client
			res.name = 'createClientStreaming'
			res.code = status.PERMISSION_DENIED
			res.message = 'Create new user failed'

			callback(res, null)
		}

		console.log(`ClientStreaming:${new Date().toISOString()} - Request body from client: `, chunk.toObject())
	})

	stream.on('end', (): void => {
		// set response and sending success into client, after server received request body from client
		const res: InstanceType<typeof Response> = new Response()
		res.setStatCode(200)
		res.setStatMsg('Create new user successfully')

		callback(null, res)
	})
}
