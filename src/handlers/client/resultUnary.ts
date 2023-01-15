import { ServiceError } from '@grpc/grpc-js'
import { client } from '../../../client'
import { Empty, UserList, UserId, User } from '../../stubs/protos/users_pb'
import { resultUnary } from '../server/resultUnary'

// set request from sending data into server from client
const reqParams = new UserId()
reqParams.setId(3)

// send data from client into server and get response from server after server received data from client
client.resultUnary(reqParams, (err: ServiceError, res: User): void => {
	if (err) console.error('Error: ', err)
	console.log(res.toObject())
})
