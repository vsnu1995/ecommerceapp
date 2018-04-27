var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
    new Product({
        imagePath: '/images/goku.jpg',
        title: 'Goku1',
        description: 'Best goku image ever',
        price: 10
    }), new Product({
        imagePath: '/images/goku.jpg',
        title: 'Goku2',
        description: 'Best goku image ever',
        price: 12
    }), new Product({
        imagePath: '/images/goku.jpg',
        title: 'Goku3',
        description: 'Best goku image ever',
        price: 13
    }), new Product({
        imagePath: '/images/goku.jpg',
        title: 'Goku4',
        description: 'Best goku image ever',
        price: 14
    }), new Product({
        imagePath: '/images/goku.jpg',
        title: 'Goku5',
        description: 'Best goku image ever',
        price: 15
    })];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err,result){
        done++;
        if(done== products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}