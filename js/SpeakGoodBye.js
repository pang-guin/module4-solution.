(function (window){
    var byespeaker = {};
    var speakWord = "Good Bye";

    byeSpeaker.speak = function (names) {
      console.log(speakWord + " " + name);
    }

      window.byeSpeaker = byeSpeaker;
    })(window);


// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;
