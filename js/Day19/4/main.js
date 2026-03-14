//10:36 to 10:44


import {posts} from "./HigherOrderFunction.js";

posts.forEach((post)=>{
    console.log(post);
})


console.clear();

const filteredPosts = posts.filter((post)=>
{
    return post.userId === 5;
});


console.log(filteredPosts);


const mappedPosts = filteredPosts.map((post)=>
{
    return post.id;
})
console.log(mappedPosts);













