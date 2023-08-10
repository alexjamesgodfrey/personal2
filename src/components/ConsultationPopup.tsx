import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { InlineWidget } from 'react-calendly'

interface Props {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function ConsultationPopup({ isOpen, setIsOpen }: Props) {
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4 text-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left  align-middle shadow-xl transition-all dark:bg-zinc-900 dark:ring-zinc-300/20">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 dark:text-white"
                >
                  Schedule a Web Development Consultation
                </Dialog.Title>
                <div className="mt-2 mb-6">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    From developing fully-fledged APIs and dynamic web
                    applications to building static websites, I can help you
                    with your web development needs. Whether you need help
                    planning a project or revamping an old one, you can schedule
                    a free consultation to discuss your project.
                    <br />
                    <br />
                    You can always reach me at me@alexgodfrey.com or (716)
                    237-0126.
                  </p>
                </div>

                <InlineWidget url={process.env.NEXT_PUBLIC_CALENDLY_LINK} />

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
