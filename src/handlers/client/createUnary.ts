import { ServiceError } from '@grpc/grpc-js'
import { User, Response } from '../../stubs/protos/users_pb'
import { client } from '../../../client'

// set request from sending data into server from client
const reqBody = new User()
reqBody.setId(3)
reqBody.setName('restu wahyu saputra')
reqBody.setAge(24)

// send data from client into server and get response from server after server received data from client
client.createUnary(reqBody, (err: ServiceError, res: Response): void => {
	if (err) console.error('Error: ', err)
	console.log(res.toObject())
})
