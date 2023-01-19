# **CRUD Application's Frontend using ReactJS**

This is the frontend directory of our CRUD-Full-Stack-Application where we can find the code files/commits' details related to the frontend part of this CRUD-Full-Stack-Application.

In case you directly want to check out our CRUD-Full-Stack-Application or its Frontend, then [Click Here](https://user-list-frontend.netlify.app/)

#

## **Code Walkthrough & Commits( to make the code easy to understand)**

We can go through below commits to understand various parts/concepts of our frontend code:

1. Part-01: Frontend's UI using ReactJS, TailwindCSS & Tailblocks [Click to see the Code changes](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/commit/b6e57752b8ce022b73ab7c1d693e0a49111b2223)

1. Part-02: C in CRUD: use ReactJS to send "Create" request to Backend to add a User in our DB [Click to see the Code changes](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/commit/42fa35aa2e101fe30439b7e0a109a0da4aac0d84)

1. Part-03: R in CRUD: use ReactJS & axios to send "Read" request to get all users' data from backend [Click to see the Code changes](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/commit/900e20e2b401d23a2d58f4efae92416b01f5fd34)

1. Part-04: U & D in CRUD: use ReactJS to send "Update" & "Delete" request to backend [Click to see the Code changes](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/commit/b7ba50b462d8b09a774387f5f64cdaf3adeffe71)

#

## **Available Scripts**

In the project directory, you need to run below commands:

### **npx create-react-app fullstack-app-frontend**

Creates a react-app with boilerplate code for our fullstack-app-frontend part/project.

### **npm i axios**

It will install the dev dependency- **axios** to help in communication between the frontend & backend

### **npm start**

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#

## **Lessons Learnt**

1. There was one error I had faced while working to send **/createUser** request in **Form.jsx file** to backend server at **http://localhost:4000** ( do note here that my front-end was hosted on **http://localhost:3000** Notice how the ports are different - 4000 & 3000) 
    
    This error was basically a **404 - Not Found** error because my frontend app was trying to connect to backend app at **http://localhost:3000/createUser** whereas our Backend server was running at port: 4000

    This error occured because after running the frontend server at 3000, I had made changes in package.json file where I added below:
    ```
    "proxy":"http://localhost:4000"
    ```
    but since I didn't restarted my frontend server after this change, the **proxy** was not identified and hence our frontend app sent **/createUser** request to the frontend server i.e. **http://localhost:3000/createUser**

    Hence, a simple restart of our frontend app server solved this tricky error.

1. When I deployed this frontend reactjs app on **[Netlify](https://www.netlify.com/)** I faced network errors, this was because my frontend app was not being able to connect to my backend app which was deployed on **[Railway](https://railway.app/)** \
Note here that my **[backend API](https://user-list-backend.up.railway.app/)** at ***Railway*** was working fine and my **[React Frontend](https://user-list-frontend.netlify.app/)** at ***Netlify*** was also rendering the UI properly on screen but the issue was with the communication between the two parts. Not only that, in my local environment, even the communication between the frontend & backend was working properly. So, the issue was limited to Production environment.

    **Root Cause:** This issue occurred because ***Netlify*** didn't recognized our **"proxy"** link in package.json file and so our react app was not able to send any request to backend to fetch the required data.

    **Resolution:** To resolve this issue, you can first read this answer at **[stack overflow](https://stackoverflow.com/a/68310614)** to understand the general solution and then can check this **[_redirects](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/blob/Main/fullstack-app-frontend/public/_redirects)** file that I have created inside public directory of our Frontend directory. Note that I have created ***_redirects*** file inside public directory because when we build the project using `npm run build` command, the ***Create-React-App*** will place the public folder contents into the build output. So, ***Netlify*** will now recognize the ***redirects urls*** mentioned in **[_redirects](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/blob/Main/fullstack-app-frontend/public/_redirects)** file and whenever any request is sent using ***axios*** that request will be sent to its respective redirect url mentioned in **[_redirects](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/blob/Main/fullstack-app-frontend/public/_redirects)** file.

#

Thanks for the read👍

[🔼 Back to top](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/tree/Main/fullstack-app-frontend#crud-applications-frontend-using-reactjs)

#

Developed By:

**Sidharth Pandey**

[Email](mailto:Sidp0008@gmail.com) | [LinkedIn](https://linkedin.com/in/sidp919)


Happy Learning! ☺️