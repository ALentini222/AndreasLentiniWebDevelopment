const firebaseConfig = {

  apiKey: "AIzaSyBuCiiHN9HZh3Nel3D-mThLdtjqUukSj7w",

  authDomain: "alentiniwebsite.firebaseapp.com",

  databaseURL: "https://alentiniwebsite-default-rtdb.firebaseio.com",

  projectId: "alentiniwebsite",

  storageBucket: "alentiniwebsite.appspot.com",

  messagingSenderId: "583001179939",

  appId: "1:583001179939:web:a8fb20a4859f387ffbee96",

  measurementId: "G-G5SJERVYHH"


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
var market = document.getElementById("market").value;


saveMessage(name, phone, email, msg, market);
document.getElementById('contactForm').reset();
}

// Save message to firebase
function saveMessage(name, phone, email, msg, market) {
var newMessageRef = messagesRef.push();
newMessageRef.set({
 name: name,
 phone: phone,
 email: email,
 msg: msg,
 market:market,
});
}