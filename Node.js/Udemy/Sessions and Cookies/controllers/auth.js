const getLogin = (req, res, next) => {
  // Accessing Cookie value and passing to the component
  // const isLoggedIn =  req.get('Cookie').split(";")[1].split("=")[1];
  // res.render('auth/login', { isAuthenticated: isLoggedIn });

  // Using Session
  res.render("auth/login", { isAuthenticated: false });
};

const postLogin = (req, res, next) => {
  //Setting Cookie 
  // res.setHeader('Set-Cookie', 'loggedIn=true');

  //Using Session
  req.session.isLoggedIn = true;
  res.redirect("/");
};

const postLogout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};

module.exports = { getLogin, postLogin, postLogout };
