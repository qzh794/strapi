module.exports = {
    routes:[
        {
            method:'POST',
            path:'/wx-users-reg',
            handler:'wx-user.register'
        },
        {
            method:'POST',
            path:'/wx-users-login',
            handler:'wx-user.login'
        }
    ]
}