app.js
con
app.use(express.urlencod)
app.use('/', router)

folder router

1.index.js
=>require semua router
=> require authenticate middleware
=> router.use('/', User)
=> router.use(authenticate)
=> router.use('/job, Job)
=> router.use('/news, News)
=> router.use('/trivia, Trivia)

2.user.js
=> router.post('/login', Controller) (gagas)
=> router.post('/register', Controller)

3.job.js
=> router.get('/', ControllerJob.job) (egha)

4.news.js
=> router.get('/', ControllerNews.news) (aqil)

5.trivia.js
=> router.get('/', ControllerTrivia.trivia) (eko)

folder controller
1.userController
2.jobController
3.newsController
4.triviaController

helper bcypt
helper jwt

middleware 
authenticate
#errorHandler