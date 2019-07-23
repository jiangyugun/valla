firebase.auth().onAuthStateChanged( function(user) {
  if (user) {
    // User is signed in.

    var user = firebase.auth().currentUser;
    // Get idToken
    user.getIdToken().then( function (token) {
      console.log(token);
    });

    if ( user != null ) {
      var email_id = user.email;
      document.getElementById( "Sigin_user" ).innerHTML = "<a href='sigin.html'>帳戶資料</a>";
      document.getElementById( "Sigin_button" ).innerHTML = "<a href='#' class='btn btn-primary btn-lg'>普通版下載 <i class='fa fa-cloud-download'></i></a> <a href='#'' class='btn btn-primary btn-lg'> 強化版下載 <i class='fa fa-cloud-download'></i></a> "
    }
  } 
});

function logout(){
  firebase.auth().signOut();
}