# Fancy Todo App Server
JobsTive is an exclusive app for software engineers which provides current available jobs in software engineering, recent news in technology, and brush up your tech knowledge with trivia game.

## RESTful endpoints
POST /register
POST /login
GET /job
GET /news
GET /trivia

### POST /register

> Register account user

_Request Header_
```
not needed
```

_Request Body_
```
{
  "email": "<email to get insert into>",
  "password": "<password to get insert into>"
}
```

_Response (200 - OK)_
```
{
  "id": <given id by system>,
  "email": "<posted email>"
}
```

_Response (400 - Bad Request)_
```
{
  error message
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Server Error"
}
```
### POST /login

> Login User

_Request Header_
```
{
  not needed
}
```

_Request Body_
```
{
  "email": "<email to get insert into>",
  "password": "<password to get insert into>"
}
```

_Response (200 - OK)_
```
{
  "access_token": "access_token"
}
```

_Response (400 - Bad Request)_
```
{
  message: 'Wrong email or password'
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Server Error"
}
```

### GET /job

> Get list of jobs

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200 - OK)_
```
  {
    "company": <job's company>,
    "title": "<job's title>",
    "location": "<job's location>",
    "type": "<job's type>",
    "url": "<job's url>"
  }
```

_Response (505 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```


### GET /news

> Get list of recent news about technology

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200 - OK)_
```
  {
    "title": <news title>,
    "description": "<news description>",
    "url": "<news url>",
    "urlToImage": "<news urlToImage>"
  }
```

_Response (500 - Internal Server Error)_
```
{
  error message
}
```
### GET /trivia

> Open trivia

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200 - OK)_
```
  {
    "question": <trivia question>,
    "difficulty": "<trivia difficulty>",
    "correct_answer": "<trivia correct_answer>"
  }
```

_Response (500 - Internal Server Error)_
```
{
  error message
}
```
---


