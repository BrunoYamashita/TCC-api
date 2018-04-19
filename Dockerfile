FROM node:latest

RUN useradd --user-group --create-home --shell /bin/false app 

ENV HOME=/home/app

COPY package.json $HOME/tg/

RUN chown -R app:app $HOME/*

USER app

WORKDIR $HOME/tg

RUN npm cache clean && npm install --silent --progress=false

USER root

COPY . $HOME/tg

RUN chown -R app:app $HOME/*

USER root

CMD ["pm2", "start"]