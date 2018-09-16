FROM node

LABEL maintainer="cressZZ"

ADD . /src

WORKDIR /src

RUN npm i

ENV PORT=8080

CMD [ "node", "app.js" ]



