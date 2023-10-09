from database import connection
from dataclasses import dataclass

cursor = connection.cursor()

@dataclass
class Book:
    id: int
    title: str
    status: str

class BookRepository:
    @staticmethod
    def create_book(book: Book):
        cursor.execute("INSERT INTO books (title, status) VALUES (?, 'to-read')", (book.title,))
        connection.commit()
        return book
    
    @staticmethod
    def get_book(book: Book)
        cursor.execute("SELECT * FROM books WHERE id = ?", (book.id,))
        row = cursor.fetchone()
        if row is None:
            return None
        return Book(*row)
    
    @staticmethod
    def update_book(book: Book):
        cursor.execute("UPDATE books SET status = ? WHERE id = ?", (book.status, book.id))