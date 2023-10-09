import LocalStorageServiceProxy from './LocalStorageServiceProxy'
import WorkflowModel from '../Models/WorkflowModel'

const WorkflowService = () => {
  return {
    fetchWorkflows(searchTerm? : string): Promise<Array<WorkflowModel>> {
      return LocalStorageServiceProxy().fetchWorkflows(searchTerm)
    },
    fetchWorkflow(workflowID: string | undefined) {
      return LocalStorageServiceProxy().fetchWorkflow(workflowID)
    }
  }
}

export default WorkflowService
