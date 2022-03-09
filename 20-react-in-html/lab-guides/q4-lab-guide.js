const register = (
    <form id="registration-form" action="/register">
        <h1 className="my-2 mx-2">Register</h1>
        <div>
            <label htmlFor="username" className="my-2 mx-2">Username</label>
            <div>
                <input type="text" id="username" className="my-2 mx-2" key="username-input"></input>
            </div>
        </div>
        <div>
            <label htmlFor="password" className="my-2 mx-2">Password</label>
            <div>
                <input type="password" id="password" className="my-2 mx-2" key="password-input" ></input>
            </div>
        </div>
        <div>
            <label htmlFor="cnf-password" className="my-2 mx-2">Confirm Password</label>
            <div>
                <input type="password" id="cnf-password" className="my-2 mx-2"></input>
            </div>
        </div>
        <button type="submit" className="mx-2">Register</button>
    </form>
)

ReactDOM.render(register,document.getElementById('root'));

setTimeout(() => {
    const login = (
        <form id="registration-form" action="/register">
            <h1 className="my-2 mx-2">Login</h1>
            <div>
                <label htmlFor="username" className="my-2 mx-2">Username</label>
                <div>
                    <input type="text" id="username" className="my-2 mx-2" key="username-input"></input>
                </div>
            </div>
            <div>
                <label htmlFor="password" className="my-2 mx-2">Password</label>
                <div>
                    <input type="password" id="password" className="my-2 mx-2" key="password-input"></input>
                </div>
            </div>
            <button type="submit" className="mx-2">Register</button>
        </form>
    );

    // React DOM creates the DOM nodes based on el1 properties, and then render the DOM
    // React DOM checks the existing DOM for the current UI
    ReactDOM.render( login, document.getElementById( 'root' ) );
}, 20000);

