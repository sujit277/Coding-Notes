const getLogin = (req, res, next) => {
    //console.log( req.get('Cookie').split("=")[1] ); 
    //const isLoggedIn =  req.get('Cookie').split("=")[1] ;
    //res.render('auth/login', { isAuthenticated: isLoggedIn });
    console.log(req.session);
    res.render('auth/login', { isAuthenticated: false });
}

const postLogin = (req, res, next) => {
    req.session.isLoggedIn = true;
    //res.setHeader('Set-Cookie', 'loggedIn=true');
    res.redirect("/");
}


const postLogout = (req, res, next) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
}

module.exports = { getLogin, postLogin, postLogout };