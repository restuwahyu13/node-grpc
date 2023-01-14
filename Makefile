###########################################################
####=======================================================
#### GENERATE PROTO  FOR GRPC
####=======================================================
###########################################################
OUTPUT_DIR := ${realpath src/stubs}

.PHONY: protoc-gen-js,proto-gen-ts
protoc-gen-js:
	protoc-gen-grpc --proto_path= ./protos/*.proto \
	--js_out=import_style=commonjs,binary:${OUTPUT_DIR} \
	--grpc_out=grpc_js:${OUTPUT_DIR}

protoc-gen-ts:
	protoc-gen-grpc-ts --proto_path= ./protos/*.proto \
	--ts_out=grpc_js:${OUTPUT_DIR}