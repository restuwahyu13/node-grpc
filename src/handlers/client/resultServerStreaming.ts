import { ClientReadableStream } from '@grpc/grpc-js'
import { Response, User, UserId } from '../../stubs/protos/users_pb'
import { client } from '../../../client'

// set request data from client into server
const reqParams = new UserId()
reqParams.setId(1)

//  send request data into server from client and get response back from server after server received data from client
const stream: ClientReadableStream<User> = client.resultServerStreaming(reqParams)
stream.on('data', (res: User): void => {
	console.log(res.toObject())
})
