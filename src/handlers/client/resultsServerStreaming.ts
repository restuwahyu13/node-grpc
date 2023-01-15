import { ClientReadableStream } from '@grpc/grpc-js'
import { client } from '../../../client'
import { Empty, UserList } from '../../stubs/protos/users_pb'

// get response from server
const stream: ClientReadableStream<UserList> = client.resultsServerStreaming(new Empty())
stream.on('data', (res: UserList): void => {
	console.log(res.toObject().usersList)
})
