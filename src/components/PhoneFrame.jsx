import React from 'react';

export default function PhoneFrame({
  children,
  ariaLabel = 'GhaithTV app preview',
  className = '',
  style = {},
}) {
  return (
    <div
      className={`phone-frame ${className}`}
      style={style}
      role="img"
      aria-label={ariaLabel}
    >
      {/* Outer rim highlight and hardware body */}
      <div className="phone-outer-chassis">
        {/* Dynamic camera pill */}
        <div className="phone-island" aria-hidden="true">
          <div className="phone-speaker" />
          <div className="phone-camera-lens" />
        </div>

        {/* Screen container */}
        <div className="phone-screen-viewport">
          {children}

          {/* Realistic glass reflection highlight */}
          <div className="phone-glass-glare" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
