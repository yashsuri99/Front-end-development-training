// declare a single global object for the app (WorkshopsApp)
// let variables cannot be used before initialization
// let WorkshopsApp = WorkshopsApp;

// this code is included in the HTML second
// WorkshopsApp is an object -> the same object is used and no new object is created
var WorkshopsApp = WorkshopsApp || {};

// We declare everything as a property of this single global object
WorkshopsApp.ajax = function() {
    console.log( 'BASE_URL = ', WorkshopsApp.config.BASE_URL );
    console.log( 'BASE_URL = ' , this.config.BASE_URL );
};