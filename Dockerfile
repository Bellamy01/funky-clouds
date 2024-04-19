# pull base image
FROM node:18.20-buster-slim

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# default to port 19006 for node, and 19001 and 19002 (tests) for debug
ARG PORT=8081
ENV PORT $PORT
EXPOSE 19006 19001 19002
# add in your own IP that was assigned by EXPO for your local machine
ENV REACT_NATIVE_PACKAGER_HOSTNAME="10.5.222.198"

# Install global packages using Homebrew
RUN /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
RUN echo 'export PATH=/opt/homebrew/bin:$PATH' >> ~/.zshrc
RUN /bin/bash -c "source ~/.zshrc"

# Install npm@latest and expo-cli@latest globally
RUN npm install --unsafe-perm -g npm@latest expo-cli@latest

# Install qemu-user-static
RUN apt-get update && apt-get install -y qemu-user-static

# Install @expo/ngrok
RUN npm install @expo/ngrok

# Install dependencies first, in a different location for easier app bind mounting for local development
# due to default /opt permissions we have to create the dir with root and change perms
RUN mkdir /opt/funky-clouds && chown root:root /opt/funky-clouds  # Use root user for folder creation (if needed by your system)
WORKDIR /opt/funky-clouds
ENV PATH /opt/funky-clouds/.bin:$PATH

# Switch back to a non-root user for the remaining steps
USER node

COPY package.json package-lock.json ./

# copy in our source code last, as it changes the most
WORKDIR /opt/funky-clouds
# for development, we bind mount volumes; comment out for production
COPY . /opt/funky-clouds/


CMD ["npx","expo", "start"]
