import {
  bootstrapWorkflowsData,
  bootstrapWorkflowRunsData
} from './bootstrapData'
import WorkflowModel from '../Models/WorkflowModel'
import WorkflowRunModel from '../Models/WorkflowRunModel'

const LocalStorageServiceProxy = () => {
  return {
    async fetchWorkflows(searchTerm?: string): Promise<Array<WorkflowModel>> {
      return searchTerm ? bootstrapWorkflowsData.filter((data) =>
        data.name?.toLowerCase().includes(searchTerm.toLowerCase())) : bootstrapWorkflowsData
    },
    async fetchWorkflowRuns(searchTerm?: string): Promise<Array<WorkflowRunModel>> {
      return searchTerm ? bootstrapWorkflowRunsData.filter((data) =>
        data.name?.toLowerCase().includes(searchTerm.toLowerCase())) : bootstrapWorkflowRunsData
    },
    async fetchWorkflowRun(
      workflowRunID: string | undefined
    ): Promise<WorkflowRunModel | undefined> {
      return bootstrapWorkflowRunsData.find(
        (workflowRun) => workflowRun.workflowRunID === workflowRunID
      )
    },
    async fetchWorkflow(
      workflowID: string | undefined
    ): Promise<WorkflowModel | undefined> {
      return bootstrapWorkflowsData.find(
        (workflow) => workflow.workflowID === workflowID
      )
    },
  }
}

export default LocalStorageServiceProxy
