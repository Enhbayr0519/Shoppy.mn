-- Create table 
DROP DATABASE IF EXISTS db_sql_tutorial;
CREATE DATABASE db_sql_tutorial;
USE db_sql_tutorial;

-- Create table customers 
DROP TABLE IF EXISTS db_sql_tutorial.customers;
CREATE TABLE db_sql_tutorial.customers (
	customer_id INT(10) NOT NULL,
    first_name 	VARCHAR(50) NULL,
    last_name  	VARCHAR(50) NULL,
    country    	VARCHAR(50) NULL,
	score    	INT(32) NULL,
    PRIMARY KEY (customer_id)
);

-- Insert customer data
INSERT INTO db_sql_tutorial.customers VALUES (1, 'Maria', 'Cramer', 'Germany', 450);
INSERT INTO db_sql_tutorial.customers VALUES (2, 'John', 'Steel', 'USA', 900);
INSERT INTO db_sql_tutorial.customers VALUES (3, 'Gerog', 'Pipps', 'UK', 750);
INSERT INTO db_sql_tutorial.customers VALUES (4, 'Martin', 'Muller', 'Germany', 500);
INSERT INTO db_sql_tutorial.customers VALUES (5, 'Peter', 'Franken', 'Germany'2 Null);

-- Create table orders
DROP TABLE IF EXISTS db_sql_tutorial.orders;
CREATE TABLE db_sql_tutorial.orders (
	order_id int(10) NOT NULL,
    customer_id int(10) NULL,
	order_date DATE NULL,
    quantity int(32) NULL,
    PRIMARY KEY (order_id)
);

-- Insert orders data
INSERT INTO db_sql_tutorial.orders VALUES (1001, 1, '2021-01-11', 250);
INSERT INTO db_sql_tutorial.orders VALUES (1002, 2, '2021-04-05', 1150);
INSERT INTO db_sql_tutorial.orders VALUES (1003, 3, '2021-06-18', 500);
INSERT INTO db_sql_tutorial.orders VALUES (1004, 4, '2021-08-31', 750);

-- Create table employees
DROP TABLE IF EXISTS db_sql_tutorial.employees;
CREATE TABLE db_sql_tutorial.employees (
	emp_id      int(10) NOT NULL,
    first_name  VARCHAR(50) NULL,
    last_name  VARCHAR(50) NULL,
    emp_country  VARCHAR(50) NULL,
    salary  int(32) NULL,
    PRIMARY KEY(emp_id)
);

-- Insert employees data
INSERT INTO db_sql_tutorial.employees VALUES (1, 'John', 'Steel', 'USA', 55000);
INSERT INTO db_sql_tutorial.employees VALUES (2, 'Ann', 'Labrune', 'France', 75000);
INSERT INTO db_sql_tutorial.employees VALUES (3, 'Marie', 'Bertrand', 'Brazil', 75000);
INSERT INTO db_sql_tutorial.employees VALUES (4, 'Georg', 'Afonso', 'UK', 75000);
INSERT INTO db_sql_tutorial.employees VALUES (5, 'Marie', 'Steel', 'UK', 75000);