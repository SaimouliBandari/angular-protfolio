#!bin/bash
echo "Enter the port number to kill the server : "
read port
FILES=`lsof -i tcp:$port`
ARR=($FILES)
PORT=${ARR[10]}
if kill -9 ${ARR[10]}; then
    echo "Successfully killed the server running on port $PORT by ${ARR[9]}"
else
    echo 'Failed to kill the server'
fi
