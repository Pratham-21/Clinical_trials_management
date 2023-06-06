function getBotResponse(input) {
   input = input.toLowerCase();
   
    // Simple responses
    if (input.indexOf('butt')>=0||input.indexOf('buts')>=0||input.indexOf('boob')>=0||input.indexOf('body')>=0||input.indexOf('sexy')>=0||input.indexOf('hot')>=0) {
        return "Misogyny! how refreshing";           
    }
    else if (input.indexOf('hi')>=0||input.indexOf('hey')>=0||input.indexOf('hello')>=0) {
        return "Hello there! &#128400";
    } 
    
    else if (input.indexOf('contact')>=0) {
        return "Oh! sure...";           
    }
    else if (input.indexOf('sorry')>=0) {
       
        return "It's ok";
    }
    else if (input.indexOf('fuck')>=0) {
        return "Please use appropriate language";           
    }
    else if (input.indexOf('where do you live')>=0) {
        return "I live in pune";
    }
    else if (input.indexOf('not fine')>=0||input.indexOf('not good')>=0||input.indexOf('bad')>=0||input.indexOf('sad')>=0||input.indexOf('not happy')>=0||input.indexOf('not feeling fine')>=0||input.indexOf('not feeling good')>=0) {
        return "Oh! it made me sad &#128532";
    }
    else if (input.indexOf('fine')>=0||input.indexOf('not bad')>=0||input.indexOf('good')>=0||input.indexOf('happy')>=0) {
        return "Glad to hear that &#128515";
    }
    else if(input.indexOf('whats')>=0||(input.indexOf("what's")>=0))
    {
        return "nothing much just enjoying life &#128579";
    }
    else if(input.indexOf('my name is')>=0||input.indexOf('i am ')>=0||input.indexOf('this is')>=0)
    {
        return "Nice to meet you dear &#128522";
    }
    else if(input.indexOf('know my name')>=0||(input.indexOf('my name')>=0))
    {
        return "i would love to know your name";
    }
     
    else if(input.indexOf('project')>=0)
    {
        return "i have made several projects";
    }
    else if(input.indexOf('nice to meet')>=0)
    {
        return "nice to meet you too &#	128579";
    }
    else if(input.indexOf('how are')>=0)
    {   
        return "i am going good";
    }
    else if(input.indexOf('good morning')>=0||input.indexOf('good afternoon')>=0||input.indexOf('good night')>=0||input.indexOf('good evening')>=0)
    {
        return input;
    }
    else if (input.indexOf('have a')>=0) {
       
        return "you too";
    }
    else if (input.indexOf('bye')>=0) {
       
        return "ok bye &#128400 talk to you later!";
    }
    else if (input.indexOf('name')>=0) {
       
        return "My name is Prathamesh";
    }
    else if (input.indexOf('message')>=0) {
       
        return "please leave your message in the contact section";
    }
    else if(input.indexOf('education')>=0||input.indexOf('qualification')>=0)
    {
        return "I am currently in 3rd year of my ENTC Engineering at Government College of Engineering and Research, Avasari, Pune";
    }
    else if (input.indexOf('age')>=0) {
       
        return "I am 21";
    }
    else if (input.indexOf('service')>=0||input.indexOf('work')>=0) {
       
        return "I do provide freelancing";
    }
    
    else if (input.indexOf('touch')>=0) {
       
        return "why not.... Add me on";
    }
    else if(input.indexOf("love your")>=0)
    {
        return "Thanks a lot!"
    }

    else if (input.indexOf("like you")>=0||input.indexOf("love you")>=0||input.indexOf("love u")>=0||input.indexOf("i love you")>=0) {
        return "How could you not";
    }
   
    else if(input.indexOf('help')>=0)
    {
        return "sure but in what concern ?"
    }
    else if(input.indexOf('ok')>=0)
    {
        return "always there for you &#9996"
    }
    else {
        return "sorry couldn't get that... ";
    }
}