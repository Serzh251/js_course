"use strict";
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}


Post.prototype.edit = function (text) {
    this.text = text;
}

const post1 = new Post("Jonh", "ipsum lorem", new Date());
post1.edit("565656");


function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;


AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}


const attach1 = new AttachedPost("Alex", "lorem ipsum", new Date());
attach1.makeTextHighlighted();
attach1.edit("hello");