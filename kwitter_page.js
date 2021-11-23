const firebaseConfig = { apiKey: "AIzaSyCZF_0tRSa0PqpeXCjL7tHNhib4JpLJcyE",
 authDomain: "atharvakwitter.firebaseapp.com",
  databaseURL: "https://atharvakwitter-default-rtdb.firebaseio.com",
  projectId: "atharvakwitter",
   storageBucket: "atharvakwitter.appspot.com", 
   messagingSenderId: "624796650560",
    appId: "1:624796650560:web:9025b99894ad38950123a5",
     measurementId: "G-GKK6SMFLEN" };
     firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
      message=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
      
}



function getData() { firebase.database().ref("/"+room_name).on('value', 
function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot)
 { childKey  = childSnapshot.key;
       childData = childSnapshot.val(); 
       if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
