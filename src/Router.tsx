import React from 'react'
import './index.css'
import NavBarLayout from './Components/NavBar/NavBarLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Workflows from './Pages/Workflows'
import WorkflowRuns from './Pages/WorkflowRuns'
import WorkflowRunDetail from './Pages/WorkflowRunDetail'
import WorkflowBuilder from './Components/WorkflowBuilder/WorkflowBuilder'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBarLayout childComponent={Workflows} />} />
        <Route
          path="/workflow-runs"
          element={<NavBarLayout childComponent={WorkflowRuns} />}
        />
        <Route
          path="/workflow-run-details/:workflowRunID"
          element={<NavBarLayout childComponent={WorkflowRunDetail} />}
        />
        <Route
          path="/workflow-builder"
          element={<NavBarLayout childComponent={WorkflowBuilder} />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
