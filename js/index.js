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
      document.getElementById( "usertest" ).innerHTML = "<a href='sigin.html'>帳戶資料</a>";
    }
  }
});

function logout(){
  firebase.auth().signOut();
}