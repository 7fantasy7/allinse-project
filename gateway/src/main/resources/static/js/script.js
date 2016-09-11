$(function() {
  $('#myTabExample a:last').tab('show')
});

//Table + UI
var jsonString = '\
{  "1": {\
      "userID": 1,\
      "name": "Иванов Василий",\
      "abonement": "Тренажерный зал, СПА",\
      "phone": "+7(380)999-5977",\
      "photo": "https://farm8.staticflickr.com/7450/16495985065_d0a294a466.jpg",\
      "lastVizit": "18:33 30.08.16"\
},\
   "2":{\
      "userID": 2,\
      "name": "Харченко Маргарита",\
      "abonement": "Массаж",\
      "phone": "+7(380)966-5911",\
      "photo": "http://doramakun.ru/thumbs/users/21683/News/2014/February/Other2/Yi-Min-Jeong-500.jpg",\
      "lastVizit": "9:15 29.08.16"\
},\
     "3":{\
      "userID": 3,\
      "name": "Полякова Ксения",\
      "abonement": "СПА, массаж",\
      "phone": "+7(380)919-1197",\
      "photo": "http://maxibrand.com.ua/image/cache/data/8/32624725825-500x500.jpg",\
      "lastVizit": "14:53 30.08.16"\
    }\
}';

var users = JSON.parse(jsonString);

  $(".table tr").click(function() {
    // body...
      $(this).find("#userId").each(function() {
        var userId = $(this).html();
        getUser(userId);
      })
  })

  function getUser(userId){
    
    $('#user-interface h3').text(users[userId].name);
    $('#user-interface h5').text('Абонемент: '+ users[userId].abonement);
    $('#inform-about h5').text('Телефон: '+ users[userId].phone);
    $('#user-interface img[src]').attr('src', users[userId].photo);
    $('#inform-about p').text('Последний визит в '+ users[userId].lastVizit);
  }

  /**
   *
   * Evgeny Orlov created
   * OAuth2 auth service to /uaa/oauth/token
   *
   **/

  //Check Auth

  function requestOauthToken(login, password) {

    var success = false;

    $.ajax({
      url: '/uaa/oauth/token',
      datatype: 'json',
      type: 'post',
      headers: {'Authorization': 'Basic YnJvd3Nlcjo='},
      async: false,
      data: {
        scope: 'ui',
        username: login,
        password: password,
        grant_type: 'password'
      },
      success: function (data) {
        sessionStorage.setItem("token", data.access_token);
        success = true;
        //console.log(token);
      },
      error: function () {
        removeOauthTokenFromStorage();
        //console.log("error Oauth2")
      }
    });

    return success;
  }

function getOauthTokenFromStorage() {

  return sessionStorage.getItem('token');

}

function removeOauthTokenFromStorage() {
  return sessionStorage.removeItem('token');
}


function login() {
  var login = $("#login").val();
  var password = $("#password").val();

  if(requestOauthToken(login, password)) {
    $(location).attr('href',"/index.html");
  } else {
    alertify.error("Error: login or password");
  }
}

function getCurrentAccount() {

  var token = getOauthTokenFromStorage();
  var account = null;

  if (token) {
    $.ajax({
      url: '/uaa/users/current',
      datatype: 'json',
      type: 'get',
      headers: {'Authorization': 'Bearer ' + token},
      async: false,
      success: function (data) {
        account = data;
      },
      error: function () {
        removeOauthTokenFromStorage();
        console.log("error");
      }
    });
  }

  return account;
}
var yourval = jQuery.parseJSON(JSON.stringify(getCurrentAccount()));

console.log(yourval.lastname +" "+ yourval.firstname);