import { IUsersServer } from '../../stubs/protos/users_grpc_pb'
import { createClientStreaming } from './createClientStreaming'
import { createServerStreaming } from './createServerStreaming'
import { createBidirectionalStreaming } from './createBidirectionalStreaming'
import { createUnary } from './createUnary'

export const UsersRemoteProcedureCall: IUsersServer = { createClientStreaming, createServerStreaming, createBidirectionalStreaming, createUnary }
