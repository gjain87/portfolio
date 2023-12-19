// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnydZ5rQJ_NF8lX838doAMdNy0Z6Y4pmY",
    authDomain: "portfolio-gjain.firebaseapp.com",
    projectId: "portfolio-gjain",
    storageBucket: "portfolio-gjain.appspot.com",
    messagingSenderId: "861016162",
    appId: "1:861016162:web:d21f39a15f3144a833013b",
    measurementId: "G-2M19T9F0SD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // reference messages collection
  var messagesRef = firebase.firestore().collection("messages");

// listen for submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// submit form
function submitForm(e){
    e.preventDefault();

    // get values
    var name = getInputValues('name');
    var contactInfo = getInputValues('contactInfo');
    var subject = getInputValues('subject');
    var message = getInputValues('message');
    var time = (new Date()).getTime();

    // save message
    saveMessage(name, contactInfo, subject, message, time);

    // show success message
    swal({
        title: "Thank you!",
        text: "Thank you for connecting, I will get back to you shortly.",
        icon: "success",
        button: "Done",
      });
}

// function to get form values
function getInputValues(id){
    return document.getElementById(id).value;
}

// save message to firebase
function saveMessage(name, contactInfo, subject, message, time){

    var newMessageRef = messagesRef.doc();

    newMessageRef.set({
        contactInfo : contactInfo,
        mId : newMessageRef.id,
        message : message,
        name : name,
        read : "unread",
        subject : subject,
        time : time
    })

}