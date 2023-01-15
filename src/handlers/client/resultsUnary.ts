import { ServiceError } from '@grpc/grpc-js'
import { client } from '../../../client'
import { Empty, UserList } from '../../stubs/protos/users_pb'

// get response from server
client.resultsUnary(new Empty(), (err: ServiceError, res: UserList): void => {
	if (err) console.error('Error: ', err)
	console.log(res.toObject().usersList)
})
