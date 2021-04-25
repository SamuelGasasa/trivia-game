Trivia Game

![diagram](./readme-files/diagram.png)
[Link to diagram](https://drawsql.app/yes-2/diagrams/trivia-task)

Backend functionality:
SQL:
Created a model for each country database (6 in total) which we use for the answers.
Each database is connected to the country-general table in a One to One connection using the country as a foreign key for each one.
Created 3 models for the question generating functionality that gets the template and creating the question and the answers according to the
template type, field, table, and question template.
Also created a saved question database which saves the question, answers, usability and rating of the question after being rated by the client.
Created a database called temp-right-answer that caches the right answer in a database to prevent cheating with the network panel in the dev tools.
Also created a database for storing the score of the players.

Server:
We separated the api into two different routers depending on the request.
Question router:
shuffle- a side function that helps us to randomize the answers so it won't follow the same pattern and prevent the answers from being predicted.

/generate request- gets a random question from our question-template databases and 

Frontend functionality:
