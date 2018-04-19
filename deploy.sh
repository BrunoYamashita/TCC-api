#!/bin/bash

# excluir o container
docker rm -f tg_api tg_db

# excluir a imagem
docker rmi -f tg/tg_api

#buildar a imagem
docker build -t tg/tg_api .

#starta banco
docker run --restart=always -d -p 27017:27017 \
     -v /data/db:/data/db \
     --name tg_db mongo \
     --storageEngine wiredTiger --auth

#starta app
docker run --restart=always -d -p 3000:3000 -p 443:3001 \
    --link tg_db:tg_db \
    -e NODE_ENV=production \
    -e MONGO_LOGIN=tg!user!13 \
    -e MONGO_PWD=tg!pass!13 \
    -e MONGO_IP=tg_db \
    --name tg_api tg/tg_api

