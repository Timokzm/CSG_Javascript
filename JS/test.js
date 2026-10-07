class Vierkant {
constructor(snelheid, y){
this.x=0;
this.breedte=50;
this.y=y;
this.snelheid=snelheid;
}

    beweeg() {

this.x += this.snelheid;
        // Als het vierkant links of rechts de rand raakt, verander de richting
        if (this.x < 0 || this.x + this.breedte > width) {
            this.snelheid = -this.snelheid;
        }
    }

    teken() {
        fill ('white')
        rect(this.x, this.y, this.breedte, this.breedte);
    }
}

var vierkanten = [];

function setup() {
    canvas = createCanvas(450, 450);
    canvas.parent('processing');
vierkanten.push (new Vierkant(1,100));
vierkanten.push (new Vierkant(2,200));
vierkanten.push (new Vierkant(3,300));
    // Maak drie vierkanten aan: één met y=100,snelheid=1, één met y=200,snelheid=2, en één met y=300,snelheid=3
}

function draw() {
    background('lightblue');
    for (var n = 0; n < 3; n++) {
        vierkanten [n]. teken()
        vierkanten [n]. beweeg()
    }
   // Teken alle vierkanten (let op: for-loop)
}