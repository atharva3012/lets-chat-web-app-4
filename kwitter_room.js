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
     
     document.getElementById("user_name").innerHTML="Hello Dear "+user_name+"!";
     function  addRoom()
     {
         room_name = document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({
         purpose:"adding room name"
         });
         localStorage.setItem("room_name", room_name);
         window.location="kwitter_page.html";


         }


function getData() {firebase.database().ref("/").on('value',
 function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot)
  {childKey  = childSnapshot.key;
       Room_names = childKey;
          console.log("room name-"+Room_names);
          row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
          document.getElementById("output").innerHTML=row;
  });

});

}
      
      
getData();
function redirectToRoomName(name)
{
     console.log(name);
     localStorage.setItem("room_name",name);
     window.location="kwitter_page.html";
}

function logout()
{
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location="index.html";

 }

