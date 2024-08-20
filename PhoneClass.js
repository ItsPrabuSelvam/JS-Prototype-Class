class Phone {
    constructor(num) {
        this.number = num;
    }

    call(num) {
        console.log(`Calling ${num} from Number ${this.number}...`);
    }

    message(num) {
        console.log(`Messaging ${num} from Number ${this.number}...`);
    }
}

class NormalPhone extends Phone {
    constructor(num) {
        super(num);
        this.type = 'Normal';
    }

}


class DualSim extends NormalPhone {
    constructor(num1, num2) {
        super(num1);
        this.number2 = num2;
    }

    call(num) {
        let sim = prompt("Call from Sim1 or Sim2 ?");
        if (sim == 1) {
            console.log(`Calling ${num} from Number ${this.number}...`);
        }
        else if (sim == 2) {
            console.log(`Calling ${num} from Number ${this.number2}...`);
        }
        else {
            console.log("Invalid option, please choose 1 or 2");
        }
    }

}

class Smartphone extends Phone 
{
    constructor(num) {
        super(num);
        this.type = 'Smartphone';
    }
}

class Android extends Smartphone
{
    constructor(num) {
        super(num);
        this.os = 'Android';
    }
}

class iOS extends Smartphone
{
    constructor(num) {
        super(num);
        this.os = 'iOS';
    }
}
