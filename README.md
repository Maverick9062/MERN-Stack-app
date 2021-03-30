# MERN-Stack-app
Simple Registration Form


This project uses the following technologies:

- [React](https://reactjs.org) and [React Router](https://reacttraining.com/react-router/) for frontend
- [Express](http://expressjs.com/) and [Node](https://nodejs.org/en/) for the backend
- [MongoDB](https://www.mongodb.com/) for the database


## Quick Start

```
// Install dependencies for server & client
npm install && npm run client-install

// Run client & server with concurrently
npm run dev

// Required mongo db altas storage id(it's freee to signup and use)

// Server runs on http://localhost:3000 and client on http://localhost:3000

```


## Steps to run this on localhost

 
- Create an account on mongo db atlas and inside cluster click on Collections
- And create a database called [Details]
- Go to Network access,go to 'Add Ip Address'
- Click on [Allow access from anywhere] and then click 'confirm'
- Open your Visaul Studio Code on your PC and go to the directory where you have download the project file in it.
- Create a Folder name "Project" using command "mkdir Project"
- Create a React app using command "create-react app client"
- After it is created delete all the files inside it and paste all the files from the github which you have download
- Inside Project,go to client by changing directory by vscode(cd client)
- Now,Open two Terminals(One for client and another for server)
- For Client,use [npm start] to run the application in localhost
- For Server,go to server folder inside client folder by same (cd server)
- And then use [nodemon server.js] to run the server in localhost


## Screenshots of the application 
- Aftering creating account on mongo db atlas create a database named "Deatils"
- Then click on collections where the database is stored
- Then
![Screenshot (114)](https://user-images.githubusercontent.com/59537068/113046895-3db4b980-91be-11eb-9449-5f1d05c3ec61.png)

# Go to Network Access then Allow Access from Anywhere after that just click 'Confirm'

![Screenshot (115)](https://user-images.githubusercontent.com/59537068/113047194-a56b0480-91be-11eb-8dcb-22a2b79229ad.png)

# It will show you "Active" with IP Address "0.0.0.0/0"

![Screenshot (117)](https://user-images.githubusercontent.com/59537068/113047445-f4189e80-91be-11eb-9ff9-8414dbfc9e4f.png)

# At VS Code,Open two terminals One for Client and another for Server 

![Screenshot (118)](https://user-images.githubusercontent.com/59537068/113047528-0e527c80-91bf-11eb-8993-e8f29bd68725.png)

# After you click "npm start" in client folder,It will create a localhost which has port no 3000

![Screenshot (119)](https://user-images.githubusercontent.com/59537068/113047730-52458180-91bf-11eb-9dfc-e8e4adbf5d44.png)

# Enter your Details and click "Submit" button

![Screenshot (120)](https://user-images.githubusercontent.com/59537068/113047811-67221500-91bf-11eb-9a1c-2848176650de.png)

# It will Show "Form SuccessFully Submitted" and the data will be store in the database called "Details" in your mongo db atlas account

![Screenshot (121)](https://user-images.githubusercontent.com/59537068/113048153-d566d780-91bf-11eb-808e-475079b99ae9.png)

# In your mongo db atlas, database "details" has received a data that you have put on the Accounts Head Form 

![Screenshot (122)](https://user-images.githubusercontent.com/59537068/113048388-1c54cd00-91c0-11eb-83f1-327f62d071ec.png)

# One More Test Cases

![Screenshot (123)](https://user-images.githubusercontent.com/59537068/113048471-31c9f700-91c0-11eb-8491-3444949121e4.png)


![Screenshot (124)](https://user-images.githubusercontent.com/59537068/113048769-866d7200-91c0-11eb-94e1-349f7c28c7da.png)


# Application Running Successfully

![Screenshot (125)](https://user-images.githubusercontent.com/59537068/113048888-a3a24080-91c0-11eb-9ad6-ec1a9f96d293.png)











