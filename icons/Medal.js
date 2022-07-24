import * as React from "react";

const SvgMedal = (props) => (
  <svg
    width={31}
    height={31}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.166 3h-15c-.69 0-1.25.56-1.25 1.25v.609c0 .824.4 1.596 1.072 2.072l5.946 4.215a2.984 2.984 0 0 0 3.459.004l5.953-4.221a2.531 2.531 0 0 0 1.07-2.07V4.25c0-.69-.56-1.25-1.25-1.25Z"
      fill="#101AA1"
    />
    <path
      opacity={0.35}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.616 12.383a1.19 1.19 0 0 1 2.102 0l1.994 3.76a.323.323 0 0 0 .23.168l4.192.735a1.19 1.19 0 0 1 .65 1.999l-2.96 3.059a.329.329 0 0 0-.087.27l.597 4.215a1.19 1.19 0 0 1-1.7 1.235l-3.823-1.87a.33.33 0 0 0-.285 0l-3.824 1.87a1.188 1.188 0 0 1-1.7-1.235l.597-4.215a.317.317 0 0 0-.087-.27l-2.96-3.059a1.19 1.19 0 0 1 .65-1.999l4.192-.735a.317.317 0 0 0 .23-.167l1.992-3.761Z"
      fill="#101AA1"
    />
  </svg>
);

export default SvgMedal;
