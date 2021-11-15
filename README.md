Raft Hotel Guest Book Application

The Raft Hotel Guest Book Application allows guests to check in to our hotel and view others who have stayed here before. You can use our check-in form to leave your name, number and a message for other guests. You can see who else has checked in and what they have to say You can also delete past guests from the list

Running The Application

To run the application start by cloning the project onto your local system. In the projects root directory run the following command:

docker-compose up
This will build and run the container and all necessary services.

After all services are running you can access the application from your localhost The MySQL database will run on port 3306 The express server will run on port 5000 The Angular UI will run on port 4200

Use http://localhost:4200 to access the full application
