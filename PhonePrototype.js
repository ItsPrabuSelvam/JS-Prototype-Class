
///Phone Starts

function Phone (num)
{
    this.number = num;
}

Phone.prototype.call = function(num){
    console.log(`Calling ${num} from Number ${this.number}...`);
}

Phone.prototype.message = function(num) {
    console.log(`Messaging ${num} from Number ${this.number}...`);
}

//// Normal Phone Starts

function NormalPhone(num)
{
    Phone.call(this, num);
    this.type = 'Normal';
}

NormalPhone.prototype = Object.create(Phone.prototype);
NormalPhone.prototype.constructor = NormalPhone;


////Dual Sim Starts

function DualSim(num1, num2)
{
    NormalPhone.call(this, num1);
    this.number2 = num2;
}

DualSim.prototype = Object.create(NormalPhone.prototype);
DualSim.prototype.constructor = DualSim;

DualSim.prototype.call = function(num) {
    let sim = prompt("Call from Sim1 or Sim2 ?");
    if(sim == 1)
    {
        console.log(`Calling ${num} from Number ${this.number}...`);
    }
    else if(sim == 2)
    {
        console.log(`Calling ${num} from Number ${this.number2}...`);
    }
    else
    {
        console.log("Invalid option, please choose 1 or 2");
    }
}

/// Smartphone starts

function Smartphone(num)
{
    Phone.call(this, num);
    this.type = 'Smartphone';
}

Smartphone.prototype = Object.create(Phone.prototype);
Smartphone.prototype.constructor = Smartphone;

////Android Starts

function Android(num)
{
    Smartphone.call(this, num);
    this.os = 'Android';
}

Android.prototype = Object.create(Smartphone.prototype);
Android.prototype.constructor = Android;

////iOS starts

function iOS(num)
{
    Smartphone.call(this, num);
    this.os = 'iOS';
}

iOS.prototype = Object.create(Smartphone.prototype);
iOS.prototype.constructor = iOS;



let phone = new Phone('1234556');

let np = new NormalPhone("1234567");

let dp = new DualSim("9342285452" , "9487209365");

let sp = new Smartphone('567465');

let and = new Android('1234567');

let ios = new iOS('74346389');


