Hello everyone, to install this app and get the backend working:



Install dependencies

pipenv install -r requirements.txt

Type psql into your command line (If you have postgreSQL installed) and create a user and database with whatever credentials you like.

Ex:

CREATE USER treeapp WITH PASSWORD 'password' CREATEDB;

CREATE DATABASE treedev WITH OWNER treeapp;

Create a .env file based on the example with proper settings for your development environment

Make sure the PostgreSQL database connection URL is in the .env file

Get into your pipenv, migrate your database, seed your database, and run your Flask app

pipenv shell

flask db upgrade

flask seed all

flask run
