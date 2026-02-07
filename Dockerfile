# WRITE THE IMAGE lightwait
FROM node:18-alpine


# Set directory
WORKDIR /app


# COpy dependency
COPY package*.json ./

# Install dependencies
RUN npm install
#RUN npm install nodemon
# Copy the application
COPY . .

#Expos port number

EXPOSE 3000


# run app

CMD ["npm" ,"start"]
