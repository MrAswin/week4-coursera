(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim","Jerin","Jaison"];

    for (var k = 0; k < names.length; k++) {
      var firstLetter = names[k].charAt(0).toLowerCase();   // Takes first letter and converts to lowercase
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[k]);                         // If name starts with j, say bye ==> calls byeSpeaker()
      } else {
        helloSpeaker.speak(names[k]);
      }
    }
    
    })();