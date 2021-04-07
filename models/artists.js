const Artist = require("./artist");


class Artists {
    constructor () {
        this.artists =[];

    }
    addArtist(artist = new Artist()) {
        this.artists.push(artist);
    }

    getArtists() {
        return this.artists;
    }
    deleteArtist(id = '') {
        this.artists = this.artists.filter(artist => artist.id !== id);
        return this.artists;
    }
    voteArtist (id = '') {
        this.artists = this.artists.map(artist => {
            if(artist.id === id) {
                artist.votes++;
                return artist;
            } else {
                return artist;s
            }
        })
    }
}

module.exports = Artists;