# **CRUD Application's Backend using NodeJS**

This is the backend directory of our CRUD-Full-Stack-Application where we can find the code files & commits' details related to the backend part of this CRUD-Full-Stack-Application.

## **List of Contents**

1. [Code Walkthrough & Commits( to make the code easy to understand)](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/tree/Main/fullstack-app-backend#code-walkthrough--commits-to-make-the-code-easy-to-understand)

1. [Tech Stack used](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/tree/Main/fullstack-app-backend#tech-stack-used)

1. [Instructions to run this application successfully on our local system](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/tree/Main/fullstack-app-backend#please-follow-below-instructions-to-run-this-application-successfully-on-our-local-system)

1. [Special Notes: Intro to Postman](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/tree/Main/fullstack-app-backend#special-notes-intro-to-postman)

    - [About Postman](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/tree/Main/fullstack-app-backend#about-postman)

    - [Create Collection in Postman](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/tree/Main/fullstack-app-backend#create-collection-in-postman)

    - [POST/PUT Request in Postman](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/tree/Main/fullstack-app-backend#postput-request-in-postman)

    - [Environment Variables in Postman](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/tree/Main/fullstack-app-backend#environment-variables-in-postman)

#

## **Code Walkthrough & Commits( to make the code easy to understand)**

We can go through below commits to understand various parts/concepts of our backend code:

1. Part-01: C in CRUD- "Creation" of new record in DB [Click to see the Code changes](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/commit/1a94c934077fdb3d1656499154bc7e13007ae673)

1. Part-02: R in CRUD- "Read" or fetch all/some records from DB [Click to see the Code changes](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/commit/3cbd72b801eb7d18d71e71c1426e19f1cf156190)

1. Part-03: U in CRUD- "Update" or edit a record in DB [Click to see the Code changes](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/commit/c0c4bf79445b4efb586b0171c9ed096f4fbd39ff)

1. Part-04: D in CRUD- "Delete" a record from DB [Click to see the Code changes](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/commit/3e24f9bb83e0647cf313fc7b8f8252410178746f)

#

## **Tech Stack used:**

1. MongoDB, NodeJS, ExpressJS, JavaScript ES6

1. npm packages used ( can see them in package.json file also): 

    "dependencies": {

        "dotenv": "^16.0.3",

        "express": "^4.18.2",

        "mongoose": "^6.8.3"

    },

    "devDependencies": {

        "nodemon": "^2.0.20"

    }

1. We also need:
    
    1. NodeJS >= v16

    1. NPM >= 8

    1. Create/Login to your MongoDB Atlas account, Create a Project and a Cluster, then get the **MongoDB Compass Connection String** under **Deployment > Database > Connect** 

[🔼 Back to top](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/tree/Main/fullstack-app-backend#crud-applications-backend-using-nodejs)
#

## **Please follow below instructions to run this application successfully on our local system:**

1.  We need to download this repository and go to **fullstack-app-backend** project directory in terminal on our local system.

1.  How to run this code:

    1. On Terminal, under this **fullstack-app-backend** project directory, to install dependencies, run command: **npm install**

    1. We need to create a file within our **fullstack-app-backend** Project directory with this name- **.env** and add following Environment Variables in it:
        ```
        
        PORT=4000
        MONGO_DB_URL= <MongoDB Compass Connection String comes here>

        ```
        **NOTE:** We can keep the connection string and secret code without quotes. Also, we need to add this **.env** file's name in our **.gitignore** file to avoid pushing it to our remote repository here at Github.

    1. Finally, to run the backend application in dev mode on localhost, run command: **npm run dev**

    1. Now, the application is ready to be tested on Postman OR on our Frontend.

    **NOTE:** If you want to test the whole Fullstack app on your localhost, then please note that we need to have both the frontend & backend applications running at the same time but separately on separate Terminal windows and Ports(in our case, Port:3000 for Frontend & Port:4000 for Backend).

[🔼 Back to top](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/tree/Main/fullstack-app-backend#crud-applications-backend-using-nodejs)
#  

## Special Notes: **Intro to Postman**

### **About Postman** 
    
   > Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.

### **Create Collection in Postman**

   > Click on collections icon > click on + icon > give a name to new collection > Hover over the new collection name and click on ... icon > select "New Request" > Give a name to this New Request( like Home, Dashboard, etc.) > Select the Request type( like GET, POST, PUT, DELETE, etc) > Give a link/route to this New Request( like http://localhost:3000/dashboard) > Click on Save to add this Request to our collection for future purposes. 

    
   > Similarly, we can create other Requests under our collection for each route of our backend application.
    
   > Note that if our request type is GET we can simply click on SEND to get the response from our backend application. 
   
   > Note that if our request type is DELETE we can provide the PARAMS(like userID, productID, etc) at the end of our link/route 

   > But, if our request type is POST/PUT then please read below sub-topic.

### **POST/PUT Request in Postman**

   > In case the Request Type is POST/PUT, then we may need to provide some info( like email & password for login as an example) in body of the Request, and for that, in our case, we need to provide this required info in json format by clicking on the Request's Name under the Collection Name, then below the Request URL, click on Body section > then select raw > then from the drop-down, select JSON, and provide JSON data for our Request in the input-text-box below it. 

   > Example of JSON data( notice both key and value are within double-quotes):
   
```JSON
    {
        "email":"sidp0008@google.com",
        "password":"XXXXXXXXXX"
    }
```

### **Environment Variables in Postman**

   > Click on Environment > Click on + icon to create an Environment > Give a name to New Environment > Add Environment Variables in table below it

   >**Example:**
    Add a Environment variable > Name it "SITE" > then give it initial value as some URL of your App, like your base URL http://localhost:3000

   > Now, to use this environment variable **SITE** that we have created, you can go to any Request page under any Collection which you have created earlier and then under Request URL field, you can type **{{SITE}}** in place of typing http://localhost:3000 
   
   > Similarly, in place of http://localhost:3000/dashboard, you can type **{{SITE}}/dashboard** and both will do the same job for you.

   > So, in this way, you can make use of these environment variables to make your testing these APIs more efficient.

#

Thanks for the read👍

[🔼 Back to top](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/tree/Main/fullstack-app-backend#crud-applications-backend-using-nodejs)
#

Developed By:

**Sidharth Pandey**

[Email](mailto:Sidp0008@gmail.com) | [LinkedIn](https://linkedin.com/in/sidp919)


Happy Learning! ☺️