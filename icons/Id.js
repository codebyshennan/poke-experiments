import * as React from "react";

const SvgId = (props) => (
  <svg
    width={30}
    height={31}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.35}
      d="M24.565 3.814H13.937a2.125 2.125 0 0 0-2.125 2.126v17.005h12.753a2.125 2.125 0 0 0 2.126-2.126V5.939a2.125 2.125 0 0 0-2.126-2.125Z"
      fill="#101AA1"
    />
    <path
      d="m3.31 16.568 3.005-3.006a4.25 4.25 0 0 1 3.006-1.246h2.49v7.464l3.726-1.507a2.588 2.588 0 0 1 2.655 4.365l-3.814 3.268a5.317 5.317 0 0 1-3.485 1.28l-7.584-.038v-10.58Z"
      fill="#101AA1"
    />
  </svg>
);

export default SvgId;
