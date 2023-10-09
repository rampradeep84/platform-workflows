import React from "react"
import debounce from 'lodash/debounce'
import { generateKey } from '../../Utils'
import {renderIDLinkCell, renderStatusCell} from './ListCellFormatter'


const renderCell = (item: any, col: any) => {
  switch (col.type) {
    case 'status':
      return renderStatusCell(item, col)
    case 'id':
      return renderIDLinkCell(item, col)
  }
  return item[col.key]
}

interface ListViewProps {
  rows: any[]
  cols: any[]
  title: string
  description: string
  addButtonTitle?: string
  addButtonCallback?: () => void
  hideAddButton?: boolean
  loading?: boolean
  actions?: (item: any) => JSX.Element
  searchCallback?: (pattern: string) => void
}

export default function ListView(props: ListViewProps) {
  const rows = props.rows
  const cols = props.cols
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl">
        <div className="bg-gray-800 py-0">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-white">
                  {props.title}
                </h1>
                <p className="mt-2 text-sm text-gray-300">
                  {props.description}
                </p>
              </div>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg sm:py-5">
                <div className="p-0">
                  <label htmlFor="table-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="table-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => {
                          //debounce the search callback
                          debounce((term: string) =>
                            props.searchCallback && props.searchCallback(term), 500)(e.target.value)
                      }}
                      placeholder={`Search for ${props.title}`}
                    />
                  </div>
                </div>
              </div>
              {props.hideAddButton ? null : (
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                  <button
                    type="button"
                    className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    onClick={props.addButtonCallback}
                  >
                    {props.addButtonTitle || 'Add'}
                  </button>
                </div>
              )}
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        {cols && cols.length ? (
                          <th
                            key={cols[0].id || generateKey('list-th')}
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
                          >
                            {cols[0].label}
                          </th>
                        ) : null}
                        {cols && cols.length > 1
                          ? cols.slice(1).map((col: any) => (
                              <th
                                key={col.id || generateKey('list-th')}
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                              >
                                {col.label}
                              </th>
                            ))
                          : null}
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                        ></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {rows.map((row: any) => (
                        <tr key={row.id || generateKey('list-tr')}>
                          {cols && cols.length ? (
                            <td
                              key={cols[0].id || generateKey('list-td')}
                              className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0"
                            >
                              {renderCell(row, cols[0])}
                            </td>
                          ) : null}
                          {cols && cols.length > 1
                            ? cols.slice(1).map((col: any) => (
                                <td
                                  key={col.id || generateKey('list-td')}
                                  className="whitespace-nowrap px-3 py-4 text-sm text-gray-300"
                                >
                                  {renderCell(row, col)}
                                </td>
                              ))
                            : null}
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                            {props.actions ? props.actions(row) : null}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
