
  const firebaseConfig = {

    apiKey: "AIzaSyArZf9GS9LWElhOMhA9FYlOlIpPF8GZk7Q",

    authDomain: "andreaslentiniwebdev.firebaseapp.com",

    databaseURL: "https://andreaslentiniwebdev-default-rtdb.firebaseio.com",

    projectId: "andreaslentiniwebdev",

    storageBucket: "andreaslentiniwebdev.appspot.com",

    messagingSenderId: "223575941858",

    appId: "1:223575941858:web:61908868ddc03e5a0e74bb",

    measurementId: "G-RPZHH8DSS6"

  };
  firebase.initializeApp(firebaseConfig);

  var messagesRef = firebase.database()
  .ref();
  
  document.getElementById('contactForm')
  .addEventListener('submit', submitForm);
  
  function submitForm(e) {
  e.preventDefault();
  // Get values
  var name =  document.getElementById('name').value;
  var phone =  document.getElementById('phone').value;
  var email =  document.getElementById('email').value;
  var msg =  document.getElementById("msg").value;
  
  saveMessage(name, phone, email, msg);
  document.getElementById('contactForm').reset();
  }
  
  // Save message to firebase
  function saveMessage(name, phone, email, msg) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
   name: name,
   phone: phone,
   email: email,
   msg: msg,
  });
  }