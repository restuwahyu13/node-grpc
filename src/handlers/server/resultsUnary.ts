import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js'
import { Empty, UserList } from '../../stubs/protos/users_pb'
import { users } from '../../utils/fakeData'

export function resultsUnary(call: ServerUnaryCall<Empty, Empty>, callback: sendUnaryData<UserList>): void {
	// set response and send data into client
	const setUserList = new UserList()
	setUserList.setUsersList(users)

	callback(null, setUserList)
}
