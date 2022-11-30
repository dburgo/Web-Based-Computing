const firebaseConfig = {
    apiKey: "AIzaSyAjTRebZPNRn3C4MNk5_3lv661WwBsAUOU",
    authDomain: "final-project-fa931.firebaseapp.com",
    projectId: "final-project-fa931",
    databaseURL: "https://final-project-fa931-default-rtdb.firebaseio.com/",
    storageBucket: "final-project-fa931.appspot.com",
    messagingSenderId: "1007019163660",
    appId: "1:1007019163660:web:5010e8a4ce219f86822e29"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const dbRef = firebase.database().ref();

const detailsRef = dbRef.child('userdetails');
detailsRef.on("child_added", function(snapshot, prevChildKey) {
 var newPost = snapshot.val();
});
function send(){
 var email = document.getElementById("email").value;
 var username = document.getElementById("username").value;
 var password = document.getElementById("password").value;

 detailsRef.push().set({
 email: email,
 username: username,
 password: password,
 });

} 
