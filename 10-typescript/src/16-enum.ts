// enum defines a type with some contents
enum Level {
    Basic = "Basic",
    Intermediate = "Intermediate",
    Advance = "Advanced"
};

let workshopLevel = Level.Basic;
console.log('workshopLevel = ', workshopLevel);

interface IWorkshop {
    name: string,
    level: Level
}

const reactWorkshop: IWorkshop = {
    name: 'React JS Workshop',
    level: Level.Intermediate
}

console.log(reactWorkshop)

enum Period {
    All = 'all',
    Past = 'past',
    Present = 'present',
    Future = 'future'
} 

interface ISearchMeeting {
    period: Period
    search: string
}

let meetingPeriod = Period.All;
console.log('meetingPeriod =', meetingPeriod);

const meeting: ISearchMeeting = {
    period: Period.Past,
    search: 'MeetingName'
}

export {

}