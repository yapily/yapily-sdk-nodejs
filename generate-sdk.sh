#!/bin/bash

rm -rf ./sdk/
mkdir -p sdk
java -jar ./swagger-codegen-cli.jar generate -i https://api.yapily.com/docs/swagger.json -l javascript -o ./sdk/
