// package: users
// file: protos/users.proto

import * as grpc from '@grpc/grpc-js';
import * as protos_users_pb from '../protos/users_pb';

interface IUsersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createUnary: IUsersService_ICreateUnary;
  createClientStreaming: IUsersService_ICreateClientStreaming;
  createServerStreaming: IUsersService_ICreateServerStreaming;
  createBidirectionalStreaming: IUsersService_ICreateBidirectionalStreaming;
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

export const UsersService: IUsersService;
export interface IUsersServer extends grpc.UntypedServiceImplementation {
  createUnary: grpc.handleUnaryCall<protos_users_pb.User, protos_users_pb.Response>;
  createClientStreaming: grpc.handleClientStreamingCall<protos_users_pb.User, protos_users_pb.Response>;
  createServerStreaming: grpc.handleServerStreamingCall<protos_users_pb.User, protos_users_pb.Response>;
  createBidirectionalStreaming: grpc.handleBidiStreamingCall<protos_users_pb.User, protos_users_pb.Response>;
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
}

