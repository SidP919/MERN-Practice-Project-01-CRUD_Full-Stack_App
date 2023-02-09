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

1. Part-05: Use Context-API and useCallback() hook to resolve Infinite Re-renders Problem [Click to see the Code changes](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/commit/9326782f9c40c7c04d3c657a7fc935c072453fb4)

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

1. **The Infinite Re-renders Problem**

    **Issue Description:** If we will run/deploy our CRUD Full-Stack Application just after we complete **Part-04** mentioned in [Code Walkthrough](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/tree/Main/fullstack-app-frontend#code-walkthrough--commits-to-make-the-code-easy-to-understand), then we will face "The Infinite Re-renders Problem".\
    In brief, the **Infinite Re-renders Problem** is a problematic situation where one app or some component keeps on refreshing itself infinitely. In cases, when we are sending requests to fetch data from a remote source, this kind of issue can be costly also for our app's performance because our app will send same requests to Backend API after each refresh even though no data has changed anywhere.
    
    **Root Cause:** The root cause of this issue is the way how `useEffect()` and `useState()` hooks work/behave while working with JavaScript Objects.\
    `useState()` hook is used to update a current-state(a variable/object) using a set-function. An example of `useState()` from our CRUD Full-Stack Application: a current-state: `userListData` (an array object) and its set-function: `setUserListData()` to update the current-state.<[see here](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/blob/b7ba50b462d8b09a774387f5f64cdaf3adeffe71/fullstack-app-frontend/src/components/UserList.jsx#L5)>
    ```javascript
    const [userListData, setUserListData] = useState([]);
    ```
    `useEffect()` hook is used to perform side-effects in our components like fetching data, updating DOM, running other asynchronous functions, etc. It accepts two arguments, first a function and second a dependency array containing those variables/functions which are a dependency for the variables & functions used/invoked inside the first argument function body of `useEffect()`. <[see here](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/blob/b7ba50b462d8b09a774387f5f64cdaf3adeffe71/fullstack-app-frontend/src/components/UserList.jsx#L23)>\
    `useEffect()` executes the code inside its first argument function body whenever any of the variables in the dependency array changes its value or on every re-render of our component.
    ```javascript
    useEffect(() => {
        fetchUserListData();
        }, [userListData] // useEffect executes whenever userListData changes
    )
    ```
    But this creates an issue, because when we have an Object( or an array or a function) inside the [dependency array](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/blob/b7ba50b462d8b09a774387f5f64cdaf3adeffe71/fullstack-app-frontend/src/components/UserList.jsx#L25) of [`useEffect()` hook](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/blob/b7ba50b462d8b09a774387f5f64cdaf3adeffe71/fullstack-app-frontend/src/components/UserList.jsx#L23,L26) and if that Object is also a current-state in some [`useState()` hook](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/blob/b7ba50b462d8b09a774387f5f64cdaf3adeffe71/fullstack-app-frontend/src/components/UserList.jsx#L5), then on every render, when first argument of [`useEffect()` hook](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/blob/b7ba50b462d8b09a774387f5f64cdaf3adeffe71/fullstack-app-frontend/src/components/UserList.jsx#L23), which is a function, gets invoked, which if contains an [inner function](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/blob/b7ba50b462d8b09a774387f5f64cdaf3adeffe71/fullstack-app-frontend/src/components/UserList.jsx#L7,L21) that executes a [set-function](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/blob/b7ba50b462d8b09a774387f5f64cdaf3adeffe71/fullstack-app-frontend/src/components/UserList.jsx#L14,L16) to change/update the value of its current-state in a [`useState()` hook](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/blob/b7ba50b462d8b09a774387f5f64cdaf3adeffe71/fullstack-app-frontend/src/components/UserList.jsx#L5), and if this current-state is also a dependency inside the [dependency array](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/blob/b7ba50b462d8b09a774387f5f64cdaf3adeffe71/fullstack-app-frontend/src/components/UserList.jsx#L25) in [`useEffect()` hook](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/blob/b7ba50b462d8b09a774387f5f64cdaf3adeffe71/fullstack-app-frontend/src/components/UserList.jsx#L23,L26),
    ```javascript
    const fetchUserListData = async () => {
        try {
        const userListResp = await axios.get("/getUsers")
        .catch((error) => {
            console.log(error);
        })
        if(userListResp.data.allUsers.length>0){
            setUserListData(userListResp.data.allUsers);
        }else{
            setUserListData([]);
        }
        } catch (error) {
        console.log(error)
        }
    }
    ```
    then this means the [dependency](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/blob/b7ba50b462d8b09a774387f5f64cdaf3adeffe71/fullstack-app-frontend/src/components/UserList.jsx#L25) of our [`useEffect()` hook](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/blob/b7ba50b462d8b09a774387f5f64cdaf3adeffe71/fullstack-app-frontend/src/components/UserList.jsx#L23,L26) has changed its value( NOTE: in case of Objects/Arrays, [set-function](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/blob/b7ba50b462d8b09a774387f5f64cdaf3adeffe71/fullstack-app-frontend/src/components/UserList.jsx#L14,L16) of [`useState()` hook](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/blob/b7ba50b462d8b09a774387f5f64cdaf3adeffe71/fullstack-app-frontend/src/components/UserList.jsx#L5) always assigns a new value to its current-state, this is because even if we are assigning an object with the same key and value, it is not actually the same object, because their reference-location changes after every re-assignment or re-render in this case), and so, this will trigger the invokation of `useEffect()` again and we are back to starting point once again, and this will again invoke the  [inner function](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/blob/b7ba50b462d8b09a774387f5f64cdaf3adeffe71/fullstack-app-frontend/src/components/UserList.jsx#L7,L21) that executes a [set-function](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/blob/b7ba50b462d8b09a774387f5f64cdaf3adeffe71/fullstack-app-frontend/src/components/UserList.jsx#L14,L16) which will again re-set the current-state of a useState() hook but since this current-state is also a [dependency](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/blob/b7ba50b462d8b09a774387f5f64cdaf3adeffe71/fullstack-app-frontend/src/components/UserList.jsx#L25) inside the [dependency array](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/blob/b7ba50b462d8b09a774387f5f64cdaf3adeffe71/fullstack-app-frontend/src/components/UserList.jsx#L25) of our [`useEffect()` hook](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/blob/b7ba50b462d8b09a774387f5f64cdaf3adeffe71/fullstack-app-frontend/src/components/UserList.jsx#L23,L26), it re-triggers the [`useEffect()` hook](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/blob/b7ba50b462d8b09a774387f5f64cdaf3adeffe71/fullstack-app-frontend/src/components/UserList.jsx#L23,L26) and so in this way our app will stuck in an issue called "The Infinite Re-renders Problem" where our app will keep on executing the function( the first argument of our [`useEffect()` hook](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/blob/b7ba50b462d8b09a774387f5f64cdaf3adeffe71/fullstack-app-frontend/src/components/UserList.jsx#L23,L26)) and its [inner function](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/blob/b7ba50b462d8b09a774387f5f64cdaf3adeffe71/fullstack-app-frontend/src/components/UserList.jsx#L7,L21) non-stop.

    **Resolution:**\
    First read through this lesson at [W3Schools](https://www.w3schools.com/react/react_usecallback.asp) to understand about useCallback() hook and its use.\
    Then, understand how the React Context-API works. [Check this out](https://github.com/SidP919/ReactJS-Practice-Project-03-Context_API#code-walkthrough--commits-to-make-the-code-easy-to-understand)\
    Then, [check this commit](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/commit/9326782f9c40c7c04d3c657a7fc935c072453fb4), in this order:\
    [Context.js](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/commit/9326782f9c40c7c04d3c657a7fc935c072453fb4#diff-d502c8d16d9b7b591cecd44f465d35ef2c97d63c7fc45b211f97323e9c5a6fcf)\
    [Provider.js](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/commit/9326782f9c40c7c04d3c657a7fc935c072453fb4#diff-8b549582ebfcb8301c056a82c1446be0bb3d7370d30f5de6e3d0a970b2514459)\
    [App.js](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/commit/9326782f9c40c7c04d3c657a7fc935c072453fb4#diff-196d5123646a4e1f8b7db09855bc138d593fb5964724f8efc1b179a7069dd0f2)\
    [UserList.jsx](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/commit/9326782f9c40c7c04d3c657a7fc935c072453fb4#diff-41ddfd2ef4c8137ba0a8b80239da242e14ce1c0f18deac3a975b889acd7d3b80)\
    [Form.jsx](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/commit/9326782f9c40c7c04d3c657a7fc935c072453fb4#diff-2f768c5c0815f57efbc12a8e2a9aab4432918111c5c8ab001fcc0ce6e629a9d5)

#

Thanks for the read👍

[🔼 Back to top](https://github.com/SidP919/MERN-Practice-Project-01-CRUD_Full-Stack_App/tree/Main/fullstack-app-frontend#crud-applications-frontend-using-reactjs)

#

Developed By:

**Sidharth Pandey**

[Email](mailto:Sidp0008@gmail.com) | [LinkedIn](https://linkedin.com/in/sidp919)


Happy Learning! ☺️