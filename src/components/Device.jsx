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
      {/* Physical Hardware Buttons */}
      <div className="device-buttons" aria-hidden="true">
        <span className="device-btn device-btn-power" />
        <span className="device-btn device-btn-volume" />
      </div>

      {/* Ground Contact Shadow */}
      <div className="device-ground-shadow" aria-hidden="true" />

      {/* Metal Chassis Rail */}
      <div className="device-chassis">
        {/* Inner Uniform Screen Bezel & Display */}
        <div className="device-screen">
          {/* Punch-hole Front Camera Cutout */}
          <div className="device-camera" aria-hidden="true">
            <span className="device-lens-glint" />
          </div>

          {/* Subtle Anti-reflective Glass Sheen */}
          <div className="device-screen-glare" aria-hidden="true" />

          {/* Screenshot Image or Custom Children */}
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
