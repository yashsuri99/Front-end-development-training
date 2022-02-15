/**
 * Creation of similar objects based on information available at runtime
 */
// Base class
function Issue( summary, components, description ) {
    this.summary = summary;
    this.components = components;
    this.description = description;
}

// Derived class 1
function Story( summary, components, description, storyId ) {
    Issue.call( this, summary, components, description );
    
    this.storyId = storyId;
}

Story.prototype.__proto__ = Issue.prototype;

// Derived class 2
function Epic( summary, components, description, epicName ) {
    Issue.call( this, summary, components, description );
    
    this.epicName = epicName;
}

Epic.prototype.__proto__ = Issue.prototype;

// Derived class 3
function Defect( summary, components, description ) {
    Issue.call( this, summary, components, description );
}

Defect.prototype.__proto__ = Issue.prototype;

/**
 * Creates an issue instance of provided type
 * @param {*} type 'story' | 'epic' | 'defect'
 * @param {*} data data to initialize the instance
 */
function factory( type, data ) {
    let instance;

    switch( type ) {
        case 'story':
            instance = new Story( data.summary, data.components, data.description, data.storyId );
            break;
        case 'epic':
            instance = new Epic( data.summary, data.components, data.description, data.epicName );
            break;
        case 'defect':
            instance = new Defect( data.summary, data.components, data.description );
            break;
    }

    return instance;
}

const formData = {
    epicName: 'Milestone 3',
    summary: 'Design pattern, good practices implementation',
    components: [],
    description: 'lorem'
};

const issue = factory( 'epic', formData );

console.log( issue );