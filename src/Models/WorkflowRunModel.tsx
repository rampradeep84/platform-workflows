import moment from "moment";

interface WorkflowRunModel{
  workflowRunID: string | undefined
  workflowID: string
  name: string
  status: string
  startTime: string
  endTime: string
  duration?: string
  logsLink: string
  branchName: string
  commitSHA: string
}

export const calculateRunDuration = (workflowRun: WorkflowRunModel) => {
  const duration = moment.duration(
    moment(workflowRun.endTime || new Date()).diff(
      moment(workflowRun.startTime)
    )
  )
  workflowRun.duration =
    duration.get('hours') + 'h ' + duration.get('minutes') + 'm'
}

export default WorkflowRunModel
