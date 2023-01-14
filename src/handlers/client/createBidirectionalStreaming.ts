import { ClientDuplexStream } from '@grpc/grpc-js'
import { Response, User } from '../../stubs/protos/users_pb'
import { client } from '../../../client'

const stream: ClientDuplexStream<User, Response> = client.createBidirectionalStreaming()

//  get response from server, after server received data from client
stream.on('data', (response: Response) => {
	console.log(response.toObject())
})

// set request from sending data into server from client
const reqBody = new User()
reqBody.setId(1)
reqBody.setName('jane doe')
reqBody.setAge(28)

// send data from client into server
stream.write(reqBody)
stream.end()
