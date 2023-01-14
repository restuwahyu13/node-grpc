// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protos_users_pb = require('../protos/users_pb.js');

function serialize_users_Response(arg) {
  if (!(arg instanceof protos_users_pb.Response)) {
    throw new Error('Expected argument of type users.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_Response(buffer_arg) {
  return protos_users_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_User(arg) {
  if (!(arg instanceof protos_users_pb.User)) {
    throw new Error('Expected argument of type users.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_User(buffer_arg) {
  return protos_users_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsersService = exports.UsersService = {
  createUnary: {
    path: '/users.Users/CreateUnary',
    requestStream: false,
    responseStream: false,
    requestType: protos_users_pb.User,
    responseType: protos_users_pb.Response,
    requestSerialize: serialize_users_User,
    requestDeserialize: deserialize_users_User,
    responseSerialize: serialize_users_Response,
    responseDeserialize: deserialize_users_Response,
  },
  createClientStreaming: {
    path: '/users.Users/CreateClientStreaming',
    requestStream: true,
    responseStream: false,
    requestType: protos_users_pb.User,
    responseType: protos_users_pb.Response,
    requestSerialize: serialize_users_User,
    requestDeserialize: deserialize_users_User,
    responseSerialize: serialize_users_Response,
    responseDeserialize: deserialize_users_Response,
  },
  createServerStreaming: {
    path: '/users.Users/CreateServerStreaming',
    requestStream: false,
    responseStream: true,
    requestType: protos_users_pb.User,
    responseType: protos_users_pb.Response,
    requestSerialize: serialize_users_User,
    requestDeserialize: deserialize_users_User,
    responseSerialize: serialize_users_Response,
    responseDeserialize: deserialize_users_Response,
  },
  createBidirectionalStreaming: {
    path: '/users.Users/CreateBidirectionalStreaming',
    requestStream: true,
    responseStream: true,
    requestType: protos_users_pb.User,
    responseType: protos_users_pb.Response,
    requestSerialize: serialize_users_User,
    requestDeserialize: deserialize_users_User,
    responseSerialize: serialize_users_Response,
    responseDeserialize: deserialize_users_Response,
  },
};

exports.UsersClient = grpc.makeGenericClientConstructor(UsersService);
