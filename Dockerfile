FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app/.next
WORKDIR /usr/src/app

# Set environment variable
ENV NODE_ENV production

# Install app dependencies
COPY package.json yarn.lock /usr/src/app/
RUN yarn --frozen-lockfile --ignore-optional && yarn cache clean

# Bundle app source
COPY .next /usr/src/app/.next

# Port
EXPOSE 3000

# Start
CMD [ "yarn", "start" ]
