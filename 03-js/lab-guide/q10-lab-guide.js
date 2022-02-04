var hour = (new Date()).getHours();

function morning(time) {
    if(time>=5 && time<12) {
        console.log('Good Morning');
    }
    else if(time>=12 && time<16) {
        console.log('Good Afternoon');
    }
    else if(time>=16 && time<20) {
        console.log('Good Evening');
    }
    else {
        console.log('Good Night');
    }
}

morning(hour);