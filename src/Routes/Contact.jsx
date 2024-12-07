import React, { useContext } from 'react'
import Form from '../Components/Form'
import { ThemeContext } from '../context/ThemeContext'

const Contact = () => {
  const { theme } = useContext(ThemeContext); // Obtener el tema desde el contexto

  return (
    <div className={`contact-container ${theme}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  )
}

export default Contact
