async function hello () {

}

const sing = async () => {

}

const login = async (username, password) => {
    if (!username || !password) throw "missing credentials"
    if (password === "corgiffetarecute") return "Welcome creep!"
    throw "Invalid Password"
}

login ("fsdfsfsdf", "corgiffetarecute")
    .then (msg => {
        console.log("logged in!")
        console.log(msg)
    })
    .catch(err => {
        console.log("Error!")
        console.log(err)
    })