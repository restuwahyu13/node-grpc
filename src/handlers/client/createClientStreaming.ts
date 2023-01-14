import { ClientWritableStream, ServiceError } from '@grpc/grpc-js'
import { Response, User } from '../../stubs/protos/users_pb'
import { client } from '../../../client'

// get response back from server after server received data from client
const stream: ClientWritableStream<User> = client.createClientStreaming((err: ServiceError, response: Response): void => {
	if (err) console.error('Error: ', err)
	console.log(response.toObject())
})

// set request data from client into server
const reqBody = new User()
reqBody.setId(1)
reqBody.setName('jane doe')
reqBody.setAge(28)

// send request data into server from client
stream.write(reqBody)
stream.end()
