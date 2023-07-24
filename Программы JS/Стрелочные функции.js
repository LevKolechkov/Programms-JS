const newPost = (post, addedAt = Date()) =>
{
    const toReturnObject =
    {
        ...post,
        addedAt
    }

    return toReturnObject
}

const firstPost = 
{
    id: 1,
    author: 'Lev'
}

const toLogObject = newPost(firstPost)

console.log(toLogObject)