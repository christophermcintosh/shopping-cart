import React from 'react';

const Subtotal = ({ subtotal }) => {
  return (
    <div className="row subtotal">
      <div className="col-lg-6 subtotal-contact pt-2">
        <p className="display-none">Need help or have any questions?</p>
        <p className="font-weight-bold display-none">Contact:</p>
        <p className="display-none">
          <a
            href="https://christophermcintosh.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Christopher McIntosh
          </a>
        </p>
        <p className="display-none">chrismac92@gmail.com</p>
      </div>
      <div className="col-8 col-lg-4 text-right">
        <p>Subtotal:</p>
      </div>
      <div className="col-2 col-lg-2 text-right">
        <p className="font-weight-bold">${Number(subtotal).toFixed(2)}</p>
      </div>
      <div className="col-2 col-lg-0" />
    </div>
  );
};

export default Subtotal;
