from database import connection
from dataclasses import dataclass, field
from pydantic import BaseModel

cursor = connection.cursor()

@dataclass
class Book(BaseModel):
    id: int
    title: str
    status: str = field(default="to-read")

class BookRepository:

    #create a book
    @staticmethod
    def create_book(book: Book):
        cursor.execute("INSERT INTO books (title, status) VALUES (%s, 'to-read')", (book.title,))
        connection.commit()
        return book

    #get all books
    @staticmethod
    def get_all_book():
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM books")
        books = cursor.fetchall()
        return books
    
    @staticmethod
    def search_book(book_id: int):
        cursor.execute("SELECT * FROM books WHERE id = %s", (book_id,))
        row = cursor.fetchone()
        if row is None:
            return None
        return Book(*row)
    
    #update book status
    @staticmethod
    def update_book(book: Book):
        cursor.execute("UPDATE books SET status = %s WHERE id = %s ", (book.status, book.id,))
        connection.commit()
        return book
    
    #delete book
    @staticmethod
    def delete_book(book_id: int):
        cursor.execute("DELETE FROM books WHERE id = %s", (book_id,))
        connection.commit()
