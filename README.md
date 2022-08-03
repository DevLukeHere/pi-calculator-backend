# Setting Up Project Locally

To run the project locally on your machine please follow these steps:

1. Create a .env file in the root of the project with the following inside: 

   PORT=3001
   MONGO_URI=mongodb+srv://luke:<password>@picalculatorapp.ft5q8.mongodb.net/?retryWrites=true&w=majority

The password can be found in the SECRETS.md file.

2. Install node v16.16 LTS from https://nodejs.org/en/

3. Run "npm install" to install all dependencies and packages for this project.

4. Run "npm install --global nodemon" to install nodemon. 

5. Run "npm run dev" which runs the app in development mode. Ensure that it is running on port 3001.

6. Ensure that the message "connected to db and listening on port 3001" is displayed in the terminal.

## Application Improvements

If given the opportunity to improve on this application, these are some of the things I can suggest:

1. Add the functionality for the value of Pi to be reset to zero.

2. Use a more accurate algorithm to calculate the value of Pi.

3. Host this application on the cloud using Heroku (or something similar).