# Sick Fits
* ```insert url here```

## All Sessions
* [Session 1](#session-1) - Lecture 1-4

## Session 2
[🔝 Table of Contents](#all-sessions)<br>
*🗓 Sat, Jan 5, 2019* <br>
*💬 Lectures: 12-X* <br>
*🕐 All Day* <br>
*📍 Ko Phangan, Thailand* <br>

12.  Getting our GraphQL Yoga Server Running (23min)
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

5. An Intro to Styled Components (11min)
    * downloaded the ```vscode-styled-components``` extension by Julien Poissonnier
6. Themes and Layout with Styled Components (19min)
    * introduced to the React Context API (Wesbos provides a more in depth 15 min explanation of this concept in a youtube vidoe)
7. Global Styling and Typography with Styled Components (11min)
8. Visualizing Route Changes (7min)
    * got the little red loading bar working
9. Fixing Styled Components Flicker on Server Render (4min)
    * when we reloaded the page, the CSS would not load immediately. We fixed that by adding a snippet of code.
10. An intro to GraphQL (14min)
    * worth rewatching! Didn't really get it the first time around.
11.  Getting Setup with Prisma (23min)
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