//https://teachablemachine.withgoogle.com/models/_8yMjfcd_/
    

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementBYId("camera");

webcam.attach('#camera');

function take_snapshot()

{
    webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML = '<img id="captured_image" src "'+data_uri+'"/>';

    });

}

console.log('ml5 version:', ml5.version);

classifier =ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_8yMjfcd_/model.json',modelLoaded);