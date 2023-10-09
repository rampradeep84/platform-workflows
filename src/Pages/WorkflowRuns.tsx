import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import ListView from '../Components/ListView/ListView'
import workflowRunService from '../Services/WorkflowRunService'
import WorkflowRunModel from '../Models/WorkflowRunModel'

const WorkflowRuns = () => {
  const [workflowRuns, setWorkflowRuns] =
    useState<Array<WorkflowRunModel> | null>(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // This function fetches the data from the API
    const fetchData = async () => {
      try {
        const workflowRuns = await workflowRunService().fetchWorkflowRuns()
        setWorkflowRuns(workflowRuns)
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    // Invoke the fetchData function
    fetchData().then(() => {
      console.log('Workflows fetched')
    })
  }, []) // An empty dependency array means this useEffect will run once when the component mounts

  const prepareActionButtons = (workflowRun: WorkflowRunModel) => {
    return (
      <div className="flex">
        <Link
          to={`/workflow-run-details/${workflowRun.workflowRunID}`}
          className="text-indigo-400 hover:text-indigo-300"
          title={'Restart Workflow'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
               className="w-6 h-6">
            <path fillRule="evenodd"
                  d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                  clipRule="evenodd"/>
          </svg>
        </Link>
        {
          workflowRun.status === 'running' && (
            <Link
              to={`/workflow-run-details/${workflowRun.workflowRunID}`}
              className="text-indigo-400 hover:text-indigo-300 pl-3"
              title={'Stop Workflow'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z" clipRule="evenodd" />
              </svg>
            </Link>
          )
        }
      </div>
    )
  }

  const prepareWorkflowRunCols = () => {
    return [
      {
        key: 'workflowRunID',
        type: 'id',
        label: 'Run',
      },
      {
        key: 'status',
        type: 'status',
        label: 'Status'
      },
      {
        key: 'name',
        type: 'text',
        label: 'Workflow'
      },
      {
        key: 'branchName',
        type: 'text',
        label: 'Branch'
      },
      {
        key: 'commitSHA',
        type: 'text',
        label: 'Commit'
      },
      {
        key: 'startTime',
        type: 'datetime',
        label: 'Started'
      },
      {
        key: 'duration',
        type: 'duration',
        label: 'Duration'
      }
    ]
  }

  const TITLE = 'Workflow Runs'
  const DESCRIPTION = 'Monitor Status of Workflow Runs'

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    )
  }

  return workflowRuns ? (
    <ListView
      title={TITLE}
      description={DESCRIPTION}
      cols={prepareWorkflowRunCols()}
      rows={workflowRuns}
      loading={loading}
      actions={(workflowRun: WorkflowRunModel) =>
        prepareActionButtons(workflowRun)
      }
      searchCallback={async (searchTerm: string) => {
        const filteredWorkflowRuns = await workflowRunService().fetchWorkflowRuns(searchTerm)
        setWorkflowRuns(filteredWorkflowRuns)
      }}
      hideAddButton
    />
  ) : null
}

export default WorkflowRuns
