# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).





👉👉👉👉    send less as much as possible        avoid sending props try to make dynamic insted of sending props  

👉👉👉👉      while appling dynamic css use veriale to store the css property if you apply it with direcet   sometime it will not work properly. but when you creat the variable & stored the css property in  that so while rendering first it will creat the variable and collect the reqired info and then it will  send it to the className="variableName " this will work very smothly 

👉👉👉👉           Always try to make such component that you can use repeatedly depending upone the situvation.   like button componet for SMALL MEDIUM & LARGE butoon .  This will Follw " DRY(Do NOt Repeat Yourself) Rule of DEVlOPMENT "

👉👉👉👉          After compliting perticular task/ work Close all the tabs .it is the sign of good Devp.   and In chrome also always keepe usefull tab open close all unnecessary tabs 


👉👉👉👉    hame LOGin User ka data kabhi bhi kam pad sakta he isliye hum huse REDUX TOOLKIT ke anadr useEffect me store karenge taki humm use kahi par bhi use kar sakenge aur hum kahi par bhi  Dispatch -->action  call kar sake
      for this specific action of "LOGIN" we are making one folder inside user of mainstore


👉👉👉👉     keep in mind Only "COMPONENET" Name folder Starts With CApital Leter. with        
TSX            extension
      if the folder is not thee component then file name must be start with small leter with extension of TS not TSX

👉👉👉👉            Dont show/ask directly login page . custumer ko yesa nahi lagna chahye ki hamre data ke sath ke kuchh galt karrhe he .
Bina log in kiye sab services/feature dikhani chahiye 

basicaly sabse pehele use apke product aur sab kuchh dikhana padenga jab jarurat ho tab hi login karwana padenga . like flipcart ---show offer ---attract karo pehele custumer ko

FACT if custumer is spending more than one minit on your website it he will surely by something not today not tommorow but he will by something ...
before login --------user 
when he bought  something user become -------custumer

👉👉👉👉  web site ka Conversion Rate ? -------- - means USER to CUSTUMER kitne convert ho rahe he .

so basical ------- website should be simple user friendly easy to understand for user add catchi thing in it 

👉👉👉👉 What is the MAin goal of  your LANDING PAGE ?/ what is the landing page ?
---- CUSTUMER Conversion RATE this the MAin goal of Our Landing PAGE 
60% log landing page se wapas jate  he so it must be UNIQUE



 👉👉👉👉 nested Routing karni padengi 


👉👉👉👉   login karne ke bad navigate hona chahihe page home pe ya phir defaut rout pe .
    you can not use Navigate feature of react-Router bcz it is only usefull for class based component.
     but we are using FUNCTION based component so insted of Navigat we have to use UseNavigate hook of React-router. 
 
   one more problem is that you can not use "UseNavigate" hoook in TS file it means it must be a function component where you can use "UseNavigate"  so inorder to solve this issue we will  use the PROPS concept  we will use  "UseNavigate" in FUNCTIONS COMPONENET and then we wil pass it in REqured TS file.

   👉👉👉👉 har  ek specific action or component ke liye alag se store bana na padta he 


   👉👉👉👉 APPOINTMENT  

1) phehele Apointemt ko Api ke madat se store karenge DB me 
2) badme data ko get karnege API se 
3)Store me bhi set karna padenga inorder to access it anywhere

4) fir data ko events={} namak props me pass karnge so that wo UI me dikhe ki KAha se Kaha BOOK hua he 





👉👉👉👉momrnt.js ka use karnege hamre data UR time ko format karne ke liye specific format me


👉👉👉👉" flex wrap" important flex property to make the button/anythig during map  in a perticular width without overflow  "width" play an vital role in this game