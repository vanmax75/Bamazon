DROP DATABASE IF EXISTS Bamazon;
CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE Products (
itemID int NOT NULL,
ProductName varchar(50) NOT NULL,
DepartmentName varchar(50) NOT NULL,
Price varchar (50) NOT NULL,
StockQuantity int NOT NULL);

INSERT INTO Products (itemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
19754,
'Everlast Boxing Gloves',
'Sports',
75.99,
9);

INSERT INTO Products (itemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
65489,
'Samsung S7 Mobile Phone Cover',
'Electronics',
9.99,
99);

INSERT INTO Products (itemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
27965,
'Nike Air Max Shoes- 89',
'Sports',
99.99,
45);

INSERT INTO Products (itemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
49785,
'Sony Bluetooth Headphones',
'Electronics',
54.99,
15);

INSERT INTO Products (itemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
10456,
'HP 32 inch LED Monitor',
'Electronics',
199.75,
50);

INSERT INTO Products (itemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
95310,
'HP Spectre x360 15t Premium Convertible Laptop ',
'Electronics',
945.99,
4);

INSERT INTO Products (itemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
45678,
'Egyptian Cotton King Size Bed Set',
'Home',
99.99,
15);

INSERT INTO Products (itemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
57322,
'Adidas Predator Soccer Ball',
'Sports',
19.99,
7);

INSERT INTO Products (itemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
55487,
'Tefal Teflon Casserole',
'Home',
19.99,
10);

INSERT INTO Products (itemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
33474,
'Chicago Cutlery Knife Set',
'Home',
79.99,
2);
