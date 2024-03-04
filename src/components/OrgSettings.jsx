import React from 'react'
import BaseSetting from './BaseSetting'
import AttendeeCard from './Card.jsx'
import { ATTENDEE_REGISTRATION } from '../constants/index.js'
import './OrgSettings.css'

const OrgSettings = () => {
  return (
    <div>
      <div className="org-settings-container">
        <img
          src="/rainfocus_org.png"
          alt="rainfocus_org"
          className="org-logo"
        />
        <div className="org-title">
          <h3>Org Settings</h3>
        </div>
      </div>
      <p>
        <span className="steps">Step 1:</span> Base Settings
      </p>
      <BaseSetting />
      <div>
        <p>
          <span className="steps">Step 2:</span> Build Registration workflows.
        </p>
        <div className="registration-workflows-container">
          {ATTENDEE_REGISTRATION.map((attendee) => (
            <AttendeeCard
              icon={
                <span className="material-symbols-outlined">
                  subdirectory_arrow_right
                </span>
              }
              title={attendee.title}
              description={attendee.description}
              className="attendee-card"
            />
          ))}
          <AttendeeCard
            icon={<span className="material-symbols-outlined">add_circle</span>}
            description="Add Registration Workflow"
            className="workflow-registration-card"
          />
        </div>
        <div>
          <p>
            <span className="steps">Step 3:</span> Design attendee experiences.
          </p>
          <AttendeeCard
            icon={<span className="material-symbols-outlined">computer</span>}
            title="Attendee Portal"
            description="Manage the portal that attendees will see after they're registered for your event"
            className="attendee-portal"
          />
        </div>
      </div>
    </div>
  )
}

export default OrgSettings
