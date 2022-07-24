import * as React from "react";

const SvgDiscover = (props) => (
  <svg
    width={30}
    height={31}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 4C8.381 4 3 9.381 3 16s5.381 12 12 12 12-5.381 12-12S21.619 4 15 4Z"
      fill="#101AA1"
      fillOpacity={0.35}
    />
    <path
      d="M15 4C8.381 4 3 9.381 3 16s5.381 12 12 12 12-5.381 12-12S21.619 4 15 4Zm5.76 7.427-3.31 6.24a1.948 1.948 0 0 1-.782.784l-6.24 3.309c-.758.404-1.617-.43-1.188-1.188l3.31-6.24c.176-.328.454-.606.783-.783l6.24-3.309c.758-.43 1.616.43 1.187 1.187Z"
      fill="#101AA1"
    />
  </svg>
);

export default SvgDiscover;
