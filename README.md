
# Get Off Grid App

## A website with various hiking/backing trail recommendations.
#


Putting my new skills with Developing a Backend Database, I was able to create an app called Get Off Grid. The user is able to perform CRUD capabilities (create, read, update and delete) such as adding comments about a specific trail featured on the website.

#
<br><br>Example Home route:
<br><br>
          ![This is a alt text.](https://github.com/ASmith1983/Get-Off-Grid-App/blob/aab42a03c8cfdb19997b7a1ce7ea6242262c5fc3/Img%20and%20gifs/GetOffGridAppHomePage.jpg)
#

## Process and Thought logic

A critical first step that is to set up some sort of structure and layout for the project and group all my ideas and steps into one location. I found using [trello](https://trello.com/) has really helped with this process.

One main task was creating a minimum viable product (MVP) and a user story to help create a simplified description of what intended actions I wanted the user to experience.

#
<br><br>Trello board displaying MVP and User story:
<br><br>
          ![This is a alt text.](https://github.com/ASmith1983/Get-Off-Grid-App/blob/aab42a03c8cfdb19997b7a1ce7ea6242262c5fc3/Img%20and%20gifs/TrelloBoard-Project_2.jpg)
#

Another important foundation in the project was the design and use of wireframes of different routes within the app. This became quite useful when designing each webpage and route. While it was just a foundation I did expect there to be some modifications or alternate paths taken in the design process. 

#
<br><br>Wireframes:
<br><br>
          ![This is a alt text.](https://github.com/ASmith1983/Get-Off-Grid-App/blob/aab42a03c8cfdb19997b7a1ce7ea6242262c5fc3/Img%20and%20gifs/Project-2-Wire-Frame.jpg)
#

## Technologies used to create Project

In Order turn my ideas in an actual app I was going to need incorporate various developer skills to render a working app. Some of the technologies used are listed below:


 CSS
   * CSS styling & layout
   * flex
   * BootStrap - CSS framework

 JavaScript
   * JavaScript programming
   * Working within the DOM
   * JavaScript events
   * Console.log & other debugging tools

 EJS 
   * A  Developer tool for generating web pages that 
     can include dynamic data and can share templated 
     pieces with other web pages

 MongoDb 
   * A database which stores data in JSON-like 
     documents with dynamic schema

 Mongoose 
   * An Object Data Modeling (ODM) library for MongoDB 
     and Node.js

#
Example of packages needed to install for app to function:
```python
Installed Dependencies & Platforms
    dependencies: {
    "bootstrap": "^5.0.2",
    "cors": "^2.8.5",
    "ejs": "^3.1.6",
    "express": "^4.17.1",
    "express-ejs-layouts": "^2.5.0",
    "mdb": "^0.1.0",
    "method-override": "^3.0.0",
    "mongoose": "^5.12.13"
    }
```
#

## Creating the Layout and Design:
For this project time constraint was a huge obstacle for me. As soon as I started on the project I decided to keep it simple and focus on functionality and being able to launch. I found getting all the dependencies to work and function correctly first and foremost.

```python
npm i express ejs cors bootstrap method-override
```   

Then I created the actual pages in ejs. Using some JavaScript I was able to create a controllers folder with contained all of my RESTFUL routes and provided functionality to my app. 

#
<br><br>Controllers folder with RESTFUL Routes:
<br><br>
          ![This is a alt text.](https://github.com/ASmith1983/Get-Off-Grid-App/blob/ffb8572eaf707bffab39aee765242f64c35fe50f/Img%20and%20gifs/exampleOfCode.png)
#

## Final Steps:
Once I was able to communicate with my database and my route were functioning I used Atlas cloud to store my data and connect it to my backend database.

#
<br><br>Final product, user adding comments to specific trail:
<br><br>
          ![This is a alt text.](https://github.com/ASmith1983/Get-Off-Grid-App/blob/f4aa72583b9ebf8943190793cfa3ed8743893ded/Img%20and%20gifs/getOffGridDemo.gif)
#

Finally I used Heroku to host my app and deploy my website live to the internet. 

Each step in this project seemed to break down into even smaller steps. Like a link in a chain if one thing is missing or in the wrong place it can cause a headache. Making sure I kept track of my changes and finding solutions to code issues was critical and ultimately was the most time consuming task.

## Issues and future stretch goals:
Overall seeing your code work and an idea come to live is a remarkable process. However, its is not a easy task and there are many issues that arise.

One of the main issues I ran into was connecting my users data to my trail data. Finding a way to allow for a user to to add a comment(data) to the a specific trail(data).

Another issues I had was formatting CSS and styling. I found once I had function from my app I spent a lot of time trying to design and make use of my partials.ejs files. 

And finally I originally wanted to include an Api fetch  and more more user functions but I wasn't able to implement that into the app at this time. It is definitely a stretch goal that I will purse at a later date. 


#
#### Checkout the deployed version on my app at the link below. Thanks for taking the time to read and enjoy. 
#
[GetOffGridApp](https://get-off-grid.herokuapp.com/)
