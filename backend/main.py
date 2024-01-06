from fastapi import FastAPI, HTTPException
from models import Book, BookRepository
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/api/books/")
def get_book():
    book = BookRepository.get_all_book()
    return book

@app.get("/api/books/{book_id}")
def search_book(book_id: int):
    book = BookRepository.search_book(book_id)
    if book is None:
        raise HTTPException(status_code=404, detail="Book not found")
    return book

@app.post("/api/books/")
def create_book(book: Book):
    return BookRepository.create_book(book)

@app.put("/api/books/")
def update_book(book: Book):
    return BookRepository.update_book(book)

@app.delete("/api/books/{book_id}")
def delete_book(book_id: int):
    return BookRepository.delete_book(book_id)