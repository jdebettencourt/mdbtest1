const mongoose = require('mongoose');
mongoose.connect('mongodb://it339teacher:it339teacher@ds235778.mlab.com:35778/w3testdb', {useNewUrlParser: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));