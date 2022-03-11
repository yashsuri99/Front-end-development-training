const Contact = ({contact}) => 
{
    return(
        <div>
            <div>
                TEL: {contact.tel};
            </div>
            <div>
                EMAILID: {contact.emailid};
            </div>
        </div>
        
    )
    
}

const Team = ({teamMembers}) => {
    const trEls = teamMembers.map((item) => {
        return(
            <div class="card container my-2 mx-2">
            {
                item.lastNameFirst ? (
                    <div>{item.lastName} , {item.firstName}</div>
                ): <div>{item.firstName} , {item.lastName}</div>
            }    
            <div>
                CEO @ {item.company};
            </div>
            <Contact contact={item.contact}></Contact>
            </div>
        )
    })
    return(
        <div>
            {trEls}
        </div>
        
    );
};

const props1 = {
    teamMembers: [
        {
            firstName: 'John',
            lastName: 'Doe',
            lastNameFirst: true,
            designation: 'CEO',
            company: 'Example1 Consulting',
            contact: {
                tel: '+001-123-456-7890',
                emailid: 'john.doe@example.com'
            } 
        },
        {
            firstName: 'Jane',
            lastName: 'Doe',
            lastNameFirst: false,
            designation: 'CEO',
            company: 'Example2 Consulting',
            contact: {
                tel: '+001-123-456-7890',
                emailid: 'jane.doe@example.com'
            } 
        },
        {
            firstName: 'Mark',
            lastName: 'Smith',
            lastNameFirst: false,
            designation: 'CEO',
            company: 'Example3 Consulting',
            contact: {
                tel: '+001-123-456-7890',
                emailid: 'mark.smith@example.com'
            } 
        },
        {
            firstName: 'Mary',
            lastName: 'Smith',
            lastNameFirst: false,
            designation: 'CEO',
            company: 'Example4 Consulting',
            contact: {
                tel: '+001-123-456-7890',
                emailid: 'mary.smith@example.com'
            } 
        }
    ],
};
ReactDOM.render(
    <React.Fragment>
        <Team {...props1}/>
    </React.Fragment>, 
    document.getElementById('root')
);