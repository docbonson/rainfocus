import React from 'react'
import ExhibitorCard from './Card.jsx'
import { EXHIBITOR_PLATFORM } from '../constants/index.js'
import './ExhibitorPortal.css'

const ExhibitorPortal = () => {
  return (
    <div>
      <p>
        <span className="steps">Step 4:</span> Build your exhibitor platform
      </p>
      <div className="exhibitor-portal-container">
        <div className="top-cards">
          {EXHIBITOR_PLATFORM.slice(0, 2).map((exhibitor, index) => (
            <ExhibitorCard
              key={index}
              icon={
                <span className="material-symbols-outlined white-icon">
                  computer
                </span>
              }
              title={exhibitor.title}
              description={exhibitor.description}
              className="exhibitor-card"
            />
          ))}
        </div>
        <div className="bottom-cards">
          {EXHIBITOR_PLATFORM.slice(2).map((exhibitor, index) => (
            <ExhibitorCard
              key={index}
              icon={
                <span className="material-symbols-outlined white-icon">
                  computer
                </span>
              }
              title={exhibitor.title}
              description={exhibitor.description}
              className="exhibitor-card"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExhibitorPortal
