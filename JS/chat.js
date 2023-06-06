// Collapsible
var coll = document.getElementsByClassName("collapsible");


for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
       
           
             this.classList.toggle("active");     

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
           

        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
     firstBotMessage();
        
    });    
}

function getTime() {    
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "Hey Mansi here...";
     setTimeout(() => {
        document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';
     }, 100);
     setTimeout(() => {
        document.getElementById("botsecStarterMessage").innerHTML = '<p class="botText"><span>' + "Let me know how can i help you" + '</span></p>';
     }, 1000);
     
    document.getElementById("userInput").scrollIntoView(true);
}

let time = getTime();

$("#chat-timestamp").append(time);




// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    // let extra = '<p class="botText"><span>' + "Can i help you any of the following ways" + '</span></p>'; 
    setTimeout(() => {
        $("#chatbox").append(botHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);  
    }, 500); 
   

    if(botResponse.indexOf("Keep your STDs to yourself")>=0)
    {
        setTimeout(() => {
            $("#chatbox").append('<p class="botText"><span>' + "They suit you better   &#128526"+ '</span></p>');
            document.getElementById("chat-bar-bottom").scrollIntoView(true);  
        }, 1500); 
    }
    if(botResponse.indexOf("How could you not")>=0)
    {
        setTimeout(() => {
            $("#chatbox").append('<p class="botText"><span>' + "when i am this awesome  &#129311  "+ '</span></p>');
            document.getElementById("chat-bar-bottom").scrollIntoView(true);  
        }, 2000); 
    }


   
    //  if(botResponse.indexOf('bye')<0 && botResponse.indexOf('sure')<0 && botResponse.indexOf('why not')<0 && botResponse.indexOf('rock')<0 && botResponse.indexOf('paper')<0 && botResponse.indexOf('scissors')<0 && botResponse.indexOf('play')<0 && botResponse.indexOf('always')<0 && botResponse.indexOf('Hello')<0 && botResponse.indexOf('I do provide freelancing')<0 && botResponse.indexOf('Thanks a lot!')<0 && botResponse.indexOf('I am 18')<0  && botResponse.indexOf('message')<0 )
    if(botResponse.indexOf("ok bye &#128400 talk to you later")>=0)
    {
        setTimeout(() => {
            $("#chatbox").append('<p class="botText"><span>' + "Feel free to leave your details in the contact section"+ '</span></p>');
            document.getElementById("chat-bar-bottom").scrollIntoView(true);  
        }, 1500); 
    }
  if(botResponse.indexOf("Misogyny! how refreshing")>=0)
  {
    setTimeout(() => {
        $("#chatbox").append('<p class="botText"><span>' + "If you've worked in pocohantas joke you'll beat the trifecta "+ '</span></p>');
        document.getElementById("chat-bar-bottom").scrollIntoView(true);  
    }, 2000); 

  }
    if(botResponse.indexOf(" made several projects")>=0)
    {
        setTimeout(() => {
            $("#chatbox").append('<p class="botText"><span>' + "I have mentioned them in the <a style='color:var(--yellow);' href='#project'> project </a> section"+ '</span></p>');
            document.getElementById("chat-bar-bottom").scrollIntoView(true);  
        }, 1500); 
    }


    if(botResponse.indexOf("sorry couldn't")>=0)
    {
        setTimeout(() => {
            $("#chatbox").append('<p class="botText"><span>' + "type help for further support "+ '</span></p>');
            document.getElementById("chat-bar-bottom").scrollIntoView(true);  
        }, 1000); 
    }

    
    if(botResponse.indexOf("i am going good")>=0)
    {
        setTimeout(() => {
            $("#chatbox").append('<p class="botText"><span>' + "and what about you?"+ '</span></p>');
            document.getElementById("chat-bar-bottom").scrollIntoView(true);  
        }, 1500); 
    }

    if(botResponse.indexOf("I am a diplomate from government polytechnic pune")>=0)
    {
        setTimeout(() => {
            $("#chatbox").append('<p class="botText"><span>' + "to see my full qualification you may also visit <a style='color:var(--yellow);' href='#education'><u>education</u></a> section of my website "+ '</span></p>');
            document.getElementById("chat-bar-bottom").scrollIntoView(true);  
        }, 2000); 
    }


    if(botResponse.indexOf('sure but')>=0)
     {
        
        setTimeout(() => {
            $("#chatbox").append('<p class="botText"><span>' + "Would you like to contact me" + '</span></p>');
            document.getElementById("chat-bar-bottom").scrollIntoView(true);  
        }, 1500);


      setTimeout(() => {
        $("#chatbox").append('<p class="botText"><span>' + "Get in touch with me" + '</span></p>');
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
      }, 2000);
      setTimeout(() => {
        $("#chatbox").append('<p class="botText"><span>' + "Services i provide" + '</span></p>');
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    }, 3000);
  
 }
     if(botResponse.indexOf('I do provide freelancing')>=0){

        setTimeout(() => {
            $("#chatbox").append('<p class="botText"><span>' + 'for further details'  + '</span></p>');
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
        }, 1500);
        setTimeout(() => {
            $("#chatbox").append('<p class="botText"><span>' + '<a style="color:#eee;" href="tel:+91 8262990252" target="_blank">Call me    <i style="color:var(--yellow);margin:8px;font-size:23px;"  class="fas fa-phone"></i></a>'  + '</span></p>');
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
        }, 2500);
    
        setTimeout(() => {
            $("#chatbox").append('<p class="botText"><span>' + '<a style="color:#eee;" href="https://api.whatsapp.com/send/?phone=+918262990252&text=Hello%20Mansi %20!!  "   target="_blank">Whatsapp me<i style="color:var(--yellow);margin:7px;font-size:23px;" class="fab fa-whatsapp"></i></a>'  + '</span></p>');
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
          }, 3000);
    }

     if(botResponse.indexOf('why not')>=0)
    {        setTimeout(() => {

            $("#chatbox").append('<p class="botText"><span>' + '  <a style="color:#eee;" href="https://www.linkedin.com/in/mansi-kothale-b90581201/">linked in <button style="background:#1a1a1a;border-radius:50%;padding:5px;"><i style="color:var(--yellow);margin:7px;font-size:23px;" class="fab fa-linkedin-in"></i></button></a>'  + '</span></p>');  
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
           
         }, 1000);
          setTimeout(() => {

            $("#chatbox").append('<p class="botText"><span>' + '<a style="color:#eee;" href="https://api.whatsapp.com/send/?phone=+918262990252&text=Hello%20Mansi %20!!  "   target="_blank">Whatsapp<i style="color:var(--yellow);margin:7px;font-size:23px;" class="fab fa-whatsapp"></i></a>'  + '</span></p>');
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
  
          }, 1800);
        
           setTimeout(() => {
            
            $("#chatbox").append('<p class="botText"><span>' + '<a style="color:#eee;" href="https://github.com/this-is-mansi">Github<i  style="color:var(--yellow);margin:7px;font-size:29px;" class="fab fa-github text-dark fa-2x"></i></a>'  + '</span></p>');
            document.getElementById("chat-bar-bottom").scrollIntoView(true);

           }, 2600);       
           
     }
  if(botResponse.indexOf('it made me sad')>=0)
  {
    setTimeout(() => {

        $("#chatbox").append('<p class="botText"><span>' + "Don't worry things will be fine soon"  + '</span></p>');    document.getElementById("chat-bar-bottom").scrollIntoView(true);        
     }, 1600);

  }
     if(botResponse.indexOf('Oh! sure...')>=0)
     {
         setTimeout(() => {

            $("#chatbox").append('<p class="botText"><span>' + '<a style="color:#eee;" href="mailto:mansikothale@gmail.com" target="_blank">Mail me    <i style="color:var(--yellow);margin:7px;font-size:23px;" class="fas fa-envelope"></i></a>'  + '</span></p>');    document.getElementById("chat-bar-bottom").scrollIntoView(true);        
         }, 1000);
          setTimeout(() => {

            $("#chatbox").append('<p class="botText"><span>' + '<a style="color:#eee;" href="https://api.whatsapp.com/send/?phone=+918262990252&text=Hello%20Mansi %20!!  "   target="_blank">Whatsapp me    <i style="color:var(--yellow);margin:9px;font-size:23px;"  class="fab fa-whatsapp"></i></a>'  + '</span></p>');
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
          }, 1800);
        
           setTimeout(() => {
            
            $("#chatbox").append('<p class="botText"><span>' + '<a style="color:#eee;" href="tel:+91 8262990252" target="_blank">Call me    <i style="color:var(--yellow);margin:8px;font-size:23px;"  class="fas fa-phone"></i></a>'  + '</span></p>');
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
           }, 2600);       

         

     }
     
    
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "I love your website!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
                // buttonSendText("I love your website!");
    getResponse();
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});