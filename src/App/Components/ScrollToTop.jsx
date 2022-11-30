import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop({ top = 0, left = 0 }) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      left,
      top,
    });
  }, [location.pathname, top, left]);
  return null;
}

export default React.memo(ScrollToTop);
