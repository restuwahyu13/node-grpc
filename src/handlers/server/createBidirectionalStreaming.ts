import { ServerDuplexStream, ServerErrorResponse, sendUnaryData, status } from '@grpc/grpc-js'
import { User, Response } from '../../stubs/protos/users_pb'

export function createBidirectionalStreaming(stream: ServerDuplexStream<User, Response | ServerErrorResponse>) {
	const res: InstanceType<typeof Response> = new Response()

	stream.on('data', (chunk: User) => {
		if (!chunk.toObject()) {
			// set response and send error into client, after server received request body from client
			const res: InstanceType<typeof Response> = new Response()
			res.setStatCode(400)
			res.setStatMsg('Create new user failed')

			stream.write(res)
			stream.end(res)
		}

		console.log(`BidirectionalStreaming:${new Date().toISOString()} - Request body from client: `, chunk.toObject())
	})

	// set response and sending success into client, after server received request body from client
	res.setStatCode(200)
	res.setStatMsg('Create new user successfully')

	stream.write(res)
	stream.end()
}
