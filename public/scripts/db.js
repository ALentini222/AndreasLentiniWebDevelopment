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
var ipInfoDump;
$.getJSON('https://ipinfo.io/', function(data) {
  ipInfoDump =  data;
  return ipInfoDump;
});
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
var ipInfoIP = JSON.stringify(ipInfoDump.ip, null, 2);
var ipInfoCity = JSON.stringify(ipInfoDump.city, null, 2);
var ipInfoReg = JSON.stringify(ipInfoDump.region, null, 2);
var ipInfoCont = JSON.stringify(ipInfoDump.country, null, 2);
var ipInfoLocation = JSON.stringify(ipInfoDump.loc, null, 2);
var ipInfoOrg = JSON.stringify(ipInfoDump.org, null, 2);
var ipInfoTimezone = JSON.stringify(ipInfoDump.timezone, null, 2);

saveMessage(name, phone, email, msg, market,ipInfoIP,ipInfoCity, ipInfoReg,ipInfoCont,ipInfoLocation,ipInfoOrg,ipInfoTimezone);
document.getElementById('contactForm').reset();
}

// Save message to firebase
function saveMessage(name, phone, email, msg, market,ipInfoIP,ipInfoCity, ipInfoReg,ipInfoCont,ipInfoLocation,ipInfoOrg,ipInfoTimezone) {
var newMessageRef = messagesRef.push();
newMessageRef.set({
 name: name,
 phone: phone,
 email: email,
 msg: msg,
 market:market,
 ipInfoIP:ipInfoIP,
 ipInfoCity:ipInfoCity, 
 ipInfoReg:ipInfoReg,
 ipInfoCont:ipInfoCont,
 ipInfoLocation:ipInfoLocation,
 ipInfoOrg:ipInfoOrg,
 ipInfoTimezone:ipInfoTimezone,
});
}