import React from 'react';

/**
 * Clean, realistic Apple-style device frame.
 * Renders portrait (540x1200) or landscape (1200x540) real screenshots.
 * No tilt, no float loops, straight presentation with realistic bezel and shadow.
 */
export default function Device({
  src,
  alt = 'GhaithTV screenshot',
  orientation = 'portrait',
  className = '',
  style = {},
  priority = false,
  width,
  height,
  children,
}) {
  const isPortrait = orientation === 'portrait';
  const defaultWidth = isPortrait ? 540 : 1200;
  const defaultHeight = isPortrait ? 1200 : 540;

  return (
    <div
      className={`device-frame device-${orientation} ${className}`}
      style={style}
      role="img"
      aria-label={alt}
    >
      <div className="device-chassis">
        <div className="device-screen">
          {src && (
            <img
              src={src}
              alt=""
              width={width || defaultWidth}
              height={height || defaultHeight}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              className="device-screenshot"
            />
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
