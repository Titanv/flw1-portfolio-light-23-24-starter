const firebaseConfig = {
  apiKey: "AIzaSyAK8WC2StXiQLsoJmBjuQrehUymXRAaatQ",
  authDomain: "chatroom-93bd5.firebaseapp.com",
  projectId: "chatroom-93bd5",
  storageBucket: "chatroom-93bd5.appspot.com",
  messagingSenderId: "26974451607",
  appId: "1:26974451607:web:3117945b0e2ec0781676d2",
  measurementId: "G-2RB19SHJ4F"
};

firebase.initializeApp(firebaseConfig);

/*  // Detect the event
document.getElementById('createSubsectionButton').addEventListener('click', function() {
    // Create a reference to the subsection in the database
    var subsectionRef = firebase.database().ref('subsections').push();
    
    // Data to store in the subsection
    var subsectionData = {
      title: 'New Subsection',
      content: 'This is the content of the new subsection.'
    };
    
    // Write data to the subsection
    subsectionRef.set(subsectionData)
      .then(function() {
        console.log('Subsection created successfully');
      })
      .catch(function(error) {
        console.error('Error creating subsection:', error);
      });
  });
  */