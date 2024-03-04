import React from 'react'
import './Card.css'

/**
 * Card component.
 * @param {string} props.title - Title of the card.
 * @param {string} props.description - Description of the card.
 * @param {JSX.Element} props.icon - Icon element to display.
 * @param {string} [props.className] - Additional CSS class for styling.
 */
const Card = ({ title, description, icon, className }) => {
  const combinedClassName = `card-container ${className}`

  return (
    <div className={combinedClassName}>
      <div className="header">
        <div className="icon">{icon}</div>
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default Card
