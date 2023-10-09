import Link from "next/link"

export default function Home() {
  return <>
    <header className="flex justify-between items-center mb-4 bg-slate-700 rounded-md">
      <h1 className="text-2xl pl-5">Book Tracking</h1>
      <Link href="/add" className="pr-5">Add Book</Link>
    </header>
    <div className="flex space-x-5 justify-between items-start mb-4 border-solid text-slate-950 rounded-md">
      <div className="w-1/3 p-5 bg-slate-300 rounded-md min-h-min">
        <h1>To-read</h1>
        
      </div>
      <div className="w-1/3 p-5 bg-slate-300 rounded-md min-h-min">
        <h1>In-progress</h1>
      </div>
      <div className="w-1/3 p-5 bg-slate-300 rounded-md min-h-min">
        <h1>Completed</h1>
      </div>
    </div>
  </>
}
