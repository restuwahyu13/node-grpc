import * as grpc from '@grpc/grpc-js'
import { UsersClient } from './src/stubs/protos/users_grpc_pb'

export const client = new UsersClient('localhost:3000', grpc.credentials.createInsecure())
