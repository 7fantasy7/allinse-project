/**
 * Created by root on 09.09.2016.
 */
function checkAuth(){
    //console.log(getOauthTokenFromStorage());
    if(!sessionStorage.getItem('token')) {
        console.log("redirect login.html");
        //$(location).attr('href',"/login.html");
        window.location.replace("/login.html");
    }
}
