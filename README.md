# Postgresql Expressjs Reactjs CRUD Application

**Steps to run app:**
1. you need to have `nodejs`, `yarn` and `docker` installed
2. clone project on your local machine
3. `cd PER-app` && `cd api`
4. in a terminal run command `yarn install`
5. check if the ports 3000 and 5432 are empty on your localhost
6. run command `yarn run start:db`
7. open second terminal run command `yarn run migrate`
8. after it's finished run command `yarn run seed`
9. after it's finished run command `yarn start`

**Api end poits:**

Get all movies  
Method: GET  
Path: localhost:5000/movies/  

Get a movie by id  
Method: GET  
Path: localhost:5000/movies/:id  

Remove movie  
Method: DELETE   
Path: localhost:5000/movies/:id   

Create a new movie  
Method: POST  
Path: localhost:5000/movies/  
Body:  
```
{
    "title":"Title example",
    "description":"Description example",
    "rating": 10
}
```

Update movie  
Method: PUT  
Path: localhost:5000/movies/:id    
Body:  
```
{
    "title":"Title example",
    "description":"Description example",
    "rating": 10
}
```

Request to create and update validation rules for body object:   
* title: string with min length 2 and max length 50    
* description: string with min length 2 and max length 150    
* rating: positive integer max value 10   

Hope you will enjoy my project :+1: :shipit:  
