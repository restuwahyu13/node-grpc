import * as grpc from '@grpc/grpc-js'
import { UsersService } from './src/stubs/protos/users_grpc_pb'
import { UsersRemoteProcedureCall } from './src/handlers/server'

const server: InstanceType<typeof grpc.Server> = new grpc.Server()
server.addService(UsersService, UsersRemoteProcedureCall)

server.bindAsync('localhost:3000', grpc.ServerCredentials.createInsecure(), (err: Error, port: number): void => {
	if (err) console.error(err)
	console.log(`server is running on ${port}`)
	server.start()
})
