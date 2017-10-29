var mysql = require('mysql');
var prompt = require('prompt');
var Table = require('cli-table');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'admin',
	database: 'Bamazon',
});

var productPurchased = [];

connection.connect();

// Connect to MySql and Display Products to user

connection.query('SELECT itemId, ProductName, Price FROM Products', function(err, result){
	if(err) console.log(err);

// Create a table for Display of Products

var table = new Table({
	head: [ 'Item ID', 'Product Name', 'Department', 'Price', 'Stock']
	, colWidths: [10, 45, 40, 8, 8]
});

// Populate Table with for-loop 
for(var i = 0; i < result.length; i++){
	table.push(
		[result[i].itemId, result[i].ProductName, result[i].Price]
		);
}
console.log(table.toString());
purchase();
});

//Purchase function for User

var purchase = function(){

	// Prompt Questions to User
	var questProd = {
		properties :{
			itemId:{description: ('Please enter the ID # of the Item desired!')},
			Quantity:{description: ('How many would you like to purchase?')}
		},
	};
	prompt.start();

	// Get Response from User
	prompt.get(questProd, function(err, res){

		//Store Response in variable

		var userPurchase = {
			itemId: res.itemId,
			Quantity: res.Quantity
		};
		//Push the userPurchase to productPurchased
		productPurchased.push(userPurchase);

		//Connect to mySql database and select the item selected by the user based on Id#
		connection.query('SELECT * FROM Products WHERE itemID=?', productPurchased[0].itemID, function(err, res){
			if(err) console.log(err, 'itemID does not exist, Please verify #');

			//Verify Stock and return message to user if stock not available
			if(res[0].StockQuantity < productPurchased[0].Quantity){
				console.log('Sorry This product is OUT OF STOCK!');
				connection.end();
			// Else proceed with 
			} else if(res[0].StockQuantity >= productPurchased[0].Quantity){
				console.log('');
				console.log(productPurchased[0].Quantity + 'items purchased');
				console.log(res[0].ProductName + ' ' + res[0].Price);

				//Create a variable for the total price of items user purchased

				var totalPrice = res[0].Price * productPurchased[0].Quantity;

				//Connect to MySql and update the Database

				connection.query("UPDATE Departments SET TotalSales = ? WHERE DepartmentName = ?;", [totalPrice, res[0].DepartmentName], function(err, resultOne){
					if(err) console.log('error:' + err);
					return resultOne;
				})

				console.log ('Total:' + totalPrice);

				//variable with updated stock quantity

				var newQuantity = res[0].StockQuantity - productPurchased[0].Quantity;
				
				//Connect to mySql and update the new StockQuantity
				connection.query("UPDATE Products SET StockQuantity = " + newQuantity + "WHERE itemID = " + productPurchased[0].itemID, function(err, res){
					// if(err) throw err;
					// console.log('Problem', err);
					console.log('');
					console.log('Your order has been succesfully processed. Thank you for your Business!');
					console.log('Please check your email for confirmation.');

					connection.end();
				})
			};
		})

	})
}