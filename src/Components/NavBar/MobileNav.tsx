import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const MobileNav = (props: any) => (
  <>
    <Transition.Root show={props.sidebarOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 lg:hidden"
        onClose={props.setSidebarOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/80" />
        </Transition.Child>

        <div className="fixed inset-0 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button
                    type="button"
                    className="-m-2.5 p-2.5"
                    onClick={() => props.setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQggcwGe-xY7qPayjonVXiUTVAuc25C-Ff9-A&usqp=CAU"
                    alt="Coupang"
                  />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {props.children}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
    <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
        onClick={() => props.setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <a href="#">
        <span className="sr-only">Your profile</span>
        <img
          className="h-8 w-8 rounded-full bg-gray-800"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </a>
    </div>
  </>
)

export default MobileNav
