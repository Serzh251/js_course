
"use strict";
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

const post1 = new Post("Jonh", "ipsum lorem", new Date());
post1.edit("565656");


class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}


const attach1 = new AttachedPost("Alex", "lorem ipsum", new Date());
attach1.makeTextHighlighted();
attach1.edit("hello");