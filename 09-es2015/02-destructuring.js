const weekDays = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
]

// const first = weekDays[0] , second = weekDays[1], fifth = weekDays[4];
const [first,second, , ,fifth,sixth='Holiday'] = weekDays;
console.log(first,second,fifth);