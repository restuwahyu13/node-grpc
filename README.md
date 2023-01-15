# GRPC Tutorial

## GRPC (Google Remote Procedure Call)

adalah sebuah framework rpc yang dibuat oleh google tepatnya pada tahun 2015 dan grpc juga termasuk kedalam open source `Cloud Native Computing Fondation (CNCF)` seperti docker dan kubernetes yang sama - sama juga dibuat oleh google, konsep umum dari grpc sangat mirip dengan `rest api` atau `graphql` yang dimana digunakan untuk saling mengirim request dan response baik itu dari sisi client ataupun server, yang membedakan grpc dari `rest api` dan `graphql` adalah simplenya, grpc itu sendiri dibangun di atas protocol buffer dan http2, sehingga proses pengiriman request data menjadi lebih cepat dan efisien, dengan menggunakan protocol buffer setiap request yang dikirim dari client ke server akan berbentuk sebuah buffer, sehingga pengiriman data menjadi lebih cepat dari pada json, dikarenan buffer memiliki ukuran size yang jauh lebih kecil dari pada json dan juga lebih mudah dibaca oleh mesin, grpc juga menggunakan protofile sebagai smart contract yang digunakan untuk menjembatani interaksi antara client dan server agar bisa untuk saling mengirim request atau response.


## Protocol Buffer

adalah formating data open source yang digunakan untuk membuat serialisasi data, yang dimana anda sendiri dapat menentukan struktur data yang anda inginkan hanya dalam 1x tulis dan bisa digunakan di berbagai bahasa pemerograman jenis apapun, protocol buffer sendiri memiliki ukururan size yang jauh lebih kecil dari json dan juga lebih cepat dari pada json, info lebih detail terkait protobuf bisa cek [disini](https://developers.google.com/protocol-buffers).

+ **syntax** digunakan untuk menentukan format protocol buffer yang akan digunakan untuk menulis schema, format support yang bisa digunakan ada proto2 versi lama dan versi baru proto3
+ **package** digunakan sebagai unique identifikasi schema untuk menghindari duplikasi schema yang sama, ketika sesudah digenerate menjadi sebuah file stub
+ **import** digunakan untuk mengimport ekternal library yang akan di gunakan didalam schema
+ **service** digunakan sebagai namespace untuk mengrouping remote method yang akan digunakan
+ **rpc** digunakan untuk melabelkan remote method
+ **message** digunakan untuk menentukan request atau response untuk digunakan oleh rpc method
+ **repeated** digunakan untuk mengconvert type object to type array
+ **optional** digunakan untuk mengecualikan property schema
+ **schema**

```js
syntax = "proto3";
package users;

import "google/protobuf/any.proto";

service Users {
  rpc CreateUnary(User) returns (Response) {}
  rpc CreateClientStreaming(stream User) returns (Response) {}
  rpc CreateServerStreaming(User) returns (stream Response) {};
  rpc CreateBidirectionalStreaming(stream User) returns (stream Response) {};
}

message Empty {}

message UserId { int32 id = 1; }

message User {
  int32 id = 1;
  string name = 2;
  int32 age = 3;
}

message UserList { repeated User users = 1; }

message Response {
  int32 stat_code = 1;
  string stat_msg = 2;
  optional google.protobuf.Any data = 3
}
```

## RPC

adalah protokol yang menyediakan sebuah proses komunikasi antar proses, yang dimana mengijinkan sebuah program untuk berkomunikasi satu sama lain pada server yang berbebeda dan umumnya protokol RPC digunakan untuk membangun aplikasi client-server yang terdistribusi.

## GRPC Concept

+ ### Unary RPC

adalah sebuah konsep rpc yang dimana client hanya bisa mengirim sebuah request ke sisi server hanya 1x dalam satu waktu, begitu juga untuk sisi server dimana server hanya bisa mengirim sebuah response ke sisi client hanya 1x dalam satu waktu, tetapi jika dari sisi server mengirim multiple response seperti `Contoh Server Response Not Support` maka yang terjadi adalah, client dapat mengirim request ke sisi server dan akan di terima oleh server, tetapi client tidak akan pernah mendapatkan response balikan dari server, dikarenakan sisi client mengalami bottleneck, karena request yang di berikan oleh server tidak pernah di terima oleh client.

  ##### Contoh Client Request Support

  ```ts
  // set request from sending data into server from client
  const reqBody = new User()
  reqBody.setId(1)
  reqBody.setName('jane doe')
  reqBody.setAge(28)

  // send data from client into server and get response from server after server received data from client
  client.createUnary(reqBody, (err: ServiceError, res: Response): void => {
    if (err) console.error('Error: ', err)
    console.log(res.toObject())
  })
  ```

  ##### Contoh Server Response Support

  ```ts
  export function createUnary(call: ServerUnaryCall<User, Response>, callback: sendUnaryData<Response>): void {
    const errRes: ServerErrorResponse = { name: '', message: '' }
    const res: InstanceType<typeof Response> = new Response()

    if (!call.request.toObject()) {
      // sending response error into client, after server received request body from client
      errRes.name = 'CreateUnary'
      errRes.code = status.PERMISSION_DENIED
      errRes.message = 'Create new user failed'

      callback(errRes, null)
    } else {
      console.log(`Unary:${new Date().toISOString()} - Request body from client: `, call.request.toObject())

      // set response and send success into client, after server received request body from client
      res.setStatCode(200)
      res.setStatMsg('Create new user successfully')

      callback(null, res)
    }
  }
  ```

  ##### Contoh Client Request Not Support

  ```ts
  // set request from sending data into server from client
  const reqBody = new User()
  reqBody.setId(1)
  reqBody.setName('jane doe')
  reqBody.setAge(28)

  const reqBody2 = new User()
  reqBody2.setId(2)
  reqBody2.setName('john doe')
  reqBody2.setAge(30)

  // send data from client into server and get response from server after server received data from client
  client.createUnary(reqBody, reqBody2, (err: ServiceError, res: Response): void => {
    if (err) console.error('Error: ', err)
    console.log(res.toObject())
  })
  ```

  ##### Contoh Server Response Not Support

  ```ts
  export function createUnary(call: ServerUnaryCall<User, Response>, callback: sendUnaryData<Response>): void {
    const errRes: ServerErrorResponse = { name: '', message: '' }
    const res: InstanceType<typeof Response> = new Response()

    if (!call.request.toObject()) {
      // sending response error into client, after server received request body from client
      errRes.name = 'CreateUnary'
      errRes.code = status.PERMISSION_DENIED
      errRes.message = 'Create new user failed'

      callback(errRes, null)
    } else {
      console.log(`Unary:${new Date().toISOString()} - Request body from client: `, call.request.toObject())

      // set response and send success into client, after server received request body from client
      res.setStatCode(200)
      res.setStatMsg('Create new user successfully')
      callback(null, res)

      res.setStatCode(200)
      res.setStatMsg('Create new user successfully2')
      callback(null, res)
    }
  }
  ```


+ ### Client Streaming RPC

adalah sebuah konsep rpc yang dimana client dapat mengirim sebuah request kesisi server lebih dari 1x dalam 1 waktu secara berurutan seperti `Contoh Client Request Support 2`, dikarenakan client menggunakan event streaming untuk mengirim sebuah request data ke sisi server, tetapi sebaliknya sisi server tidak dapat mengirim sebuah response lebih dari 1x dalam 1 waktu secara berurutan, tetapi jika dari server mengirimkan multiple response seperti `Contoh Server Response Not Support` maka yang terjadi adalah, server tidak dapat menerima request yang di berikan oleh client, tetapi client dapat menerima response balikan dari sisi server, dikarenakan sisi server mengalami bottleneck, karena request yang di berikan oleh client tidak pernah di terima oleh server.


  ##### Contoh Client Request Support

  ```ts
  // get response back from server after server received data from client
  const stream: ClientWritableStream<User> = client.createClientStreaming((err: ServiceError, response: Response): void => {
    if (err) console.error('Error: ', err)
    console.log(response.toObject())
  })

  // set request data from client into server
  const reqBody = new User()
  reqBody.setId(3)
  reqBody.setName('restu wahyu saputra')
  reqBody.setAge(24)

  // send request data into server from client
  stream.write(reqBody)
  stream.end()
  ```

  ##### Contoh Client Request Support 2

  ```ts
  // get response back from server after server received data from client
  const stream: ClientWritableStream<User> = client.createClientStreaming((err: ServiceError, response: Response): void => {
    if (err) console.error('Error: ', err)
    console.log(response.toObject())
  })

  // set request data from client into server
  const reqBody = new User()
  reqBody.setId(1)
  reqBody.setName('jane doe')
  reqBody.setAge(28)

  const reqBody2 = new User()
  reqBody2.setId(2)
  reqBody2.setName('john doe')
  reqBody2.setAge(30)

  // send request data into server from client
  stream.write(reqBody)
  stream.write(reqBody2)
  stream.end()
  ```

  ##### Contoh Server Response Support

  ```ts
export function createClientStreaming(stream: ServerReadableStream<User, Response>, callback: sendUnaryData<Response>): void {
	const res: InstanceType<typeof Response> = new Response()

	stream.on('data', (chunk: User): void => {
		const res: ServerErrorResponse = { name: '', message: '' }

		if (!chunk.toObject()) {
			// set response and send error into client, after server received request body from client
			res.name = 'createClientStreaming'
			res.code = status.PERMISSION_DENIED
			res.message = 'Create new user failed'

			callback(res, null)
		}

		console.log(`ClientStreaming:${new Date().toISOString()} - Request body from client: `, chunk.toObject())
	})

	stream.on('end', (): void => {
		// set response and sending success into client, after server received request body from client
		const res: InstanceType<typeof Response> = new Response()
		res.setStatCode(200)
		res.setStatMsg('Create new user successfully')

		callback(null, res)
	})
}
  ```

  ##### Contoh Server Response Not Support

  ```ts
export function createClientStreaming(stream: ServerReadableStream<User, Response>, callback: sendUnaryData<Response>): void {
	const res: InstanceType<typeof Response> = new Response()

	stream.on('data', (chunk: User): void => {
		const res: ServerErrorResponse = { name: '', message: '' }

		if (!chunk.toObject()) {
			// set response and send error into client, after server received request body from client
			res.name = 'createClientStreaming'
			res.code = status.PERMISSION_DENIED
			res.message = 'Create new user failed'

			callback(res, null)
		}

		console.log(`ClientStreaming:${new Date().toISOString()} - Request body from client: `, chunk.toObject())
	})

	stream.on('end', (): void => {
		// set response and sending success into client, after server received request body from client
		const res: InstanceType<typeof Response> = new Response()
		res.setStatCode(200)
		res.setStatMsg('Create new user successfully')
		callback(null, res)

		res.setStatCode(200)
		res.setStatMsg('Create new user successfully2')
		callback(null, res)
	})
}
  ```

+ ### Server Streaming RPC

adalah sebuah konsep rpc yang dimana client tidak dapat mengirim sebuah request kesisi server lebih dari 1x dalam 1 waktu secara berurutan seperti `Contoh Client Request Not Support`, tetapi sebaliknya sisi server dapat mengirim sebuah response lebih dari 1x dalam 1 waktu secara berurutan seperti `Contoh Server Response Support 2`, dikarenakan server menggunakan event streaming untuk mengirim sebuah response data ke sisi client.


  ##### Contoh Client Request Support

  ```ts
  // set request data from client into server
  const reqBody = new User()
  reqBody.setId(1)
  reqBody.setName('jane doe')
  reqBody.setAge(28)

  //  send request data into server from client and get response back from server after server received data from client
  const stream: ClientReadableStream<Response> = client.createServerStreaming(reqBody)

  stream.on('data', (response: Response): void => {
    console.log(response.toObject())
  })
  ```

  ##### Contoh Server Response Support

  ```ts
  export function createServerStreaming(stream: ServerWritableStream<User, Response | ServerErrorResponse>): void {
    const res: InstanceType<typeof Response> = new Response()

    if (!stream.request.toObject()) {
      // sending response and send error into client, after server received request body from client
      res.setStatCode(400)
      res.setStatMsg('Create new user failed')

      stream.write(res)
      stream.end()
    } else {
      console.log(`ServerStreaming:${new Date().toISOString()} - Request body from client: `, stream.request.toObject())

      // set response and send error into client, after server received request body from client
      res.setStatCode(200)
      res.setStatMsg('Create new user successfully')

      stream.write(res)
      stream.end()
    }
  }
  ```

  ##### Contoh Server Response Support 2

  ```ts
  export function createServerStreaming(stream: ServerWritableStream<User, Response | ServerErrorResponse>): void {
    const res: InstanceType<typeof Response> = new Response()

    if (!stream.request.toObject()) {
      // sending response and send error into client, after server received request body from client
      res.setStatCode(400)
      res.setStatMsg('Create new user failed')

      stream.write(res)
      stream.end()
    } else {
      console.log(`ServerStreaming:${new Date().toISOString()} - Request body from client: `, stream.request.toObject())

      // set response and send error into client, after server received request body from client
      res.setStatCode(200)
      res.setStatMsg('Create new user successfully')
      stream.write(res)

      res.setStatCode(200)
      res.setStatMsg('Create new user successfully2')
      stream.write(res)

      stream.end()
    }
  }
  ```

  ##### Contoh Client Request Not Support

  ```ts
  // set request data from client into server
  const reqBody = new User()
  reqBody.setId(1)
  reqBody.setName('jane doe')
  reqBody.setAge(28)

  const reqBody2 = new User()
  reqBody.setId(2)
  reqBody.setName('john doe')
  reqBody.setAge(30)


  //  send request data into server from client and get response back from server after server received data from client
  const stream: ClientReadableStream<Response> = client.createServerStreaming(reqBody, reqBody2)

  stream.on('data', (response: Response): void => {
    console.log(response.toObject())
  })
  ```

+ ### Bindirectional Streaming RPC

adalah sebuah konsep rpc yang dimana client dapat mengirim sebuah request kesisi server lebih dari 1x dalam 1 waktu secara berurutan seperti `Contoh Client Request Support 2` dan sisi server juga dapat mengirim sebuah response lebih dari 1x dalam 1 waktu secara berurutan seperti `Contoh Server Response Support 2`, dikarenakan client dan server menggunakan event streaming untuk mengirim sebuah request dan response baik itu ke sisi client atau server.


  ##### Contoh Client Request Support

  ```ts
const stream: ClientDuplexStream<User, Response> = client.createBidirectionalStreaming()

//  get response from server, after server received data from client
stream.on('data', (response: Response) => {
	console.log(response.toObject())
})

// set request from sending data into server from client
const reqBody = new User()
reqBody.setId(1)
reqBody.setName('jane doe')
reqBody.setAge(28)

// send data from client into server
stream.write(reqBody)
stream.end()
```

  ##### Contoh Client Request Support 2

  ```ts
  const stream: ClientDuplexStream<User, Response> = client.createBidirectionalStreaming()

  //  get response from server, after server received data from client
  stream.on('data', (response: Response) => {
    console.log(response.toObject())
  })

  // set request from sending data into server from client
  const reqBody = new User()
  reqBody.setId(1)
  reqBody.setName('jane doe')
  reqBody.setAge(28)

  const reqBody2 = new User()
  reqBody2.setId(2)
  reqBody2.setName('john doe')
  reqBody2.setAge(30)

  // send data from client into server
  stream.write(reqBody)
  stream.write(reqBody2)
  stream.end()
  ```

  ##### Contoh Server Response Support

  ```ts
  export function createBidirectionalStreaming(stream: ServerDuplexStream<User, Response | ServerErrorResponse>) {
    const res: InstanceType<typeof Response> = new Response()

    stream.on('data', (chunk: User) => {
      if (!chunk.toObject()) {
        // set response and send error into client, after server received request body from client
        const res: InstanceType<typeof Response> = new Response()
        res.setStatCode(400)
        res.setStatMsg('Create new user failed')

        stream.write(res)
        stream.end(res)
      }

      console.log(`BidirectionalStreaming:${new Date().toISOString()} - Request body from client: `, chunk.toObject())
    })

    // set response and sending success into client, after server received request body from client
    res.setStatCode(200)
    res.setStatMsg('Create new user successfully')

    stream.write(res)
    stream.end()
  }
  ```

##### Contoh Server Response Support 2

  ```ts
  export function createBidirectionalStreaming(stream: ServerDuplexStream<User, Response | ServerErrorResponse>) {
    const res: InstanceType<typeof Response> = new Response()

    stream.on('data', (chunk: User) => {
      if (!chunk.toObject()) {
        // set response and send error into client, after server received request body from client
        const res: InstanceType<typeof Response> = new Response()
        res.setStatCode(400)
        res.setStatMsg('Create new user failed')

        stream.write(res)
        stream.end(res)
      }

      console.log(`BidirectionalStreaming:${new Date().toISOString()} - Request body from client: `, chunk.toObject())
    })

    // set response and sending success into client, after server received request body from client
    res.setStatCode(200)
    res.setStatMsg('Create new user successfully')
    stream.write(res)

    res.setStatCode(200)
    res.setStatMsg('Create new user successfully2')
    stream.write(res)

    stream.end()
  }
  ```

## Transform GRPC Response

jika anda ingin menampilkan data ke format array, anda harus mentransform data tersebut terlebih dahulu, kurang lebih caranya itu seperti ini jika anda menggunakan node.js

+ Server Response

```ts
function transfromRequest({ id, age, name }: User.AsObject): User {
	const user = new User()
	user.setId(id)
	user.setName(name)
	user.setAge(age)

	return user
}

const users: User[] = [
  { id: 1, name: 'Jane Doe', age: 28 }
	{ id: 2, name: 'John Doe', age: 30 },
].map(transfromRequest)

export function resultsUnary(call: ServerUnaryCall<Empty, Empty>, callback: sendUnaryData<UserList>): void {
	// set response and send data into client
	const setUserList = new UserList()
	setUserList.setUsersList(users)

	callback(null, setUserList)
}
```

+ Client Response

```ts
// get response from server
client.resultsUnary(new Empty(), (err: ServiceError, response: UserList): void => {
	if (err) console.error('Error: ', err)
	console.log(response.toObject().usersList)
})
```

## Important Before Use GRPC

1. dibutuhkan fundamental konsep terkait grpc
2. dibutuhkan fundamental konsep terkait protobuffer
3. dibutuhkan pengetahuan terkait bahasa pemerograman apa yang akan digunakan
4. jika grpc server atau client tidak menggunakan remote method yang di daftarkan di protofile, maka yang terjadi adalah client atau server tidak dapat saling mengirim request atau response.
5. jika grpc server atau client mati, maka yang terjadi adalah client atau server tidak dapat saling mengirim request atau response, dikarenakan server atau client crash.
6. jika grpc server atau client berbeda port, maka yang terjadi adalah client atau server tidak dapat saling mengirim request dan response, dikarenakan tidak saling terhubung satu sama lain.

## Example Code

+ [go microservices](https://github.com/restuwahyu13/go-microservices)
+ [express grpc](https://github.com/restuwahyu13/express-grpc-rest-api)