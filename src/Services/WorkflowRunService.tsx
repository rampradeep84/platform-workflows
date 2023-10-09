import LocalStorageServiceProxy from './LocalStorageServiceProxy'
import WorkflowRunModel, {
  calculateRunDuration
} from '../Models/WorkflowRunModel'

const WorkflowRunService = () => {
  return {
    fetchWorkflowRuns: async (searchTerm?: string): Promise<Array<WorkflowRunModel>> => {
      return LocalStorageServiceProxy()
        .fetchWorkflowRuns(searchTerm)
          .then((workflowRuns) => {
          workflowRuns.forEach((workflowRun) => {
            calculateRunDuration(workflowRun)
          })
          return workflowRuns
        })
    },
    fetchWorkflowRunDetail: async (
      workflowRunID: string | undefined
    ): Promise<WorkflowRunModel | undefined> => {
      return LocalStorageServiceProxy()
        .fetchWorkflowRun(workflowRunID)
        .then((workflowRun) => {
          if (workflowRun) {
            calculateRunDuration(workflowRun)
            return workflowRun
          } else {
            throw new Error('Workflow run not found')
          }
        })
    }
  }
}

export default WorkflowRunService
