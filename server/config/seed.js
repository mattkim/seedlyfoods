/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Product = require('../api/product/product.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test',
    customerType: 'admin'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin',
    customerType: 'admin'
  }, {
    provider: 'local',
    role: 'user',
    name: 'Buyer',
    email: 'buyer@buyer.com',
    password: 'buyer',
    customerType: 'buyer'
  }, {
    provider: 'local',
    role: 'user',
    name: 'Seller',
    email: 'seller@seller.com',
    password: 'seller',
    customerType: 'seller'
  }, function() {
      console.log('finished populating users');

      User.find({name:'Seller'}, function(err, users){
        var seller = users[0];

        Product.find({}).remove(function(){
          Product.create({
            seller:seller._id,
            name:'Shrimp Fried Rice',
            description:'The best shrimp fried rice in the world',
            active: true,
            imgurl:'https://seedlyfoods.s3.amazonaws.com/e2c8873d-9add-45e5-bbf5-4c13745cb9a3-friedrice.jpg',
            offers:[{
              type:'instant',
              price:100,
              unit:'lb',
              quantity:100,
              avails:[{
                startDate: new Date(1439070053000),
                endDate: new Date(),
              }]
            }]
          }, {
            seller:seller._id,
            name:'Green Curry Chicken',
            description:'The best green curry chicken in the world',
            active: true,
            imgurl:'https://seedlyfoods.s3.amazonaws.com/68958b30-d315-422f-93f7-0bf4da617b92-greencurry.jpg',
            offers:[{
              type:'instant',
              price:100,
              unit:'lb',
              quantity:100,
              avails:[{
                startDate: new Date(1439070053000),
                endDate: new Date(),
              }]
            }]
          });
        });
      });
    }
  );
});