const posts = [{ postTitle: "Post 1", postBody: "This is Post 1" },
{ postTitle: "Post 2", postBody: "This is Post 2" }];

function getPost() {
    posts.forEach((post) => {
        console.log("Post Title: " + post.postTitle + "\t" + "Post Body " + post.postBody)
    })
}

// const createPost = (postdata) => {
//     return new Promise((resolve, reject) => {

//     posts.push(postdata);
//     true? resolve():reject("Error Found");
//     }

//     );
// }

const createPost =  new Promise((resolve, reject) => {

    if(true)
    resolve(posts.push({ postTitle: "Post 3", postBody: "This is Post 3" }));
    else reject("Error Found");
    }

    );


createPost.then(getPost)
.catch(err => console.log(err));