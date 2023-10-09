import ListView from '../Components/ListView/ListView'
import workflowService from '../Services/WorkflowService'
import { useEffect, useState } from 'react'
import WorkflowModel from '../Models/WorkflowModel'

const Workflows = () => {
  const [workflows, setWorkflows] = useState<Array<WorkflowModel> | null>(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // This function fetches the data from the API
    const fetchData = async () => {
      try {
        const workflows = await workflowService().fetchWorkflows()
        setWorkflows(workflows)
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

  const prepareWorkflowCols = () => {
    return [
      {
        key: 'name',
        type: 'text',
        label: 'Name'
      },
      {
        key: 'version',
        type: 'text',
        label: 'Version'
      },
      {
        key: 'trigger',
        type: 'text',
        label: 'Trigger'
      },
      {
        key: 'team',
        type: 'text',
        label: 'Team'
      },
      {
        key: 'updatedBy',
        type: 'avatar',
        label: 'Updated By'
      },
      {
        key: 'updatedAt',
        type: 'datetime',
        label: 'Updated At'
      }
    ]
  }

  const TITLE = 'Workflows'
  const DESCRIPTION = 'Manage your Workflow Definitions'

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    )
  }

  return workflows ? (
    <ListView
      title={TITLE}
      description={DESCRIPTION}
      cols={prepareWorkflowCols()}
      rows={workflows}
      loading={loading}
      addButtonTitle="Create Workflow"
      addButtonCallback={() => {
        alert('Coming soon!')
      }}
      searchCallback={async(searchTerm: string) => {
        const filteredWorkflowRuns = await workflowService().fetchWorkflows(searchTerm)
        setWorkflows(filteredWorkflowRuns)
      }
      }
    />
  ) : null
}

export default Workflows
