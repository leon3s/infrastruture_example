# stage 1 - Build our application
# From the latest nodejs lts version
FROM node:18.14.2-alpine AS BUILDER

# Create our app folder
RUN mkdir /app
# Set is as cwd
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+) doing this will cache this action untill package.json or package-lock.json is modified
COPY --chown=node package*.json ./

# Install dependencies
RUN npm install

# Bundle app source code
COPY --chown=node . .
RUN npm run build

# stage 2 - Create app image
# From latest nginx version on alpine to have a small image
FROM nginx:1.23.3-alpine

# Copy our build directory
COPY --from=BUILDER /app/build /app

# Copy our default nginx config
COPY ./server.nginx /etc/nginx/conf.d/default.conf
