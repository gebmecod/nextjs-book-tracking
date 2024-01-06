'use client'
import Link from "next/link"
import Modal from "@/components/Modal"
import { useRouter } from "next/navigation"
import book from "../api/book"

export default function Home() {

  const router = useRouter()

  async function on_close() {
    router.back() 
    console.log("closed")
  }

  async function on_confirm() {
    add_book()
    console.log(process.env.NEXT_PUBLIC_API_URL)
  }

  // async function add_book(title: string) {
  //   const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/books', {
  //     method: 'POST',
  //     body  : JSON.stringify({ 
  //       title: title 
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  // }

  const create_book = async () => {
    const response = await book.get('api/books/');
    console.log(response.data)
  } 

  const add_book = async () => {
    const response = await book.post('api/books/', {
      id: 0,
      title: 'test'
    });
    console.log(response.data)
  }

  return (
    <>

      <Modal title="Add Book" on_cancel={on_close} on_confirm={on_confirm}>
        <input type="text" placeholder="Enter Book Title" className="pl-5 h-10 bg-slate-200 w-full"/>
      </Modal>
      
      <div className="bg-[#1D2125]">
        <div className="flex justify-between items-center py-2 px-5 m-0 p-0 h-[50px]">
          
        </div>
      </div>

      <div className="flex justify-between h-screen">
        <div className="bg-slate-700 w-[260px]">
          
        </div>
        <div className="container mx-auto mr-0">
          <header className="flex justify-between items-center mb-4 bg-slate-700 h-[50px] opacity-80 font-sans font-bold">
            <h1 className="text-2xl pl-5">Book Tracking</h1>
            <Link href="/?showModal=y" className="pr-5 transition ease-out duration-500">Add Book</Link>
          </header>
          <div className="flex space-x-5 justify-between items-start mb-4 border-solid text-slate-950 rounded-md ml-5 mr-5">
            

            <div className="w-1/3 p-5 bg-slate-300 rounded-md min-h-min">
              <div className="border-slate-500">
                <h1>To-read</h1>
              </div>
              <div>
                
              </div>
        
            </div>


            <div className="w-1/3 p-5 bg-slate-300 rounded-md min-h-min">
              <h1>In-progress</h1>
            </div>


            <div className="w-1/3 p-5 bg-slate-300 rounded-md min-h-min">
              <h1>Completed</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
