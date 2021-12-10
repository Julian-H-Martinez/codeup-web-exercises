"use strict";
(()=>{
    console.log('yep i work');
    fetch('https://api.github.com/users', {headers: {'Authorization': PROMISE_KEY}})
        .then(response => {response.json()
        .then(users => {
            users.forEach(user =>{
                console.log(user);
            })
        })
    })
        .catch(error=> console.log(error));

})()
const gitHubUsers = fetch('https://api.github.com/users');






// function getGithubUsernames() {
//     return fetch('https://api.github.com/users')
//         .then(response => response.json())
// }
//
// // later on...
//
// getGithubUsernames().then( users => {
//     users.forEach( userObj => {
//         // do something with each username
//         console.log(userObj.login);
//     });
// }).catch(error => console.error(error));