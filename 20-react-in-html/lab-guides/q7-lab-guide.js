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

const BussinessCard = ({firstName,lastName,lastNameFirst,designation,company,contact}) => {
    return(
        <div class="card container my-2 mx-2" key={contact.emailid}>
            {
                lastNameFirst ? (
                    <div>{lastName} , {firstName}</div>
                ): <div>{firstName} , {lastName}</div>
            }    
            <div>
                CEO @ {company};
            </div>
            <Contact contact={contact}></Contact>
        </div>
    )
}

const props1 = {
    firstName: 'John',
    lastName: 'Doe',
    lastNameFirst: true,
    designation: 'CEO',
    company: 'Example Consulting',
    contact: {
        tel: '+001-123-456-7890',
        emailid: 'john.doe@example.com' 
    }
};

const props2 = {
    firstName: 'Jane',
    lastName: 'Doe',
    lastNameFirst: false,
    designation: 'CEO',
    company: 'Example Consulting',
    contact: {
        tel: '+001-123-456-7890',
        emailid: 'jane.doe@example.com' 
    }
}

ReactDOM.render(
    <React.Fragment>
        <BussinessCard {...props1}/>
        <BussinessCard {...props2}/>
    </React.Fragment>,
    document.getElementById('root')
);