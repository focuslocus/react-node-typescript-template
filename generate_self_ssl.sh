#!/bin/bash
echo "hello"

# Script performs steps to generate a self-signed ssl certificate
# for development purposes. Inspired by these posts: 
# https://ksearch.wordpress.com/2017/08/22/generate-and-import-a-self-signed-ssl-certificate-on-mac-osx-sierra/
# http://www.robpeck.com/2010/10/google-chrome-mac-os-x-and-self-signed-ssl-certificates/#.W6pbuhNKjBK

openssl genrsa -des3 -passout pass:x -out server.pass.key 2048

openssl rsa -passin pass:x -in server.pass.key -out server.key
 
rm server.pass.key

# The below command will prompt for a series of identifying questions.
# The only fields needed to generate the cert are 'common name' (which
# can be set to localhost) and email address
openssl req -new -key server.key -out server.csr

cat v3.ext
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names
 
[alt_names]
DNS.1 = localhost

openssl x509 -req -sha256 -extfile v3.ext -days 365 -in server.csr -signkey server.key -out server.crt
