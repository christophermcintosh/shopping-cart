import React from 'react';

const Subtotal = ({ subtotal }) => {
  return (
    <div className="row subtotal">
      <div className="col-6 subtotal-contact pt-2">
        <p>Need help or have any questions?</p>
        <p className="font-weight-bold">Contact:</p>
        <p>
          <a
            href="https://christophermcintosh.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Christopher McIntosh
          </a>
        </p>
        <p>chrismac92@gmail.com</p>
      </div>
      <div className="col-4">
        <p>Subtotal:</p>
      </div>
      <div className="col-2">
        <p className="font-weight-bold">${Number(subtotal).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Subtotal;
