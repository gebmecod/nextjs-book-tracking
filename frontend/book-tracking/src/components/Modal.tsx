"use client"
import { useSearchParams } from "next/navigation"
import { useRef, useEffect } from "react"

type Props = {
    title: string,
    on_cancel: () => void,
    on_confirm: () => void,
    children: React.ReactNode
}

export default function Modal({ title, on_cancel, on_confirm, children }: Props) {

    const searchParams = useSearchParams()
    const modalRef = useRef<null | HTMLDialogElement>(null)
    const showModal = searchParams.get('showModal')

    useEffect(() => {
        if (showModal === 'y') {
            setTimeout(() => {
                modalRef.current?.showModal()
                
            }, 500);
        } else {
            modalRef.current?.close()
        }
    }, [showModal])

    const closeModal = () => {
        modalRef.current?.close()
        on_cancel()
    }

    const confirmModal = () => {
        on_confirm()
        closeModal()
    }

    const Modal: JSX.Element | null = showModal === 'y'
        ? (
            <dialog ref={modalRef} className="fixed top-50 left-50 -translate-x-50 -translate-y-50 z-10  rounded-xl backdrop:bg-gray-800/50">
                <div className="w-[500px] max-w-fullbg-gray-200 flex flex-col">
                    <div className="flex flex-row justify-between mb-4 pt-2 px-5 bg-yellow-400">
                        <h1 className="text-2xl">{title}</h1>
                        <button onClick={closeModal} className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-600 text-white">X</button>
                    </div>
                    <div className="px-5 pb-6">
                        {children}
                        <div className="flex flex-row justify-end mt-2">
                            <button onClick={confirmModal} className="bg-green-500 py-1 px-2 rounded border-none">
                                Add Book
                            </button>
                        </div>
                    </div>
                </div>
            </dialog>
        ) : null

  return Modal
}
