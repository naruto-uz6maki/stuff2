prediction1=""; 
prediction2="";
Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="capture" src="'+data_uri+'">';
  });
}
classifier=ml5.imageClassifier("",modelLoaded);
function modelLoaded(){
  console.log('modelLoaded');
}
function speak(){
  var synth=window.speechSynthesis;
  speak1="the first prediction is"+prediction1;
  speak2="the second prediction is"+prediction2;
var utter=new SpeechSynthesisUtterance(speak1+speak2);
synth.speak(utter);
}