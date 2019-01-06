# Sick Fits
* ```insert url here```

## All Sessions
* [Session 1](#session-1) - Lecture 1-4
* [Session 2](#session-2) - Lecture 5-11
* [Session 3](#session-3) - Lecture 12-19
* [Session 4](#session-4) - Lecture 20-24
* [Session 5](#session-5) - Lecture 25-34
* [Session 6](#session-6) - Lecture 35-X



## Session 6
[🔝 Table of Contents](#all-sessions)<br>
*🗓 M, Jan 7, 2019* <br>
*💬 Lectures: 35-X* <br>
*🕐 X* <br>
*📍 Koh Phangan, Thailand* <br>

35. Updating Permissions in Local State (13min)

## Session 5
[🔝 Table of Contents](#all-sessions)<br>
*🗓 M, Jan 7, 2019* <br>
*💬 Lectures: 25-X* <br>
*🕐 Midnight-5am* <br>
*📍 Koh Phangan, Thailand* <br>

34. Permissions Management (23min) ➡️see [commit](https://github.com/juzdepom/sick-fits-wesbos/commit/c737f8b9ecdbd9c7407f11ee576c1629f8fe2379)
    * At this point, the permissions doesn't do anything yet, we still have to code a whole lot of logic and mutations. So far, what we have done is: we've queried all of the possible users, we did a whole bunch of work on the backend to make sure that anyone who is running this query  DO have access, we are checking for errors and displaying if there are any and we're taking all of the possible permissions, looping over them and looping over all of the users, and for each user, we loop over the possible permissions and output a checkbox;
    <img src="/screenshots/sessions/session5/permissions.png" width="700" alt="permissions">
33. Creating a Gated Sign In Component (5min) ➡️see [commit](https://github.com/juzdepom/sick-fits-wesbos/commit/e12ab70b81f2422f90202a44f75dddc35e13f5b8)
<br>
<img src="/screenshots/sessions/session5/pleasesignin.png" width="600" alt="pleasesignin">
32. Data Relationships (6min) ➡️see [commit](https://github.com/juzdepom/sick-fits-wesbos/commit/51882a714b7bb1f77e47ebb018ae93971eb97a65)
<br>
31. Sending Email (12min) ➡️see [commit](https://github.com/juzdepom/sick-fits-wesbos/commit/28c713d66245acd241111b210ca01ad60f10cd87) <br>
    * traditionally, getting set up to send emails has been a little hard because because to sign up for an email sending service you have to sign up for a domain and do a bunch of other stuff first. In reality, when you're in dev mode, you don't want to be sending actual emails
    * Wes uses a service called [mailtrap.io](https://mailtrap.io/)
    * When your production goes live, you can use something like Postmark
    * the best way to send email with node.js is NodeMailer
    * you can code emails in React with [mjml.io](https://mjml.io/)
    <img src="/screenshots/sessions/session5/mailtrap.png" width="700" alt="mailtrap">
    <img src="/screenshots/sessions/session5/resetemail.png" width="700" alt="resetemail">
30. Frontend Password Reset Flow (15min) ➡️see [commit](https://github.com/juzdepom/sick-fits-wesbos/commit/136e3635c33ed043310f995b2cd5cc5287c1a3fa)
    <br>
    * I didn't test this either😬 we'll see once the email starts working
    <img src="/screenshots/sessions/session5/reset.png" width="400" alt="reset">
29. Backend Password Reset Flow (30min) ➡️see [commit](https://github.com/juzdepom/sick-fits-wesbos/commit/65390e3999ae05ed444130af56fcc24679553acb)
    <br>
    * was not able to test this so hopefully it works!
    <br>
28. Sign Out Button (6min) ➡️see [commit](https://github.com/juzdepom/sick-fits-wesbos/commit/3dad03965b054205b010afd54399135037400143)
    <br>
    <img src="/screenshots/sessions/session5/signout.png" width="700" alt="signout">

27. Sign in Form and Custom Error Handling (17min) ➡️see [commit](https://github.com/juzdepom/sick-fits-wesbos/commit/37b792548c997aa5b89ca49696420b1d18c9ab5e)
    * hopefully by this time you're getting used to the cadence of "adding in the schema, adding in the resolver, either a query or mutation, flip over to the front end, build some sort of interface for it and then manage it from there.

26. Currently Logged In User with Middleware and Render Props (19min) ➡️see [commit](https://github.com/juzdepom/sick-fits-wesbos/commit/21a146497a3d838468e2f7e3f652fa3f1c36abe4)
    * on every single request, the JWT token is going to come along for the ride; the token will be decoded on the backend and then will stick the user ID onto every single request. Then, if we need to figure out who the current user is, we can quickly query the database.

25. User Signup in React (12min) ➡️see [commit](https://github.com/juzdepom/sick-fits-wesbos/commit/805ee1b4104f2c2acda6b5ee918bd1d8459e8cdf)
    <img src="/screenshots/sessions/session5/signup.png" width="600" alt="signup">

## Session 4
[🔝 Table of Contents](#all-sessions)<br>
*🗓 Su, Jan 6, 2019* <br>
*💬 Lectures: 20-X* <br>
*🕐 All Day* <br>
*📍 Koh Phangan, Thailand* <br>

24. User Signup and Permission Flow (23min) ➡️see [commit](https://github.com/juzdepom/sick-fits-wesbos/commit/9514f0d1c241bee3c2d13b95b4ef0dfa937696bc)
    * by putting the JWT in a cookie, it's going to allow us to send along the JWT every single request and we'll be able to server render the authenticated user
    <img src="/screenshots/sessions/session4/prisma.png" width="600" alt="prisma">
23. Pagination and Cache Invalidation (10min) ➡️see [commit](https://github.com/juzdepom/sick-fits-wesbos/commit/a946aede24b863517681d11505990fea56109e8b)
22. Pagination (16min) ➡️see [commit](https://github.com/juzdepom/sick-fits-wesbos/commit/55d375acd46f919dfab5aa1767f5d758aca5f42a)
    * if we have 1000 items, we don't want the query to fetch all 1000 items at once! This is where Prisma connections comes in.
    <br>
    <img src="/screenshots/sessions/session4/pagination.png" width="400" alt="pagination">
21. Displaying Single Items (14min) ➡️see [commit](https://github.com/juzdepom/sick-fits-wesbos/commit/15e3b9c892f3beb6ea2af22ebdffcefba8a053c2)
    <br>
    <br>
    <img src="/screenshots/sessions/session4/single-item.png" width="600" alt="single item">
20. Deleting Items (13min) ➡️see [commit](https://github.com/juzdepom/sick-fits-wesbos/commit/6c8a4248cd60d15f2ba928efc1b9a18832f433bd)

## Session 3
[🔝 Table of Contents](#all-sessions)<br>
*🗓 Sat, Jan 5, 2019* <br>
*💬 Lectures: 12-19* <br>
*🕐 All Day* <br>
*📍 Koh Phangan, Thailand* <br>

19. Updating Items with Queries and Mutations (26min) ➡️see [commit](https://github.com/juzdepom/sick-fits-wesbos/commit/45f7e1f4a0fbf9a59232b4fea2d67522bc2a81d6)
    * I had to rewatch this video twice because I made an error!
18. Uploading Images (12min) ➡️see [commit](https://github.com/juzdepom/sick-fits-wesbos/commit/1e2a0a545df4e8f83b027e7d021bbb94f908a311)
    * created an account on cloudinary <-- we are going to upload images to this external service
    * cloudinary is awesome because it can do transformations. It can do image compressions, resizing of images, cropping, applying filters...they also give you 10 GB for free
    * would be worth watching this tutorial again if we wanted to set up an image hosting service
    * so far, we have gotten the R part of CRUD (read), and the C part of CRUD (create), in the next tutorial, we are going to code out the edit screens.
    <img src="/screenshots/sessions/session3/shop.png" width="400" alt="shop">
    <img src="/screenshots/sessions/session3/shoes.png" width="400" alt="shoes">
    <img src="/screenshots/sessions/session3/cloudinary.png" width="800" alt="cloudinary">
    <img src="/screenshots/sessions/session3/image-upload.png" width="800" alt="image-upload">

17.  Creating Items with Mutations (30min) ➡️see [commit](https://github.com/juzdepom/sick-fits-wesbos/commit/ee12a1a3b8a23bd02a54179e07f4b48d65c5ac26)
    * working on sell page and pushing new items to the database
    * go to Form.js to check out how Wes did the animation for the loading bar
16. React Meets GraphQL (26min) ➡️see [commit](https://github.com/juzdepom/sick-fits-wesbos/commit/49b853efaa2bef5c29973a937134c20a14d0ef76)

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