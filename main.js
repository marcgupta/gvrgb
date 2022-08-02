var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
    }
    
    recognition.onresult= function (event){
        console.log(event);
        var Content = event.results[0][0].transcript;
        console.log(Content);
        document.getElementById("textbox").innerHTML = Content;
        if (Content=="take my selfie") {
    
    console.log("TAKING SELFIE-->")
    speak();
        }
        
    }

function speak() {

    Webcam.attach(camera);

    setTimeout(function() {

        speak_data = "TAKING UR SELFIE IN 5 SECONDS";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        img_id = "1"
        take_snapshot()
        save1()

    }, 5000);

    setTimeout(function() {
        
        speak_data = "TAKING UR SELFIE IN 10 SECONDS";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        img_id = "2"
        take_snapshot()
        save2()

    }, 10000);

    setTimeout(function() {

        speak_data = "TAKING UR SELFIE IN 15 SECONDS";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        img_id = "3"
        take_snapshot()
        save3()
        
    }, 15000);
    

}

function take_snapshot() {

    Webcam.snap(function(data_uri){
        if (img_id == "1"){

        document.getElementById("1").innerHTML = "<img id='selfie1' src='"+data_uri+"'>";

        }

        if (img_id == "2"){

            document.getElementById("2").innerHTML = "<img id='selfie2' src='"+data_uri+"'>";
    
            }

            if (img_id == "3"){

                document.getElementById("3").innerHTML = "<img id='selfie3' src='"+data_uri+"'>";
        
                }
    });

}

camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality:90
});

function save1() {

    link = document.getElementById("link1");
    image = document.getElementById("selfie1").src;
    link.href = image;
    link.click();
    var synth = window.speechSynthesis;
speak_data = "TAKING UR SELFIE IN 5 SECONDS";
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
    
    }

    function save2() {

        link = document.getElementById("link2");
        image = document.getElementById("selfie2").src;
        link.href = image;
        link.click();
        
        }

        function save3() {

            link = document.getElementById("link3");
            image = document.getElementById("selfie3").src;
            link.href = image;
            link.click();
            
            }