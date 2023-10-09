import { useState } from 'react'
import {
  ArrowPathRoundedSquareIcon,
  BoltIcon
} from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import { classNames } from '../../Utils';

const navigation = [
  { name: 'Workflows', href: '/', icon: BoltIcon },
  {
    name: 'Workflow Runs',
    href: '/workflow-runs',
    icon: ArrowPathRoundedSquareIcon
  }
]

export default function LayoutWithSideBar(props: { childComponent: any }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const prepareNavItems = () => {
    return navigation.map((item) => (
      <li key={item.name}>
        <NavLink
          to={item.href}
          onClick={() => setSidebarOpen(false)}
          className={(props: { isActive: boolean }) => {
            if (props.isActive) {
              return classNames(
                'bg-gray-800 text-white',
                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
              )
            } else {
              return classNames(
                'text-gray-400 hover:text-white hover:bg-gray-800',
                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
              )
            }
          }}
        >
          <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
          {item.name}
        </NavLink>
      </li>
    ))
  }

  return (
    <>
      <MobileNav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
        {prepareNavItems()}
      </MobileNav>
      <DesktopNav>{prepareNavItems()}</DesktopNav>

      <main className="lg:pl-72">
        <div className="">
          <props.childComponent />
        </div>
      </main>
    </>
  )
}
