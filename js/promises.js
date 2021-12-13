"use strict";
(()=>{
const gitHubUsers = fetch('https://api.github.com/users');
    console.log('yep i work');
    fetch(gitHubUsers, {headers: {'Authorization': PROMISE_KEY}})
        .then(response => {response.json()
        .then(users => {
            users.forEach(user =>{
                console.log(user);
            })
        })
    })
        .catch(error=> console.log(error));

})()






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