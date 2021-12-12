"use strict";
$(document).ready(()=>{
    // console.log("yep i'm working just fine!");
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
    // console.log(threeLang);

/** Use .map to create an array of strings where each element is a user's email address */
    let userEmails = users.map(user => user.email);
    // console.log(userEmails);

/**
 * Use .reduce to get the total years of experience from the list of users.
 * Once you get the total of years you can use the result to calculate the average.
 */
    let yearsOfExp = users.map(user => user.yearsOfExperience);
    // console.log(yearsOfExp);
    let totalYrsExp = yearsOfExp.reduce((previousValue, currentValue)=>previousValue + currentValue)
    // console.log(totalYrsExp);
    let avg = totalYrsExp/yearsOfExp.length;
    // console.log(avg);

/** Use .reduce to get the longest email from the list of users. */
    let longestEmail = users.reduce((previousValue, currentValue)=>{
        // console.log(previousValue.email.length);
        if(previousValue.email.length > currentValue.email.length){
            return previousValue;
        }else{
            return currentValue;
        }
})
    // console.log(longestEmail);

/** Use .reduce to get the list of user's names in a single string.
 * Example: Your instructors are: ryan, luis, zach, fernando, justin.
 */
    //  reduce is basically a loop to add param1 with param2
    //  index allows to manipulate at certain indexes
    let instructorList = users.reduce((finalStr, user, index)=>{
        //  index to set last part of string
        if(index === users.length-1){
            return(`${finalStr} ${user.name}`);
        }else{
            return(`${finalStr} ${user.name},`);
        }
        //  starting point if present
}, "Your instructors are: ")

    // console.log(instructorList);
    /** Use .reduce to get the unique list of languages from the list of users. */
    let uniqueList = users.reduce((spcLanList, user)=>{
        for(let lang of user.languages){
            //  don't forget ! as we want languages not included to be pushed to starting []
            if(!spcLanList.includes(lang)){
                spcLanList.push(lang);
            }
        }
        return spcLanList;
    }, []) //   starting point is an empty array

    console.log(uniqueList);
})