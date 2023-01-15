// package: users
// file: protos/users.proto

import * as grpc from '@grpc/grpc-js';
import * as protos_users_pb from '../protos/users_pb';

interface IUsersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createUnary: IUsersService_ICreateUnary;
  createClientStreaming: IUsersService_ICreateClientStreaming;
  createServerStreaming: IUsersService_ICreateServerStreaming;
  createBidirectionalStreaming: IUsersService_ICreateBidirectionalStreaming;
  resultsUnary: IUsersService_IResultsUnary;
  resultsServerStreaming: IUsersService_IResultsServerStreaming;
  resultUnary: IUsersService_IResultUnary;
  resultClientStreaming: IUsersService_IResultClientStreaming;
  resultServerStreaming: IUsersService_IResultServerStreaming;
  resultBidirectionalStreaming: IUsersService_IResultBidirectionalStreaming;
}

interface IUsersService_ICreateUnary extends grpc.MethodDefinition<protos_users_pb.User, protos_users_pb.Response> {
  path: '/users.Users/CreateUnary'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<protos_users_pb.User>;
  requestDeserialize: grpc.deserialize<protos_users_pb.User>;
  responseSerialize: grpc.serialize<protos_users_pb.Response>;
  responseDeserialize: grpc.deserialize<protos_users_pb.Response>;
}

interface IUsersService_ICreateClientStreaming extends grpc.MethodDefinition<protos_users_pb.User, protos_users_pb.Response> {
  path: '/users.Users/CreateClientStreaming'
  requestStream: true
  responseStream: false
  requestSerialize: grpc.serialize<protos_users_pb.User>;
  requestDeserialize: grpc.deserialize<protos_users_pb.User>;
  responseSerialize: grpc.serialize<protos_users_pb.Response>;
  responseDeserialize: grpc.deserialize<protos_users_pb.Response>;
}

interface IUsersService_ICreateServerStreaming extends grpc.MethodDefinition<protos_users_pb.User, protos_users_pb.Response> {
  path: '/users.Users/CreateServerStreaming'
  requestStream: false
  responseStream: true
  requestSerialize: grpc.serialize<protos_users_pb.User>;
  requestDeserialize: grpc.deserialize<protos_users_pb.User>;
  responseSerialize: grpc.serialize<protos_users_pb.Response>;
  responseDeserialize: grpc.deserialize<protos_users_pb.Response>;
}

interface IUsersService_ICreateBidirectionalStreaming extends grpc.MethodDefinition<protos_users_pb.User, protos_users_pb.Response> {
  path: '/users.Users/CreateBidirectionalStreaming'
  requestStream: true
  responseStream: true
  requestSerialize: grpc.serialize<protos_users_pb.User>;
  requestDeserialize: grpc.deserialize<protos_users_pb.User>;
  responseSerialize: grpc.serialize<protos_users_pb.Response>;
  responseDeserialize: grpc.deserialize<protos_users_pb.Response>;
}

interface IUsersService_IResultsUnary extends grpc.MethodDefinition<protos_users_pb.Empty, protos_users_pb.UserList> {
  path: '/users.Users/ResultsUnary'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<protos_users_pb.Empty>;
  requestDeserialize: grpc.deserialize<protos_users_pb.Empty>;
  responseSerialize: grpc.serialize<protos_users_pb.UserList>;
  responseDeserialize: grpc.deserialize<protos_users_pb.UserList>;
}

interface IUsersService_IResultsServerStreaming extends grpc.MethodDefinition<protos_users_pb.Empty, protos_users_pb.UserList> {
  path: '/users.Users/ResultsServerStreaming'
  requestStream: false
  responseStream: true
  requestSerialize: grpc.serialize<protos_users_pb.Empty>;
  requestDeserialize: grpc.deserialize<protos_users_pb.Empty>;
  responseSerialize: grpc.serialize<protos_users_pb.UserList>;
  responseDeserialize: grpc.deserialize<protos_users_pb.UserList>;
}

interface IUsersService_IResultUnary extends grpc.MethodDefinition<protos_users_pb.UserId, protos_users_pb.User> {
  path: '/users.Users/ResultUnary'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<protos_users_pb.UserId>;
  requestDeserialize: grpc.deserialize<protos_users_pb.UserId>;
  responseSerialize: grpc.serialize<protos_users_pb.User>;
  responseDeserialize: grpc.deserialize<protos_users_pb.User>;
}

interface IUsersService_IResultClientStreaming extends grpc.MethodDefinition<protos_users_pb.UserId, protos_users_pb.User> {
  path: '/users.Users/ResultClientStreaming'
  requestStream: true
  responseStream: false
  requestSerialize: grpc.serialize<protos_users_pb.UserId>;
  requestDeserialize: grpc.deserialize<protos_users_pb.UserId>;
  responseSerialize: grpc.serialize<protos_users_pb.User>;
  responseDeserialize: grpc.deserialize<protos_users_pb.User>;
}

interface IUsersService_IResultServerStreaming extends grpc.MethodDefinition<protos_users_pb.UserId, protos_users_pb.User> {
  path: '/users.Users/ResultServerStreaming'
  requestStream: false
  responseStream: true
  requestSerialize: grpc.serialize<protos_users_pb.UserId>;
  requestDeserialize: grpc.deserialize<protos_users_pb.UserId>;
  responseSerialize: grpc.serialize<protos_users_pb.User>;
  responseDeserialize: grpc.deserialize<protos_users_pb.User>;
}

interface IUsersService_IResultBidirectionalStreaming extends grpc.MethodDefinition<protos_users_pb.UserId, protos_users_pb.User> {
  path: '/users.Users/ResultBidirectionalStreaming'
  requestStream: true
  responseStream: true
  requestSerialize: grpc.serialize<protos_users_pb.UserId>;
  requestDeserialize: grpc.deserialize<protos_users_pb.UserId>;
  responseSerialize: grpc.serialize<protos_users_pb.User>;
  responseDeserialize: grpc.deserialize<protos_users_pb.User>;
}

export const UsersService: IUsersService;
export interface IUsersServer extends grpc.UntypedServiceImplementation {
  createUnary: grpc.handleUnaryCall<protos_users_pb.User, protos_users_pb.Response>;
  createClientStreaming: grpc.handleClientStreamingCall<protos_users_pb.User, protos_users_pb.Response>;
  createServerStreaming: grpc.handleServerStreamingCall<protos_users_pb.User, protos_users_pb.Response>;
  createBidirectionalStreaming: grpc.handleBidiStreamingCall<protos_users_pb.User, protos_users_pb.Response>;
  resultsUnary: grpc.handleUnaryCall<protos_users_pb.Empty, protos_users_pb.UserList>;
  resultsServerStreaming: grpc.handleServerStreamingCall<protos_users_pb.Empty, protos_users_pb.UserList>;
  resultUnary: grpc.handleUnaryCall<protos_users_pb.UserId, protos_users_pb.User>;
  resultClientStreaming: grpc.handleClientStreamingCall<protos_users_pb.UserId, protos_users_pb.User>;
  resultServerStreaming: grpc.handleServerStreamingCall<protos_users_pb.UserId, protos_users_pb.User>;
  resultBidirectionalStreaming: grpc.handleBidiStreamingCall<protos_users_pb.UserId, protos_users_pb.User>;
}

export interface IUsersClient {
  createUnary(request: protos_users_pb.User, callback: (error: grpc.ServiceError | null, response: protos_users_pb.Response) => void): grpc.ClientUnaryCall;
  createUnary(request: protos_users_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_users_pb.Response) => void): grpc.ClientUnaryCall;
  createUnary(request: protos_users_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_users_pb.Response) => void): grpc.ClientUnaryCall;
  createClientStreaming(callback: (error: grpc.ServiceError | null, response: protos_users_pb.Response) => void): grpc.ClientWritableStream<protos_users_pb.User>;
  createClientStreaming(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_users_pb.Response) => void): grpc.ClientWritableStream<protos_users_pb.User>;
  createClientStreaming(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_users_pb.Response) => void): grpc.ClientWritableStream<protos_users_pb.User>;
  createClientStreaming(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_users_pb.Response) => void): grpc.ClientWritableStream<protos_users_pb.User>;
  createServerStreaming(request: protos_users_pb.User, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<protos_users_pb.Response>;
  createServerStreaming(request: protos_users_pb.User, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<protos_users_pb.Response>;
  createBidirectionalStreaming(): grpc.ClientDuplexStream<protos_users_pb.User, protos_users_pb.Response>;
  createBidirectionalStreaming(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<protos_users_pb.User, protos_users_pb.Response>;
  createBidirectionalStreaming(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<protos_users_pb.User, protos_users_pb.Response>;
  resultsUnary(request: protos_users_pb.Empty, callback: (error: grpc.ServiceError | null, response: protos_users_pb.UserList) => void): grpc.ClientUnaryCall;
  resultsUnary(request: protos_users_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_users_pb.UserList) => void): grpc.ClientUnaryCall;
  resultsUnary(request: protos_users_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_users_pb.UserList) => void): grpc.ClientUnaryCall;
  resultsServerStreaming(request: protos_users_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<protos_users_pb.UserList>;
  resultsServerStreaming(request: protos_users_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<protos_users_pb.UserList>;
  resultUnary(request: protos_users_pb.UserId, callback: (error: grpc.ServiceError | null, response: protos_users_pb.User) => void): grpc.ClientUnaryCall;
  resultUnary(request: protos_users_pb.UserId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_users_pb.User) => void): grpc.ClientUnaryCall;
  resultUnary(request: protos_users_pb.UserId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_users_pb.User) => void): grpc.ClientUnaryCall;
  resultClientStreaming(callback: (error: grpc.ServiceError | null, response: protos_users_pb.User) => void): grpc.ClientWritableStream<protos_users_pb.UserId>;
  resultClientStreaming(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_users_pb.User) => void): grpc.ClientWritableStream<protos_users_pb.UserId>;
  resultClientStreaming(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_users_pb.User) => void): grpc.ClientWritableStream<protos_users_pb.UserId>;
  resultClientStreaming(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_users_pb.User) => void): grpc.ClientWritableStream<protos_users_pb.UserId>;
  resultServerStreaming(request: protos_users_pb.UserId, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<protos_users_pb.User>;
  resultServerStreaming(request: protos_users_pb.UserId, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<protos_users_pb.User>;
  resultBidirectionalStreaming(): grpc.ClientDuplexStream<protos_users_pb.UserId, protos_users_pb.User>;
  resultBidirectionalStreaming(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<protos_users_pb.UserId, protos_users_pb.User>;
  resultBidirectionalStreaming(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<protos_users_pb.UserId, protos_users_pb.User>;
}

export class UsersClient extends grpc.Client implements IUsersClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public createUnary(request: protos_users_pb.User, callback: (error: grpc.ServiceError | null, response: protos_users_pb.Response) => void): grpc.ClientUnaryCall;
  public createUnary(request: protos_users_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_users_pb.Response) => void): grpc.ClientUnaryCall;
  public createUnary(request: protos_users_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_users_pb.Response) => void): grpc.ClientUnaryCall;
  public createClientStreaming(callback: (error: grpc.ServiceError | null, response: protos_users_pb.Response) => void): grpc.ClientWritableStream<protos_users_pb.User>;
  public createClientStreaming(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_users_pb.Response) => void): grpc.ClientWritableStream<protos_users_pb.User>;
  public createClientStreaming(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_users_pb.Response) => void): grpc.ClientWritableStream<protos_users_pb.User>;
  public createClientStreaming(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_users_pb.Response) => void): grpc.ClientWritableStream<protos_users_pb.User>;
  public createServerStreaming(request: protos_users_pb.User, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<protos_users_pb.Response>;
  public createServerStreaming(request: protos_users_pb.User, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<protos_users_pb.Response>;
  public createBidirectionalStreaming(): grpc.ClientDuplexStream<protos_users_pb.User, protos_users_pb.Response>;
  public createBidirectionalStreaming(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<protos_users_pb.User, protos_users_pb.Response>;
  public createBidirectionalStreaming(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<protos_users_pb.User, protos_users_pb.Response>;
  public resultsUnary(request: protos_users_pb.Empty, callback: (error: grpc.ServiceError | null, response: protos_users_pb.UserList) => void): grpc.ClientUnaryCall;
  public resultsUnary(request: protos_users_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_users_pb.UserList) => void): grpc.ClientUnaryCall;
  public resultsUnary(request: protos_users_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_users_pb.UserList) => void): grpc.ClientUnaryCall;
  public resultsServerStreaming(request: protos_users_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<protos_users_pb.UserList>;
  public resultsServerStreaming(request: protos_users_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<protos_users_pb.UserList>;
  public resultUnary(request: protos_users_pb.UserId, callback: (error: grpc.ServiceError | null, response: protos_users_pb.User) => void): grpc.ClientUnaryCall;
  public resultUnary(request: protos_users_pb.UserId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_users_pb.User) => void): grpc.ClientUnaryCall;
  public resultUnary(request: protos_users_pb.UserId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_users_pb.User) => void): grpc.ClientUnaryCall;
  public resultClientStreaming(callback: (error: grpc.ServiceError | null, response: protos_users_pb.User) => void): grpc.ClientWritableStream<protos_users_pb.UserId>;
  public resultClientStreaming(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_users_pb.User) => void): grpc.ClientWritableStream<protos_users_pb.UserId>;
  public resultClientStreaming(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_users_pb.User) => void): grpc.ClientWritableStream<protos_users_pb.UserId>;
  public resultClientStreaming(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_users_pb.User) => void): grpc.ClientWritableStream<protos_users_pb.UserId>;
  public resultServerStreaming(request: protos_users_pb.UserId, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<protos_users_pb.User>;
  public resultServerStreaming(request: protos_users_pb.UserId, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<protos_users_pb.User>;
  public resultBidirectionalStreaming(): grpc.ClientDuplexStream<protos_users_pb.UserId, protos_users_pb.User>;
  public resultBidirectionalStreaming(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<protos_users_pb.UserId, protos_users_pb.User>;
  public resultBidirectionalStreaming(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<protos_users_pb.UserId, protos_users_pb.User>;
}

