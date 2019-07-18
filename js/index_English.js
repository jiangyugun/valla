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
      document.getElementById( "Sigin_user_English" ).innerHTML = "<a href='sigin_English.html'>Account</a>";
    }
  }
});

function logout(){
  firebase.auth().signOut();
}