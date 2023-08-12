
import React, { useEffect, useRef } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const EasyScrollBar = ({ children, trigger, ...props }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const scrollHeight = containerRef.current._container.scrollHeight;
      containerRef.current._container.scrollTop = scrollHeight;
    }
  }, [trigger]);

  return (
    <PerfectScrollbar ref={containerRef} {...props}>
      {children}
    </PerfectScrollbar>
  );
};

export default EasyScrollBar;
    