# Postgresql Expressjs Reactjs CRUD Application

**Steps to run app:**
1. you need to have `nodejs`, `yarn` and `docker` installed on your local machine be be able to run project
2. check if the ports 3000, 5000 and 5432 are empty on your localhost
3. clone project on your local machine
4. `cd PER-app/api`
5. in a terminal run command `yarn install`
6. run command `yarn start:db`
7. open second terminal run command `yarn migrate`
8. after it's finished run command `yarn seed`
9. after it's finished run command `yarn start`
10. open third terminal `cd ../front`
11. `yarn install`
12. `yarn start`

**Api end poits:**

Get all movies  
Method: GET  
Path: http://localhost:5000/movies/  

Get a movie by id  
Method: GET  
Path: http://localhost:5000/movies/:id  

Remove movie  
Method: DELETE   
Path: http://localhost:5000/movies/:id   

Create a new movie  
Method: POST  
Path: http://localhost:5000/movies/  
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
Path: http://localhost:5000/movies/:id    
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
* description: string with min length 2 and max length 300    
* rating: positive integer max value 10   

**Front-end routes:**  

Get all movies page:  
Path: http://localhost:3000  

Create a movie page:   
Path: http://localhost:3000/create  

Edit and delete a movie page:
http://localhost:3000/movie/1   

About project page:  
http://localhost:3000/about  

Hope you will enjoy my project :+1: :shipit:  
