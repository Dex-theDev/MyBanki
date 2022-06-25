# MyBanki
This FullStack application allows the user to create and study flashcards! I made this version specifically for Technical interview questions, or "The Bank". With similar functionalityy to the famous Anki App...BANKI! Study for your technical interviews on the go! With a simple, yet catchy interface, studying will be more of a hobby instead of a chore with this application!

<p align="center">
  <img width="800" height="400" src="https://github.com/Dex-theDev/MyBanki/blob/main/Capture.PNG?raw=true">
</p>
<p align="center">
  <img width="800" height="400" src="https://github.com/Dex-theDev/MyBanki/blob/main/Capture2.PNG?raw=true">
 </p>
### How It's Made:
#### Tech Used: EJS / CSS / Vanilla Javascript / Node.js - Express / MongoDB / Postman

I started this project by building the backend first. This included setting up and configuring a database, creating routes for different types of requests, and query endpoints for access to the api data. Once that was completed, I went ahead and created the 'edit flashcards' page and used EJS to render the api data to the screen. The form for creating flashcards included the question, answer and topic of the question asked. Once the backend was complete, I shifted over to the client-side of the application and created a modal, giving the user instructions on how to use the application. The client-side code fetches cards from the backend api and renders them to the user. The answer is initially hidden until the user clicks "view answer". On the add/edit page, the user can view all cards, or filter them by topic with the click of a button. 
  
### Optimizations

- Sanitize user input a bit more to ensure the proper data is rendered. 
- Add a "favorite" feature so the user can view and study cards by preference
- Add an edit icon to every card so the user can update individual cards with ease
- Add an animation to the cards rendered as the user filters by subject
- Add a function that randomizes the index, so the cards shown are always random

 
### Lessons Learned:

Whew!!! Where do I even begin..! Well this is my very first Fullstack web application and boy am I proud. I learned how to configure an entire backend server, along with forging a connection to a MongoDb database. How to create collections, and store data in them. This was also my first project using a template engine for client side code, that was pretty cool. I also got to have a little fun with animations, never a dull moment learning something new!
  
  
