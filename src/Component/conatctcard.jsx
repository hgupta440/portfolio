import React from 'react';

const ContactCard = ({ title, info, bgColor, textColor }) => {
  return (
    <div className={`p-6 rounded border text-center ${bgColor}`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className={`${textColor}`}>{info}</p>
    </div>
  );
};

export default ContactCard;
