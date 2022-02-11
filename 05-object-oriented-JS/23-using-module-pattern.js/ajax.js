var WorkshopsApp = WorkshopsApp || {};

// we check is there is a Utils property in WorkshopsApp object, and if it is not there, we create a new object and assign it
WorkshopsApp.Utils = WorkshopsApp.Utils || {};

Object.assign(WorkshopsApp.Utils, (function() {
    return {
        ajax() {
            console.log( 'BASE_URL = ', WorkshopsApp.Utils.config.BASE_URL );
        }
    };
}()));