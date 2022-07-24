import * as React from "react";

const SvgLiveFeed = (props) => (
  <svg
    width={31}
    height={31}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.584 13.625V9.25c0-.688-.563-1.25-1.25-1.25h-15c-.688 0-1.25.563-1.25 1.25v12.5c0 .688.562 1.25 1.25 1.25h15c.687 0 1.25-.563 1.25-1.25v-4.375l2.862 2.863c.787.787 2.137.224 2.137-.888v-7.713c0-1.112-1.35-1.675-2.137-.887l-2.863 2.875Z"
      fill="#101AA1"
    />
    <circle cx={8.834} cy={12} r={1.5} fill="#9B9ECD" />
  </svg>
);

export default SvgLiveFeed;
