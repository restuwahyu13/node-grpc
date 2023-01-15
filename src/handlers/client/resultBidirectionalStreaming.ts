import { ClientDuplexStream } from '@grpc/grpc-js'
import { User, UserId } from '../../stubs/protos/users_pb'
import { client } from '../../../client'

const stream: ClientDuplexStream<UserId, User> = client.resultBidirectionalStreaming()

//  get response from server, after server received data from client
stream.on('data', (res: User) => {
	console.log(res.toObject())
})

// set request from sending data into server from client
const reqParams = new UserId()
reqParams.setId(1)

// send data from client into server
stream.write(reqParams)
stream.end()
