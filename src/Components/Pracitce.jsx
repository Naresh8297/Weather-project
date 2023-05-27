import React, { useState } from 'react';
import './PaymentPage.css'; // Import the CSS file

const Pracitce = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCardHolderChange = (event) => {
    setCardHolder(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCVVChange = (event) => {
    setCVV(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="payment-container">
      <h1 className="title">Payment Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber" className="label">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardHolder" className="label">Card Holder</label>
          <input
            type="text"
            id="cardHolder"
            value={cardHolder}
            onChange={handleCardHolderChange}
            className="input"
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expiryDate" className="label">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv" className="label">CVV</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={handleCVVChange}
              className="input"
            />
          </div>
        </div>
        <button type="submit" className="submit-btn">Pay Now</button>
      </form>
    </div>
  );
};

export default Pracitce;


