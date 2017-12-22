FROM node:boron

ARG VCS_REF
ARG BUILD_DATE

# Metadata
LABEL maintainer="brianisrunning@gmail.com"
LABEL org.label-schema.vcs-ref=$VCS_REF \
      org.label-schema.name="Ratings Web App" \
      org.label-schema.description="Simple node web app" \
      org.label-schema.vcs-url="https://github.com/chzbrgr71/steelthread" \
      org.label-schema.build-date=$BUILD_DATE \
      org.label-schema.docker.dockerfile="/rating-web/Dockerfile"

ENV GIT_SHA $VCS_REF
ENV IMAGE_BUILD_DATE $BUILD_DATE

WORKDIR /app
COPY package.json /app
RUN npm install

COPY . /app

CMD [ "npm", "run dev" ]

EXPOSE 8080