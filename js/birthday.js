$(document).ready(function(){

    $("h1").click(function(){
      $("h1").remove();
      $("body").css({"background-image":"url(images/art-blur-bright-285173.jpg)"});
     // $("body").css({"background-size":"1600px 1000px"});

      var newAudio = document.createElement("audio");
      newAudio.src = "sounds/Happy-birthday-piano-music.mp3";
      newAudio.autoplay = true;
      /*
      var stop = function(){
      newAudio.pause();
      }
      
      setInterval(stop,8000);
*/
      var string1 = "¡¡Feliz Cumpleaños Papá!!";
      
      var tab1= string1.split('');

      var list1= document.createElement("ul");
      var container1=document.getElementById("container");
      container1.appendChild(list1);


      var aff = tab1.map(function(value){
      
        var one = document.createElement("li");
        one.innerHTML=value;
        var listUl = document.getElementsByTagName("UL")[0];
        listUl.append(one);
      

        if(value==" "){
          one.className="space";
        }
      });
      var n = 0;
      //$("div").animate({top: '150px'});/*
      function blink_text() {
        $('div ul').fadeOut(500);
        $('div ul').fadeIn(500);
    }
    setInterval(blink_text, 500);
   
      var message = document.createElement("p");
      message.className='niceBorders1';
      message.innerHTML = "Que pase un buen día. <br/>¡Que cumpla muchos más! <br/> Buen viaje.";
      var cont = document.getElementsByTagName('div')[0];
      cont.append(message);
      
      $("p.niceBorders1").animate({fontSize:"2em"},4000);
      var cat = document.createElement('img');
      cat.src=("images/cat.gif");
      cont.append(cat);
      $("img").fadeOut(0);
      $("img").fadeIn(7000);

      $("footer").css('visibility', 'visible');


    });

    
  });
  
  /* dont forget add footer copyright sound*/