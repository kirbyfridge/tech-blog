// this function is to check if the user is logged in or not
const withAuth = (req, res, next) => {
    // if the user is not logged in, redirect to the login page
    if(!req.session.user_id) {
        res.redirect('/login');
    } else {
        // if the user is logged in, execute the route function that will allow them to view the dashboard
        next(); 
    }
};

module.exports = withAuth;