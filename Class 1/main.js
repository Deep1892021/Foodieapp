// // Runs when HTML file is loaded
//  $('#user-email').on('input',function() {
//         var email = $('#user-email').val()
//         var message = 'Welcome Back, ' + email;
//         $('.welcome-message').text(message);
//     });

var foodieApp = angular.module('foodieApp',['ngRoute']);
foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
})


foodieApp.controller('mainController',function($scope) {
$scope.restaurants = [{
	name: 'Swisserot',
	address: '28-B, 1st Floor , Phase-3, Mohali',
	location: 'Mohali',
	category: 'Special Dining',
	vote: '4.2',
	cuisines: 'Bis Swiss',
	cost: '1800',
	hours: '6 PM to 1 AM (Mon Closed)',
	image: 'https://images.pexels.com/photos/253580/pexels-photo-253580.jpeg?h=350&auto=compress&cs=tinysrgb',
},
{
	name: 'Dominoz',
	address: '12/13, Round Market, Ambala',
	location: 'Ambala Cantt',
	category: 'Snacky',
	vote: '4.8',
	cuisines: ' Double Cheese Pizza',
	cost: '799',
	hours: '12 Noon to 2 AM (Everyday)',
	image: 'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?w=940&h=650&auto=compress&cs=tinysrgb',
},
{
	name: 'Pizza Hut',
	address: '#12, 3rd Floor, New Mall, Zirakpur',
	location: 'Zirakpur',
	category: 'Snacky n Spicy',
	vote: '4.5',
	cuisines: 'Hutter Pizza',
	cost: '849',
	hours: '11 AM to 1 AM (Daily)',
	image: 'https://thumb9.shutterstock.com/display_pic_with_logo/3837956/583585405/stock-photo-pizza-pepperoni-this-picture-is-perfect-for-you-to-design-your-restaurant-menus-visit-my-page-583585405.jpg',
},
{
	name: 'Sagarika',
	address: '31, NH-1, near factory stores, Ambala-Delhi Highway',
	location: 'Shahpur',
	category: 'Casual Dining, Bar',
	vote: '4.1',
	cuisines: 'Lunchify',
	cost: '1275',
	hours: '12 Noon to 4 PM (Everyday)',
	image: 'https://images.pexels.com/photos/461326/pexels-photo-461326.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
},
{
	name: 'Celebration',
	address: 'Store 32, NH-63, Kardhan',
	location: 'Mahesh Nagar',
	category: 'Casual Dining, Club',
	vote: '4.4',
	cuisines: 'Kimo Drink',
	cost: '390',
	hours: '7 PM to 2 AM (Tuesday Closed)',
	image: 'https://images.pexels.com/photos/5249/bread-food-restaurant-people.jpg?w=940&h=650&auto=compress&cs=tinysrgb',
},
{
	name: 'Indo-Spice',
	address: 'Level 1, Near Gandhi Ground, Indra Chowk',
	location: 'Canttonment',
	category: ' Yummy Brekfast',
	vote: '4.5',
	cuisines: 'Indo ButterMilk',
	cost: '120',
	hours: '6 AM to 11 PM (Daily)',
	image: 'https://images.pexels.com/photos/46520/milk-glass-frisch-healthy-46520.jpeg?h=350&auto=compress&cs=tinysrgb',
},
{
	name: 'Subway',
	address: 'Shop-1, Block B, Galaxy, Ropar',
	location: 'Punjab',
	category: 'Snacky',
	vote: '4.6',
	cuisines: 'Mega Burger',
	cost: '220',
	hours: '11 AM to 11 PM (Mon Closed)',
	image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
},
{
	name: 'Khan Foods',
	address: '35, Sector-32A, Chandigarh',
	location: 'Chandigarh',
	category: 'Evening Special, Bar',
	vote: '4.4',
	cuisines: 'Evener',
	cost: '430',
	hours: '4 PM to 8 PM (Mon-Sun)',
	image: 'https://images.pexels.com/photos/162993/food-thai-spicy-asian-162993.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
}]
})

foodieApp.controller('loginController',function($scope,$location) {
	$scope.goToHome = function() {
		// console.log('Do Something')
		$location.url('home')
	}
})


foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	$scope.restaurantId = $routeParams.id;
	var restaurants = [{
	name: 'Swisserot',
	address: '28-B, 1st Floor , Phase-3, Mohali',
	location: 'Mohali',
	category: 'Special Dining',
	vote: '4.2',
	cuisines: 'Bis Swiss',
	cost: '1800',
	hours: '6 PM to 1 AM (Mon Closed)',
	image: 'https://images.pexels.com/photos/253580/pexels-photo-253580.jpeg?h=350&auto=compress&cs=tinysrgb',
},
{
	name: 'Dominoz',
	address: '12/13, Round Market, Ambala',
	location: 'Ambala Cantt',
	category: 'Snacky',
	vote: '4.8',
	cuisines: ' Double Cheese Pizza',
	cost: '799',
	hours: '12 Noon to 2 AM (Everyday)',
	bestDish: {
	 name: 'Corn Pizza',
	 image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
              },
	image: 'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?w=940&h=650&auto=compress&cs=tinysrgb',
},
{
	name: 'Pizza Hut',
	address: '#12, 3rd Floor, New Mall, Zirakpur',
	location: 'Zirakpur',
	category: 'Snacky n Spicy',
	vote: '4.5',
	cuisines: 'Hutter Pizza',
	cost: '849',
	hours: '11 AM to 1 AM (Daily)',
	image: 'https://thumb9.shutterstock.com/display_pic_with_logo/3837956/583585405/stock-photo-pizza-pepperoni-this-picture-is-perfect-for-you-to-design-your-restaurant-menus-visit-my-page-583585405.jpg',
},
{
	name: 'Sagarika',
	address: '31, NH-1, near factory stores, Ambala-Delhi Highway',
	location: 'Shahpur',
	category: 'Casual Dining, Bar',
	vote: '4.1',
	cuisines: 'Lunchify',
	cost: '1275',
	hours: '12 Noon to 4 PM (Everyday)',
	image: 'https://images.pexels.com/photos/461326/pexels-photo-461326.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
},
{
	name: 'Celebration',
	address: 'Store 32, NH-63, Kardhan',
	location: 'Mahesh Nagar',
	category: 'Casual Dining, Club',
	vote: '4.4',
	cuisines: 'Kimo Drink',
	cost: '390',
	hours: '7 PM to 2 AM (Tuesday Closed)',
	image: 'https://images.pexels.com/photos/5249/bread-food-restaurant-people.jpg?w=940&h=650&auto=compress&cs=tinysrgb',
},
{
	name: 'Indo-Spice',
	address: 'Level 1, Near Gandhi Ground, Indra Chowk',
	location: 'Canttonment',
	category: ' Yummy Brekfast',
	vote: '4.5',
	cuisines: 'Indo ButterMilk',
	cost: '120',
	hours: '6 AM to 11 PM (Daily)',
	image: 'https://images.pexels.com/photos/46520/milk-glass-frisch-healthy-46520.jpeg?h=350&auto=compress&cs=tinysrgb',
},
{
	name: 'Subway',
	address: 'Shop-1, Block B, Galaxy, Ropar',
	location: 'Punjab',
	category: 'Snacky',
	vote: '4.6',
	cuisines: 'Mega Burger',
	cost: '220',
	hours: '11 AM to 11 PM (Mon Closed)',
	image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
},
{
	name: 'Khan Foods',
	address: '35, Sector-32A, Chandigarh',
	location: 'Chandigarh',
	category: 'Evening Special, Bar',
	vote: '4.4',
	cuisines: 'Evener',
	cost: '430',
	hours: '4 PM to 8 PM (Mon-Sun)',
	image: 'https://images.pexels.com/photos/162993/food-thai-spicy-asian-162993.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
	}]
	$scope.restaurant = restaurants[$routeParams.id - 1];
	$scope.ingredients = [];
	$scope.getIngredients = function(url) {
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	$http({
		'method': 'POST',
		'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
		'headers': {
			'Authorization': 'Key c0826acb3bd94fd2aad71b87591978f0',
			'Content-Type': 'application/json'
		},
		'data': data
	}).then(function (response) {
			var ingredients = response.data.outputs[0].data.concepts;
				for (var i =0;i < ingredients.length;i++) {
				 $scope.ingredients.push(ingredients[i].name);
				}
    		// $('.ingredients').html(list);
    		console.log(list);
        }, function (xhr) {
        	console.log(xhr);
        })
     }
})



