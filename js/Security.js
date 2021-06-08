class Security {

    constructor(){

        // Add code to create the input and button elements
        this.access1 = createInput("").attribute("placeholder", "Passcode1");
        this.access1.position(100,120);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(100,150);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("").attribute("placeholder", "Passcode2");
        this.access2.position(700,190);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(700,220);
        this.button2.style('background', 'lightgrey');
//add code for creating and positioning the third input box and button

        this.access3 = createInput("").attribute("placeholder", "Passcode3");
        this.access3.position(100,360);
        this.access3.style('background', 'white');

        this.button3 = createButton('Check');
        this.button3.position(100,390);
        this.button3.style('background', 'lightgrey');

        this.score = 0;

    }

    display(){

        // Add code to make the buttons function as expected
        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                this.score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                this.score++;
            }
        });
//add code for what happens when the third button is pressed
     this.button3.mousePressed(() => {
        if(system.authenticate(accessCode3,this.access3.value())){
            this.button3.hide();
            this.access3.hide();
            this.score++;
         }
    });
    
    

    }
}