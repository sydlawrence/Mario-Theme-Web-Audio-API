var pitch = 4;

function AudioDataDestination(sampleRate, readFn) {  
  // Initialize the audio output.  
  var audio = new Audio();  
  audio.mozSetup(1, sampleRate);  

  var currentWritePosition = 0;  
  var prebufferSize = sampleRate / 2; // buffer 500ms  
  var tail = null;  

  // The function called with regular interval to populate   
  // the audio output buffer.  
  setInterval(function() {  
    var written;  
    // Check if some data was not written in previous attempts.  
    if(tail) {    
      written = audio.mozWriteAudio(tail);  
      currentWritePosition += written;  
      if(written < tail.length) {  
        // Not all the data was written, saving the tail...  
        tail = tail.subarray(written);  
        return; // ... and exit the function.  
      }  
      tail = null;  
    }  

    // Check if we need add some data to the audio output.  
    var currentPosition = audio.mozCurrentSampleOffset();  
    var available = currentPosition + prebufferSize - currentWritePosition;  
    if(available > 0) {  
      // Request some sound data from the callback function.  
      var soundData = new Float32Array(parseFloat(available));  
      readFn(soundData);  

      // Writing the data.  
      written = audio.mozWriteAudio(soundData);  
      if(written < soundData.length) {  
        // Not all the data was written, saving the tail.  
        tail = soundData.slice(written);  
      }  
      currentWritePosition += written;  
    }  
  }, 50);  
}  

// Control and generate the sound.  

var frequency = 0, currentSoundSample;  
var sampleRate = 44100;  

function requestSoundData(soundData) {  
  if (!frequency) {   
    return; // no sound selected  
  }  

  var k = pitch* Math.PI * frequency / sampleRate;  
  for (var i=0, size=soundData.length; i<size; i++) { 
    soundData[i] = Math.sin(k * currentSoundSample++);  
  }          
}  

var audioDestination = new AudioDataDestination(sampleRate, requestSoundData);  


