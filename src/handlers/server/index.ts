import { IUsersServer } from '../../stubs/protos/users_grpc_pb'
import { createClientStreaming } from './createClientStreaming'
import { createServerStreaming } from './createServerStreaming'
import { createBidirectionalStreaming } from './createBidirectionalStreaming'
import { createUnary } from './createUnary'
import { resultsUnary } from './resultsUnary'
import { resultsServerStreaming } from './resultsServerStreaming'
import { resultUnary } from './resultUnary'
import { resultClientStreaming } from './resultClientStreaming'
import { resultServerStreaming } from './resultServerStreaming'
import { resultBidirectionalStreaming } from './resultBidirectionalStreaming'

export const UsersRemoteProcedureCall: IUsersServer = {
	createUnary,
	createClientStreaming,
	createServerStreaming,
	createBidirectionalStreaming,
	resultsUnary,
	resultsServerStreaming,
	resultUnary,
	resultClientStreaming,
	resultServerStreaming,
	resultBidirectionalStreaming
}
