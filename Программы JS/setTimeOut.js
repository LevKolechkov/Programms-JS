const createNewPost = function (post, addedAt = Date())
{
    const newPost = JSON.parse(JSON.stringify(post))
    newPost.date = addedAt

    console.log(newPost)
}

const firstPost = 
{
    id: 1987,
    nameOfUser: 'Feddy'
}

setTimeout(function() {createNewPost(firstPost)}, 3000)