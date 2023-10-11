import mysql.connector

# create a connection to the MySQL server
connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="password",
    database="book_tracking",
)
