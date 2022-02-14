// Sometimes, we are unable to defined the object at compile-time - to create the object we may require some more data available when the application runs

// Module pattern used in a way that we can create only 1 object
const jiraDashboard = (function() {
    // private property
    const widgets = [];

    // similar to above private methods may be defined

    // this will be the public API (object that is returned)
    const dashboard = {
        addWidget: function( widget ) {
            widgets.push( widget );
        }
    };

    return dashboard;
}());
