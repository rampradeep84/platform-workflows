import WorkflowModel from '../Models/WorkflowModel'
import WorkflowRunModel from '../Models/WorkflowRunModel'

export const bootstrapWorkflowRunsData: Array<WorkflowRunModel> = [
  {
    workflowRunID: '11251',
    workflowID: 'W001',
    name: 'Frontend-Deployment',
    status: 'success',
    startTime: '2023-10-01 08:35:00',
    endTime: '2023-10-01 09:05:00',
    logsLink: 'http://logs.example.com/run/11251',
    branchName: 'feature/new-ui',
    commitSHA: 'abc123fgh456'
  },
  {
    workflowRunID: '11252',
    workflowID: 'W001',
    name: 'Frontend-Deployment',
    status: 'failed',
    startTime: '2023-10-01 10:15:00',
    endTime: '2023-10-01 10:45:00',
    logsLink: 'http://logs.example.com/run/11252',
    branchName: 'feature/new-ui',
    commitSHA: 'def789ghi012'
  },
  {
    workflowRunID: '11253',
    workflowID: 'W002',
    name: 'Backend-API-Deployment',
    status: 'success',
    startTime: '2023-10-01 09:20:00',
    endTime: '2023-10-01 09:50:00',
    logsLink: 'http://logs.example.com/run/11253',
    branchName: 'master',
    commitSHA: 'jkl345mno678'
  },
  {
    workflowRunID: '11254',
    workflowID: 'W003',
    name: 'Search-Service-Update',
    status: 'running',
    startTime: '2023-10-02 10:10:00',
    endTime: '',
    logsLink: 'http://logs.example.com/run/11254',
    branchName: 'feature/search-optimization',
    commitSHA: 'stu901vwx234'
  },
  {
    workflowRunID: '11255',
    workflowID: 'W004',
    name: 'Checkout-Service-Deployment',
    status: 'success',
    startTime: '2023-10-02 11:00:00',
    endTime: '2023-10-02 11:40:00',
    logsLink: 'http://logs.example.com/run/11255',
    branchName: 'feature/checkout-improvements',
    commitSHA: 'opq567rst890'
  },
  {
    workflowRunID: '11256',
    workflowID: 'W005',
    name: 'Inventory-Service-Rollback',
    status: 'failed',
    startTime: '2023-10-03 11:25:00',
    endTime: '2023-10-03 11:55:00',
    logsLink: 'http://logs.example.com/run/11256',
    branchName: 'master',
    commitSHA: 'zab234cde567'
  },
  {
    workflowRunID: '11257',
    workflowID: 'W006',
    name: 'User-Profile-Service-Update',
    status: 'success',
    startTime: '2023-10-03 12:10:00',
    endTime: '2023-10-03 12:45:00',
    logsLink: 'http://logs.example.com/run/11257',
    branchName: 'feature/user-profile-enhancements',
    commitSHA: 'fgh890ijk012'
  },
  {
    workflowRunID: '11258',
    workflowID: 'W007',
    name: 'Recommendation-Engine-Deployment',
    status: 'running',
    startTime: '2023-10-04 12:50:00',
    endTime: '',
    logsLink: 'http://logs.example.com/run/11258',
    branchName: 'feature/recommendation-tweaks',
    commitSHA: 'lmn345opq678'
  },
  {
    workflowRunID: '11259',
    workflowID: 'W008',
    name: 'Ad-Service-Scaling',
    status: 'failed',
    startTime: '2023-10-04 13:30:00',
    endTime: '2023-10-04 14:00:00',
    logsLink: 'http://logs.example.com/run/11259',
    branchName: 'hotfix/ad-rendering',
    commitSHA: 'rst901uvw234'
  },
  {
    workflowRunID: '11260',
    workflowID: 'W009',
    name: 'Cart-Service-Update',
    status: 'success',
    startTime: '2023-10-05 02:20:00',
    endTime: '2023-10-05 02:50:00',
    logsLink: 'http://logs.example.com/run/R010',
    branchName: 'feature/cart-updates',
    commitSHA: 'xyz567abc890'
  }
]

export const bootstrapWorkflowsData: Array<WorkflowModel> = [
  {
    workflowID: 'W001',
    name: 'Frontend-Deployment',
    version: '20',
    trigger: 'git-push',
    team: 'Frontend-Team',
    updatedBy: 'alice.smith',
    updatedAt: '2023-10-01 08:32:45'
  },
  {
    workflowID: 'W002',
    name: 'Backend-API-Deployment',
    version: '10',
    trigger: 'git-push',
    team: 'Backend-Team',
    updatedBy: 'bob.jones',
    updatedAt: '2023-10-01 09:15:32'
  },
  {
    workflowID: 'W003',
    name: 'Search-Service-Update',
    version: '5',
    trigger: 'manual',
    team: 'Search-Team',
    updatedBy: 'charlie.lee',
    updatedAt: '2023-10-02 10:05:10'
  },
  {
    workflowID: 'W004',
    name: 'Checkout-Service-Deployment',
    version: '15',
    trigger: 'git-push',
    team: 'Payments-Team',
    updatedBy: 'dana.white',
    updatedAt: '2023-10-02 10:47:22'
  },
  {
    workflowID: 'W005',
    name: 'Inventory-Service-Rollback',
    version: '3',
    trigger: 'manual',
    team: 'Inventory-Team',
    updatedBy: 'ellen.black',
    updatedAt: '2023-10-03 11:19:40'
  },
  {
    workflowID: 'W006',
    name: 'User-Profile-Service-Update',
    version: '7',
    trigger: 'git-push',
    team: 'User-Team',
    updatedBy: 'frank.gray',
    updatedAt: '2023-10-03 12:02:15'
  },
  {
    workflowID: 'W007',
    name: 'Recommendation-Engine-Deployment',
    version: '2',
    trigger: 'scheduled',
    team: 'ML-Team',
    updatedBy: 'grace.green',
    updatedAt: '2023-10-04 12:45:05'
  },
  {
    workflowID: 'W008',
    name: 'Ad-Service-Scaling',
    version: '1',
    trigger: 'manual',
    team: 'Marketing-Team',
    updatedBy: 'harry.blue',
    updatedAt: '2023-10-04 01:27:50'
  },
  {
    workflowID: 'W009',
    name: 'Cart-Service-Update',
    version: '4',
    trigger: 'git-push',
    team: 'Frontend-Team',
    updatedBy: 'irene.red',
    updatedAt: '2023-10-05 02:10:30'
  },
  {
    workflowID: 'W010',
    name: 'Warehouse-Service-Deployment',
    version: '8',
    trigger: 'git-push',
    team: 'Warehouse-Team',
    updatedBy: 'jack.orange',
    updatedAt: '2023-10-05 02:55:12'
  }
]
