Chat - Client
The server has been created and tested throughout Postman. All endpoints should be working prior to building up our client. This way, if you are not getting the results needed while building out the front end, you know where to start debugging.

Client --> Postman --> Server

Reminder:

Is your server running?
If it's working through Postman, check the client.
If it's not working through Postman, check the server route.
Don't forget to track your code using the console log.
If you don't have this extension, utilize React Developer Tools when you can.
You can view each component, what props are being passed, and all sorts of information regarding the react build.
Your teams project should start here as the root file.

Hint: npx create-react-app .

Wireframe
This is not meant to be a pixel perfect wireframe but a general layout to aim toward. As long as all the concepts of the project are utilize, feel free to use some creative design (colors, minor layout, fonts, etc) for your teams project.

Figma React Chat

Data Flow
Canva Chart

Tickets
Each ticket will have a collection of items to complete. Consider when you are updating your repo to include the status of each ticket representing which portion you have accomplished.

Example: The Navbar has been added to the project.

git commit -m "U6_01 Navbar included"

This would assume that items prior have been completed and that the Footer Component has not been completed.

Base: #U6_01
Setup the base structure of the project.
Install dependencies:Create a GitHub repository
Reactstrap
React-Router-DOM
Create Components:
Nav
Footer
Ticket Requirements:

Be creative with the "Brand" name.
Establish details of the project title within the footer (see wireframe).
Auth: #U6_02
Components to Create:
Auth
Signup
Login
Logout
Ticket Requirements

There should be a swap button to allow users to either login or signup, displaying one or the other depending on what the user is needing.
The logout button should only be displayed after a user has either logged in or signed up.
Room: #U6_03
Components to Create:
Display
Add Room
Update
Delete
Ticket Requirements

Room selections should be displayed within a sidebar.
Be creative as to how you wish to display the add and update room form.
Consider a modal or routing to another display.
Message: #U6_04
Display
Add Message
Update
Delete
Ticket Requirements

Display should be housed within the Room that has been selected by user.If the user is not an owner of the message, it should not complete the request.
This can be handled however your team decides.
Stretch Goals: #U6_05
Include a project-details.md to the root directory.Customize styling.
Detail the concept of this project in pseudo code within the document.
Pseudo Code Article
Make it so that the update and delete options for a message is only available to the owner of that message.
Create an interval to update the rooms messages every set time frame (ex: every 30 seconds, a request is triggered.)
Make it so that the update and delete options for a rooms is only available to the owner of that rooms.
Style the room so that the newest message is posted to the bottom of the room, pushing all other messages up.
Consider chat boards like Discord and how they function.