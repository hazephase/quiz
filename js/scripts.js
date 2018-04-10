
        var quotes = ["Wolf", "Monkey", "Barasinga", "Bug", "Toad", "Bug", "Whale", "Elephant", "CatFish", "Eagle", "Toad", "Camel", "Toad", "Dino", "Bear"];

        var quotes1 = ["Cat", "Cat", "Monkey", "Monkey", "Wolf", "Bunny", "Wolf", "Monkey", "Fish", "Wolf", "Monkey", "Wolf", "Frog", "Camel", "Bunny"];

        var quotes2 = ["Tiger", "Wolf", "Wolf", "Bear", "Bear", "Whale", "Dolphin", "Crocodile", "Dolphin", "Snack", "Crocodile", "Bug", "Rat", "Dear", "Dino"];

        var quotes3 = ["Big cat", "bobcat", "Dear", "Wolf", "Eagle", "Elephant", "Other", "Tod", "StarFish", "Other", "Other", "Other", "Other", "Wolf", "Other"];


        var Answerlist = ["Wolf", "Cat", "Dear", "Monkey", "Bear", "Bunny", "Whale", "Elephant", "Dolphin", "Eagle", "Crocodile", "Bug", "Frog", "Camel", "Dino"];

      //  var myImage = document.getElementById('mainImage');

      //  var imageArray = ["img1/001.png", "img1/002.png", "img1/003.png", "img1/004.png", "img1/005.png", "img1/006.png", "img1/007.png", "img1/008.png", "img1/009.png", "img1/010.png", "img1/011.png", "img1/012.png", "img1/013.png", "img1/14.png", "img1/015.png"];

      //  var imageIndex = 0;


        var modal = document.getElementById('myModal');
        window.modal.style.display = "block";


        var index = 0;


        var win = document.getElementById('myModal2');
        var lost = document.getElementById('myModal3');

        var play = document.getElementById('myModal4');
        window.play.style.display = "none";

        var option1 = document.getElementById('child0');
        var option2= document.getElementById('child2');
        var option3 = document.getElementById('child3');
        var option4 = document.getElementById('child4');

        var btn = document.getElementById('btn3');
        var btn4 = document.getElementById('btn4');
        var btn3 = document.getElementById('btn3');

        document.getElementById('inp').focus();


        function myFunction(){

            window.win.style.display = "none";
            window.lost.style.display = "none";
            var user = document.getElementById('inp').value;


            if (user == ""){
                document.getElementById('inp').style.border = "2px solid red";
            }else{
                modal.style.display = "none";
                // x.play();
                var x = document.getElementById("myAudio");
                x.play();

            }


            var i = (index%quotes.length);
                index = index + 1;

            if (index == 16){
                play.style.display = "block";
                var a = document.getElementById('audiunce');
                a.play();
            }

            //myImage.setAttribute("src", imageArray[imageIndex]);
            //imageIndex++;
            //if (imageIndex > 15) {imageIndex = 1;}

            document.getElementById('User').innerHTML = "Hello " +user+ " Welcome to Learning Tibetan";


            document.getElementById('as').innerHTML = quotes[i];
            document.getElementById('as2').innerHTML = quotes1[i];
            document.getElementById('as3').innerHTML = quotes2[i];
            document.getElementById('as4').innerHTML = quotes3[i];

            option1.style.background = "tan";
            option2.style.background = "tan";
            option3.style.background = "tan";
            option4.style.background = "tan";


            var check1 = quotes[i];
            var check2 = quotes1[i];
            var check3 = quotes2[i];
            var check4 = quotes3[i];

            var ans = Answerlist[i];


            option1.onclick = function() {
                if(check1 === ans){
                    option1.style.background = "green";
                    win.style.display = "block";
                    var x = document.getElementById("myAudio");
                    x.play();

                }else{
                    option1.style.background = "red";
                    lost.style.display = "block";
                    var y = document.getElementById('youlose');
                    y.play();
                }
            }

            option2.onclick = function() {
                if(check2 === ans){
                    option2.style.background = "green";
                    win.style.display = "block";
                    var x = document.getElementById("myAudio");
                    x.play();

                }else{
                    option2.style.background = "red";
                    lost.style.display = "block";
                    var y = document.getElementById('youlose');
                    y.play();
                }
            }

            option3.onclick = function() {
                if(check3 === ans){
                    option3.style.background = "green";
                    win.style.display = "block";
                    var x = document.getElementById("myAudio");
                    x.play();

                }else{
                    option3.style.background = "red";
                    lost.style.display = "block";
                    var y = document.getElementById('youlose');
                    y.play();

                }
            }

            option4.onclick = function() {
                if(check4 === ans){
                    option4.style.background = "green";
                    win.style.display = "block";
                    var x = document.getElementById("myAudio");
                    x.play();

                }else{
                    option4.style.background = "red";
                    lost.style.display = "block";
                    var y = document.getElementById('youlose');
                    y.play();
                }
            }
            btn4.onclick = function(){
                location.reload();
            }
            btn3.onclick = function(){
                location.reload();
            }

        }
