import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState({ name: "", email: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validación por campo individual
  const validateForm = () => {
    let isValid = true;
    let errorMessages = { name: "", email: "" };

    // Validación del nombre
    if (formData.name.trim().length <= 5) {
      errorMessages.name = "El nombre debe tener al menos 6 caracteres";
      isValid = false;
    }

    // Validación del email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(formData.email)) {
      errorMessages.email = "Por favor ingresa un correo válido";
      isValid = false;
    }

    setError(errorMessages);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccessMessage(
        `Gracias ${formData.name}, te contactaremos pronto por correo electrónico.`
      );
      setFormData({ name: "", email: "" }); // Limpiar campos
      setError({ name: "", email: "" }); // Limpiar errores
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nombre completo"
            className={error.name ? "input-error" : ""}
          />
          {error.name && <p className="error-message">{error.name}</p>}
        </div>

        <div>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Correo electrónico"
            className={error.email ? "input-error" : ""}
          />
          {error.email && <p className="error-message">{error.email}</p>}
        </div>

        <button type="submit">Enviar</button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default Form;

