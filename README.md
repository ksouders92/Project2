# FlightVUE

#### Project #2 for UCF Coding Boot Camp

## Meet the Team 
#### "Aviation Avengers" consisted of Kathleen Souders, Abe Neto, Jose Araujo, and Christopher Hebeler

##### We created an app that used an API from Aviation Edge to return a search for all the live international flights. The app also provided users an itinerary to follow in order to arrive to the airport on time in relevance to their location and destination. FlightVUE also has a statistics page with various data about international air travel.


## Project 2 Requirements:
* GitHub: deployed to https://github.com/ksouders92/Project2
* Heroku: deployed to https://dashboard.heroku.com/apps/frozen-ocean-73432
1. Use a Node and Express Web Server;
Requirement fulfilled- Using node we used a "node init" and ran "npm install express"  in the terminal to set up the package-lock.json and package.json. In our server.js we required the packages
1. Be backed by a MySQL Database an ORM (not necessarily Sequelize);
Requirement fulfilled-  We used Sequelize for the database Chris created which will tell you what time to arrive at the airport 
1. Have both GET and POST routes for retrieving and adding new data;
Requirement partially fulfilled-  We had GET routes for the MySQL database, but we do not have a POST route. We originally wanted to fulfill this requirement by creating a favorites button that will allow users to be able to save flight info. We were unable to fulfill this requirement in time because we would have then had to create a user login; a plan for version 2.0.
1. Be deployed using Heroku (with Data);
Requirement fulfilled-  
We successfully deployed the project to Heroku. One challenge we faced was getting the jawsDB connected but Alex worked with Ronny to overcome this challenge.
1. Utilize at least one new library, package, or technology that we haven’t discussed;
Requirement fulfilled-  
The new technology we used was the following:
 * URL: https://www.chartjs.org/
 * Name: Charts.js
 * What it does: Mobile responsive javascript library that lets you visualize your data in different ways; each of which are animated and customizable, using HTML5
1. Have a polished frontend / UI;
Requirement fulfilled-  
We used Bootstrap and Chart.js to style. We wanted our site to look inviting while displaying an image relative to our app (hence the cloud background with the plane). Abe reached out to a colleague to help us with our FlightVUE logo. In version 2.0 we would like to edit the styling some, for example, responses being displayed in a more aesthetically pleasing layout that would capture the users attention.
1. Have folder structure that meets MVC Paradigm;
Requirement fulfilled-  
In general, we consider the following folders to fit the MVC pattern:
* Models
  * Airport.js
  * Index.js
* Public/Assets
  * CSS
  *	Images
  * Javascript
  * Various HTML files
* Views/Layouts
   * Main.handlebars
   * Results.handlebars
* Controllers:	
  * Routes.js
* Database 
  * Jawsdb.sql
  * Schema.sql
  * Seeds.sql 
8. Meet good quality coding standards (indentation, scoping, naming).
Requirement fulfilled- We have indented our code, named the variables using camel case, and scoped our files using the MVC structure.
9. Must not expose sensitive API key information on the server, see [Protecting-API-Keys-In-Node.md](../../../10-nodejs/03-Supplemental/Protecting-API-Keys-In-Node.md)
Requirement fulfilled-  We have a config.js file that holds a secret API key using a dotenv file.

