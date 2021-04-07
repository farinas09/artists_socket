const { v4: uuid } = require( "uuid");

class Artist {

    constructor (name='no name') {
        this.id = uuid();
        this.name = name;
        this.votes = 0;
    }
}
module.exports = Artist;