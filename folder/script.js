
 

document.addEventListener('aos:in:Video2', ({ detail }) => {
    console.log("hi")
    playVid();
    
  });

  

 function playVid() { 
    let vid = document.getElementById("Video2").play();
    console.log("test")
} 
