# Sick Fits
* ```insert url here```

## All Sessions
* [Session 1](#session-1) - Lecture 1-4
* [Session 2](#session-2) - Lecture 5-11
* [Session 3](#session-3) - Lecture 12-X

## Session 3
[🔝 Table of Contents](#all-sessions)<br>
*🗓 Sat, Jan 5, 2019* <br>
*💬 Lectures: 12-X* <br>
*🕐 All Day* <br>
*📍 Ko Phangan, Thailand* <br>

18. Uploading Images (12min) [commit](https://github.com/juzdepom/sick-fits-wesbos/commit/1e2a0a545df4e8f83b027e7d021bbb94f908a311)
    * created an account on cloudinary <-- we are going to upload images to this external service
    * cloudinary is awesome because it can do transformations. It can do image compressions, resizing of images, cropping, applying filters...they also give you 10 GB for free
    * would be worth watching this tutorial again if we wanted to set up an image hosting service
    * so far, we have gotten the R part of CRUD (read), and the C part of CRUD (create), in the next tutorial, we are going to code out the edit screens.
    <img src="/screenshots/sessions/session3/cloudinary.png" width="800" alt="cloudinary">
    <img src="/screenshots/sessions/session3/image-upload.png" width="800" alt="image-upload">

17.  Creating Items with Mutations (30min) [commit](https://github.com/juzdepom/sick-fits-wesbos/commit/ee12a1a3b8a23bd02a54179e07f4b48d65c5ac26)
    * working on sell page and pushing new items to the database
    * go to Form.js to check out how Wes did the animation for the loading bar
16. React Meets GraphQL (26min) ➡️ [commit](https://github.com/juzdepom/sick-fits-wesbos/commit/49b853efaa2bef5c29973a937134c20a14d0ef76)

    * frontend is now successfully displaying data pulled from backend!
    <img src="/screenshots/sessions/session3/lecture-16.png" width="700" alt="lecture 16">

15. Setting Up Apollo Client with React (12min)
    * Apollo Client replaces the need for using something like redux; Apollo does:
        * all of the data management stuff a redux store will do
        * the fetching of the data from the server side
        * the pushing of the data to your mutations
        * the caching
        * the managing our local state
        * shows you the error and loading states
    * Wes explains what is happening in the `withData.js` file in the frontend folder.
    * added the [Apollo Dev Tools](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm) Chrome Extension, which gives us access to the entire store/cache
14. Items Creation and Prisma Yoga Flow (26min)
    * in this video we are going to get the items, both the query for pulling items and the mutation for creating items...
    * we'll need to edit 3 or 4 different files. We need to edit our data model, we need to deploy it to Prisma, we need to edit our schema.graphql and we also need to write a resolver in the mutation or the query or both
    * if you ever get confused with what are the steps to adding a new piece of data your backend, come back to this video🙌
    * note: anytime you make a change to your data model, you **have to have to have to** deploy it to Prisma
        * aka kill your terminal and rerun ```npm run deploy```
    * why so many Graphql files?
      * Our datamodel.graphql is for Prisma, its for our backend.
      * The prisma.graphql is what gets generated based off our datamodel.graphql
      * our schema.graphql is our public facing API; because prisma.graphql has access to everything whereas schema.graphql is what the public is going to be interfacing with in JavaScript
    * when you want to add a new type, you add it to your datamodel, then you run prisma deploy to push that up to your prisma service. That brings down a copy of our prisma.graphql which contains all of our queries and mutations and all of the possible different filters that we could use, then we go into our OWN schema.graphql which is our public facing API. This is what our React application is going to interface with. We can create the ability to create new functions like createItems() or query items, then to match up with these mutations and queries, we go into our ```mutation.js``` and ```query.js``` and we go ahead and write the resolvers to actually complete all of the logic that needs to happen. This is where all of our advanced logic, whether it's charging a credit card or sending an email is going to happen.
(working with Prisma playground)
<img src="/screenshots/sessions/session3/prisma-playground.png" width="800" alt="prisma playground">

13. Our first Query and Mutation (12min)
    * first time around am not 100% understanding what's going on
12. Getting our GraphQL Yoga Server Running (23min)<br>
    * Quick Review:
        * created our database in ```db.js```
        * we made a function called ```createServer``` which will inject a schema.graphql which will match everything in the schema with either a Mutation or a Query resolver
        * we exposed the database to every single request
        * in ```index.js``` we spin up an actual virtual version of the GraphQL Yoga server. We're holding off on the authentication middleware express for a bit
        * we started the server up


## Session 2
[🔝 Table of Contents](#all-sessions)<br>
*🗓 Thu, Jan 3, 2019* <br>
*💬 Lectures: 5-11* <br>
*🕐 All Day* <br>
*📍 Ko Phangan, Thailand* <br>

1. An Intro to Styled Components (11min)
    * downloaded the ```vscode-styled-components``` extension by Julien Poissonnier
2. Themes and Layout with Styled Components (19min)
    * introduced to the React Context API (Wesbos provides a more in depth 15 min explanation of this concept in a youtube vidoe)
3. Global Styling and Typography with Styled Components (11min)
4. Visualizing Route Changes (7min)
    * got the little red loading bar working
5. Fixing Styled Components Flicker on Server Render (4min)
    * when we reloaded the page, the CSS would not load immediately. We fixed that by adding a snippet of code.
6.  An intro to GraphQL (14min)
    * worth rewatching! Didn't really get it the first time around.
7.   Getting Setup with Prisma (23min)
     * ```npm i -g prisma```
     * ```prisma login```
     * ```prisma init```
     * Important! Don't ever commit the variables.env file (in the backend folder) to github. It contains private information!
     * ```prisma deploy --help``` (we're going to pass a custom path to an environmental file)
     * ```prisma deploy --env-file variables.env```
     * ```npm run deploy``` (see screenshot below)

<img src="/screenshots/sessions/session2/deploy.png" width="500" alt="prisma deploy">

* Ran into this error:
<br>
<img src="/screenshots/sessions/session2/prisma-error.png" width="500" alt="prisma error">
<br>
Solution: turns out I needed to create an account with [Prisma](https://app.prisma.io) first.





## Session 1
[🔝 Table of Contents](#all-sessions)<br>
*🗓 Su, Dec 30, 2018* <br>
*💬 Lectures: 1-4* <br>
*🕐 8am-10:30am* <br>
*📍 Home, Haddon Township* <br>

<img src="/screenshots/sessions/session1/session-1.png" width="300" alt="session 1">
1. Editor Setup and Starter Files Installation (9min)
2. Sick Fits and the Tech Stack Behind It (11min)
3. An Intro to Next.js, Tooling and Routing (9min)
4. Custom _app.js Layout (12min)

🕐Total Lecture Time: 41 minutes