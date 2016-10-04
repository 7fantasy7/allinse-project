$(function() {
  $('#myTabExample a:last').tab('show')
});

//Table + UI
var jsonString = '                          \
{                                           \
  "users": [                                \
    {                                       \
      "userID": 1,                         \
      "name": "Иванов Василий",\
      "age":"25 лет",   \
      "abonement": "Тренажерный зал, СПА",            \
      "phone": "+7(380)999-5977",            \
      "sex": "men"               \
},                                          \
    {                                       \
      "userID": 2,                         \
      "name": "Ильченко Ольга",           \
      "age":"28 лет",   \
      "abonement": "Массаж",                       \
      "phone": "+7(380)966-5911",                    \
      "sex": "women"  \
    },   \
        {                                       \
      "userID": 3,                         \
      "name": "Полякова Ксения",           \
      "age":"18 лет",   \
      "abonement": "СПА, массаж",                    \
      "phone": "+7(380)919-1197", \
      "sex": "women"  \
    },  \
        {                                       \
      "userID": 4,                         \
      "name": "Денисенко Сергей",           \
      "age":"38 лет",   \
      "abonement": "СПА, тренажерный зал",            \
      "phone": "+7(380)919-1197", \
      "sex": "men"  \
    }  \
]                                        \
}                                           \
';
 
var users = JSON.parse ( jsonString );


var count = users.users.length; 
var i = 0; 
while( i < count) { 
function newUser(){
$('<tr><td id="userId">'+ users.users[i].userID + '</td><td>'+ users.users[i].name + '</td><td>'+ users.users[i].phone + '</td></tr').appendTo('.table tbody');

}
newUser();
i++;
}

if (users.users.sex == "men") {
    $('#user-interface img[src]').attr('src', 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png' );
} else if (users.users.sex == "women") {
       $('#user-interface img[src]').attr('src', 'http://junglejobs.ru/assets/img/female-avatar.png' ); 
    }

  $(".table tr").click(function() {
    // body...
      $(this).find("#userId").each(function() {
        var userId = $(this).html();
        getUser(userId);
      })
  })

  function getUser(userId){
    if (users.users
[userId - 1].sex == "men") {
    $('#user-interface img[src]').attr("src", "https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png" );
} else if (users.users
[userId - 1].sex == "women") {
       $('#user-interface img[src]').attr("src", "http://junglejobs.ru/assets/img/female-avatar.png" ); 
    }
    
    $('#user-interface h4').text(users.users[userId - 1].name);
    $('#user-interface #age').text( users.users[userId - 1].age);
    $('#user-interface #abonement').text( users.users[userId - 1].abonement);
    $('#user-interface #phone').text( users.users[userId - 1].phone);
  }