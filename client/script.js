let server = 'http://localhost:3000/'
let triviaArray = []

$(document).ready(() => {
    console.log('Greeting My lord')

    if(!localStorage.access_token){
        // home()
        login()
    } else {
        showJoblist()
    }
})
function home() {
    $('#apps-home').show()
    $('#login-page').hide()
    $('#register-page').hide()
    $('#jobs-list').hide()
    $('#news-list').hide()
    $('#login-nave').hide()
    $('#register-nave').hide()
    $('#jobs-nave').hide()
    $('#news-nave').hide()
    $('#logout-nave').hide()
}
// LOGIN AND REGISTER
function login () {
    $('#login-page').show()
    $('#register-page').hide()
    $('#jobs-list').hide()
    $('#news-list').hide()
    $('#apps-home').hide()
    $('#login-nave').hide()
    $('#register-nave').hide()
    $('#jobs-nave').hide()
    $('#news-nave').hide()
    $('#logout-nave').hide()
}

$('#login-btn').click((event) => {
    event.preventDefault()
    let email = $('#email-login').val()
    let password = $('#password-login').val()
    $.ajax({
        method: 'POST',
        url: `${server}login`,
        data: {
            email,
            password
        }
    })
    .done(response => {
        console.log(response, 'ini res')
        localStorage.setItem('access_token', response.acces_token)
        showJoblist()
    })
    .fail(err => {
        console.log(err.responseJSON)
        Swal.fire({
            title: 'Error!',
            text: err.responseJSON,
            icon: 'error',
            confirmButtonText: 'Close'
          })
    })
    .always(() => {
        $('#email-login').val('')
        $('#password-login').val('')
    })
})


function register () {
    $('#login-page').hide()
    $('#register-page').show()
    $('#jobs-list').hide()
    $('#news-list').hide()
    $('#apps-home').hide()
    $('#login-nave').hide()
    $('#register-nave').hide()
    $('#jobs-nave').hide()
    $('#news-nave').hide()
    $('#logout-nave').hide()
}

$('#showLogin').click((event) => {
    event.preventDefault()
    login()
})

$('#showRegister').click((event) => {
    event.preventDefault()
    register()
})

$('#register-btn').click((event) => {
    event.preventDefault()
    let email = $('#email-reg').val()
    let fullName = $('#full-name').val()
    let password = $('#password-reg').val()
    $.ajax({
        method: 'POST',
        url: `${server}register`,
        data: {
            email,
            fullName,
            password
        }
    })
    .done(response => {
        console.log(response, 'ini res')
        login()
    })
    .fail(err => {
        console.log(err.responseJSON)
        let errMessage = err.responseJSON.map((el) => {
            return el.message
        })
        Swal.fire({
            title: 'Error!',
            text: errMessage.join(', '),
            icon: 'error',
            confirmButtonText: 'Close'
          })
    })
    .always(() => {
        $('#email-login').val('')
        $('#full-name').val('')
        $('#password-login').val('')
    })
})

$('#logout-nave').click((event) => {
    event.preventDefault()
    localStorage.clear()
    login()
})

// CRUD
$('#jobs-nave').click((event) => {
    event.preventDefault()
    showJoblist()
})
function showJoblist () {
    $('#login-page').hide()
    $('#register-page').hide()
    $('#jobs-list').show()
    $('#news-list').hide()
    $('#apps-home').hide()
    $('#login-nave').hide()
    $('#register-nave').hide()
    $('#jobs-nave').show()
    $('#news-nave').show()
    $('#logout-nave').show()
    getJoblist()
    getTrivia()
}

function randomTrivia(el) {
    let random = Math.floor(Math.random()*el.length)
    $('#trivia-quiz').empty()
    $('#trivia-quiz').append(`
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Trivia</h5>
          <p class="card-text">${el[random].question}</p>
          <p class="card-text">True/False</p>
        </div>
      </div>
    `)
}

function getTrivia() {
    $.ajax({
        method: 'GET',
        url: `${server}trivia`,
        headers: {
            access_token: localStorage.access_token
        }
    })
    .done(response => {
        console.log(response)
        randomTrivia(response)
    })
    .fail(err => {
        console.log(err)
    })

}

function getJoblist () {
    $.ajax({
        method: 'GET',
        url: `${server}job`,
        headers: {
            access_token: localStorage.access_token
        }
    })
    .done(response => {
        console.log(response)
        $('#show-jobslist').empty()
        response.forEach(el => {
            $('#show-jobslist').append(`
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${el.company_logo}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${el.title}</h5>
              <p class="card-text">${el.description}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${el.type}</li>
              <li class="list-group-item">${el.company}</li>
              <li class="list-group-item">${el.location}</li>
            </ul>
            <div class="card-body">
              <a href="${el.url}" class="card-link">Link Job</a>
            </div>
          </div>
            `)
        });
    })
    .fail(err => {
        console.log(err)
    })
}

function showNews () {
    $('#login-page').hide()
    $('#register-page').hide()
    $('#jobs-list').hide()
    $('#news-list').show()
    $('#apps-home').hide()
    $('#login-nave').hide()
    $('#register-nave').hide()
    $('#jobs-nave').show()
    $('#news-nave').show()
    $('#logout-nave').show()
    getNews()
}

$('#news-nave').click((event) => {
    event.preventDefault()
    showNews()
})

function getNews() {
    $.ajax({
        method: 'GET',
        url: `${server}news`,
        headers: {
            access_token: localStorage.access_token
        }
    })
    .done(response => {
        console.log(response)
        $('#show-newslist').empty()
        response.forEach(el => {
            $('#show-newslist').append(`
            <div class="card mb-3">
            <img class="card-img-top" src="${el.urlToImage}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${el.title}</h5>
              <p class="card-text">${el.description}</p>
              <p class="card-text"><small class="text-muted">${el.publishedAt}</small></p>
              <a href="${el.url}" class="card-link">Read More</a>
            </div>
          </div>
            `)
        });
    })
    .fail(err => {
        console.log(err)
    })
}