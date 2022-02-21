interface Iclock {
    hours: number,
    minutes: number,
    seconds: number
    setTime: (hours: number, minutes: number, seconds: number) => void,
    getTime: () => string;
}

const digital : Iclock = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    setTime(hours: number, minutes: number, seconds: number) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    },
    getTime() {
        return(`${this.hours}:${this.minutes}:${this.seconds}`)
    },
};

const analog : Iclock = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    setTime(hours: number, minutes: number, seconds: number) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    },
    getTime() {
        return(`${this.hours}:${this.minutes}:${this.seconds}`)
    },
};

digital.setTime(23,10,10);
let result: string = digital.getTime();

analog.setTime(10,10,10);
let result1: string = analog.getTime();
console.log(result);
console.log(result1);

export {};