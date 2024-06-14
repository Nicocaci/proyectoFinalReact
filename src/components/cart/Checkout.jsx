import { useState,useEffect } from 'react';
import Form from './Form';

const Checkout = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isFormComplete, setIsFormComplete] = useState(false);

//Estas dos funciones verifican entre si que los emails coincidan, y si no lo hacen, muestran en pantalla un aviso de error.
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (confirmEmail && e.target.value !== confirmEmail) {
      setEmailError('Los emails no coinciden');
    } else {
      setEmailError('');
    }
  };

  const handleConfirmEmailChange = (e) => {
    setConfirmEmail(e.target.value);
    if (e.target.value !== email) {
      setEmailError('Los emails no coinciden');
    } else {
      setEmailError('');
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePhoneInput = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remueve todos los caracteres no numéricos
    e.target.value = value;
  };

  //Evita que se recargue la pagina luego de apretar el boton, esto evita que tengamos errores y se borre el form entero.
  const handleSubmit = (event) => {
    event.preventDefault();
  };


  useEffect(() => {
    // Verifica si todos los campos están llenos y no hay errores de email
    if (email && confirmEmail && !emailError) {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
  }, [email, confirmEmail, emailError]);

  return (
    <>
      <Form
      name={name}
      phone={phone}
      email={email}
      confirmEmail={confirmEmail}
      emailError={emailError}
      isFormComplete={isFormComplete}
      handleEmailChange={handleEmailChange}
      handleConfirmEmailChange={handleConfirmEmailChange}
      handlePhoneInput={handlePhoneInput}
      handleSubmit={handleSubmit}
      handleNameChange={handleNameChange}
      handlePhoneChange={handlePhoneChange}
    />
    </>
  );
}

export default Checkout;
