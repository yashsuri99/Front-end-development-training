const projectKickoffMeeting = {
    id = 123,
    name: 'Project Kickoff',
    date: "31-01-2022",
    startTime: {
        hh: '16',
        mm: '30'
    },
    endTime: {
        hh: '17',
        mm: '30'
    },
    description: 'Agenda of the meeting',
    attendees: [
        {   
            name: 'John Doe',
            email: 'john@example.com'
        },
        {   
            name: 'Mark Doe',
            email: 'mark@example.com'
        }
    ],
}

console.log ( projectKickoffMeeting );