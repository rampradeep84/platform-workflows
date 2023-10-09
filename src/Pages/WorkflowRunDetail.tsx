import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import { classNames } from '../Utils'
import WorkflowRunModel from '../Models/WorkflowRunModel'
import workflowRunService from '../Services/WorkflowRunService'
import workflowService from '../Services/WorkflowService'
import WorkflowModel from '../Models/WorkflowModel'
import WorkflowBuilder from '../Components/WorkflowBuilder/WorkflowBuilder'

export default function WorkflowRunDetail(props: any) {
  const [workflowRun, setWorkflowRun] = useState<WorkflowRunModel | undefined>(
    undefined
  )
  const [workflow, setWorkflow] = useState<WorkflowModel | undefined>(undefined)
  const { workflowRunID } = useParams<{ workflowRunID: string }>()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // This function fetches the data from the API
    const fetchData = async () => {
      try {
        const workflowRun = await workflowRunService().fetchWorkflowRunDetail(
          workflowRunID
        )
        const workflow = await workflowService().fetchWorkflow(
          workflowRun?.workflowID
        )
        setWorkflowRun(workflowRun)
        setWorkflow(workflow)
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    // Invoke the fetchData function
    fetchData().then(() => {
      console.log('Workflow detail fetched')
    })
  }, []) // An empty dependency array means this useEffect will run once when the component mounts

  const stats = [
    { name: 'Duration', value: workflowRun?.duration },
    { name: 'Started', value: moment(workflowRun?.startTime).fromNow() },
    { name: 'Branch', value: workflowRun?.branchName },
    { name: 'Commit', value: workflowRun?.commitSHA }
  ]

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    )
  }
   return !loading && workflowRun ? (
      <div className="bg-gray-800">
        <div className="xl:pl-0">
          <main>
            <header>
              {/* Heading */}
              <div
                className="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-700/10 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
                <div>
                  <div className="flex items-center gap-x-3">
                    <div className="flex-none rounded-full bg-green-400/10 p-1 text-green-400">
                      <div className="h-2 w-2 rounded-full bg-current"/>
                    </div>
                    <h1 className="flex gap-x-3 text-base leading-7">
                      <span className="font-semibold text-white">
                        {workflow?.team}
                      </span>
                      <span className="text-gray-600">/</span>
                      <span className="font-semibold text-white">
                        {workflow?.name}
                      </span>
                    </h1>
                  </div>
                  <p className="mt-2 text-xs leading-6 text-gray-400">
                    Triggered via {workflow?.trigger}
                  </p>
                </div>
                <div
                  className="order-first flex-none rounded-full bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30 sm:order-none">
                  Production
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 bg-gray-700/10 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, statIdx) => (
                  <div
                    key={stat.name}
                    className={classNames(
                      statIdx % 2 === 1
                        ? 'sm:border-l'
                        : statIdx === 2
                          ? 'lg:border-l'
                          : '',
                      'border-t border-white/5 py-6 px-4 sm:px-6 lg:px-8'
                    )}
                  >
                    <p className="text-sm font-medium leading-6 text-gray-400">
                      {stat.name}
                    </p>
                    <p className="mt-2 flex items-baseline gap-x-2">
                      <span className="text-2xl sm:text-xl font-semibold tracking-tight text-white">
                        {stat.value}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </header>
            {/* Workflow Steps visualization*/}
            <h2 className="bg-gray-800 flex gap-x-3 text-base leading-7 my-3 ml-8">
              <span className="font-semibold text-white">Workflow Steps</span>
            </h2>
            <div className="bg-gray-800 px-4 py-4 sm:px-6 lg:px-8">
              <WorkflowBuilder readonly/>
            </div>
          </main>
        </div>
      </div>
    ) : null
}
