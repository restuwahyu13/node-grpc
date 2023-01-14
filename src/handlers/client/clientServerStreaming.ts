import { ClientReadableStream } from '@grpc/grpc-js'
import { Response, User } from '../../stubs/protos/users_pb'
import { client } from '../../../client'

// set request data from client into server
const reqBody = new User()
reqBody.setId(3)
reqBody.setName('restu wahyu saputra')
reqBody.setAge(24)

//  send request data into server from client and get response back from server after server received data from client
const stream: ClientReadableStream<Response> = client.createServerStreaming(reqBody)
stream.on('data', (response: Response): void => {
	console.log(response.toObject())
})
