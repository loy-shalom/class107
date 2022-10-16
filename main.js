function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    clasifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/[...]', modelReady);
}

function modelReady(){
    clasifier.clasify(getResults);
}