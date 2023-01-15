import { ClientWritableStream, ServiceError } from '@grpc/grpc-js'
import { User, UserId } from '../../stubs/protos/users_pb'
import { client } from '../../../client'

// get response back from server after server received data from client
const stream: ClientWritableStream<UserId> = client.resultClientStreaming((err: ServiceError, res: User): void => {
	if (err) console.error('Error: ', err)
	console.log(res.toObject())
})

// set request data from client into server
const reqParams = new UserId()
reqParams.setId(1)

// send request data into server from client
stream.write(reqParams)
stream.end()
