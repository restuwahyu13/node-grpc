import { ServerWritableStream } from '@grpc/grpc-js'
import { Empty, UserList } from '../../stubs/protos/users_pb'
import { users } from '../../utils/fakeData'

export function resultsServerStreaming(stream: ServerWritableStream<Empty, UserList>): void {
	// set response and send data into client
	const setUserList = new UserList()
	setUserList.setUsersList(users)

	stream.write(setUserList)
	stream.end()
}
