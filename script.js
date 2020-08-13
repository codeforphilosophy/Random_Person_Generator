let avatar = document.querySelector('#avatar');
let fullname = document.querySelector('#fullname');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let city = document.querySelector('#city');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function(){
    let url = 'https://randomuser.me/api/';
    fetch(url).then(function(res){
        //parse api result to json
       return res.json()
    }).then(function(data){
        //extract needed information from data blob
        let userAvatar = data.results[0].picture.medium;
        let userFullName = data.results[0].name.first +' '+ data.results[0].name.last;
        let userUserName = data.results[0].login.username;
        let userEmail = data.results[0].email;
        let userCity = data.results[0].location.city;
      
        //change the user with new data
        avatar.src =  userAvatar;
        fullname.innerHTML = userFullName;
        username.innerHTML = userUserName;
        email.innerHTML = userEmail;
        city.innerHTML = userCity;
    }).catch(function(err){
        console.log('there was an error ' + err);
    })
})