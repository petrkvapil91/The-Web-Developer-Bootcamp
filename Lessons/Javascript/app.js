fakeReguestPromise('www.udemy.com/course/the-web-developer-bootcamp1')
.then(() => {
    console.log('it workeeeed!!!!!!!! page 1')
    return fakeReguestPromise('www.udemy.com/course/the-web-developer-bootcamp2')
})
.then(() => {
    console.log('it workeeeed!!!!!!!! page 2')
    return fakeReguestPromise('www.udemy.com/course/the-web-developer-bootcamp3')
})
.catch(() => {
    console.log('oh noo fail!!!!')
})