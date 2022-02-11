var WorkshopsApp = WorkshopsApp || {};
WorkshopsApp.Workshops = WorkshopsApp.Workshops || {};

Object.assign(WorkshopsApp.Workshops, (function() {
    // showWorkshops() is a "private" method - it can be used by init()
    function showWorkshops() {
        console.log( 'called showWorkshops' );
    }

    function init() {
        WorkshopsApp.Utils.ajax();
        showWorkshops();
    };

    return {
        init // init: init
    };
}()));