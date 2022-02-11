// this code is included in the HTML first
// WorkshopsApp is undefined -> there a new object is created and assigned to WorkshopsApp
var WorkshopsApp = WorkshopsApp || {};

// config is a property of the global WorkshopsApp object
WorkshopsApp.config = {
    BASE_URL: 'http://workshops-server.herokuapp.com'
};