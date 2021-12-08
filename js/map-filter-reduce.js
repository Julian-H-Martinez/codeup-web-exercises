"use strict";
$(document).ready(()=>{
    console.log("yep i'm working just fine!");
    /** USERS FROM EXERCISE */
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];
/** Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array. */
    let threeLang = users.filter(user => user.languages.length >= 3)
    console.log(threeLang);

/** Use .map to create an array of strings where each element is a user's email address */
    let userEmails = users.map(user => user.email);
    console.log(userEmails);

/**
 * Use .reduce to get the total years of experience from the list of users.
 * Once you get the total of years you can use the result to calculate the average.
 */
    let yearsOfExp = users.map(user => user.yearsOfExperience);
    console.log(yearsOfExp);
    let totalYrsExp = yearsOfExp.reduce((previousValue, currentValue)=>previousValue + currentValue)
    console.log(totalYrsExp);
    let avg = totalYrsExp/yearsOfExp.length;
    console.log(avg);

/** Use .reduce to get the longest email from the list of users. */
    let emailLength = userEmails[0].length;
    console.log(emailLength);


    // var ;
    // const reducer = (previousValue, currentValue) => previousValue.length + currentValue.length;
    // let longestEmail = userEmails.reduce(reducer)
    //     console.log(longestEmail);
    //     // console.log(currentEmail);
})