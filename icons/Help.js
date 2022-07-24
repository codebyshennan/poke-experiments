import * as React from "react";

const SvgHelp = (props) => (
  <svg
    width={30}
    height={31}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.35}
      d="m26.783 15.519-2.162-2.633C24.018 7.381 20 3 13.75 3 6.703 3 2.528 7.91 2.528 14.25c0 4.547 2.36 6.621 3.32 9.79.485 1.598 1.93 2.71 3.598 2.71H20.23a3.75 3.75 0 0 0 3.676-3.012l.655-3.268 1.405-.764a2.768 2.768 0 0 0 .816-4.187Z"
      fill="#101AA1"
    />
    <path
      d="M13.995 17.966h-.007a1.357 1.357 0 0 1-1.34-1.581c.437-2.516 2.396-2.604 2.396-4.166 0-.813-.243-1.405-1.12-1.405-.565 0-.898.361-1.091.746-.262.521-.864.777-1.438.676-.87-.155-1.404-1.087-1.034-1.89C10.89 9.2 11.97 8 14.106 8c3.47 0 3.935 2.717 3.935 3.995 0 3.02-2.248 3.133-2.715 4.873-.167.627-.681 1.098-1.331 1.098Zm1.804 3.2c0 .515-.159.95-.478 1.304-.321.353-.739.53-1.255.53-.517 0-.935-.177-1.254-.53-.318-.354-.48-.789-.48-1.304 0-.503.162-.937.48-1.306.32-.366.737-.549 1.254-.549.515 0 .934.183 1.254.549.319.369.479.804.479 1.306Z"
      fill="#101AA1"
    />
  </svg>
);

export default SvgHelp;
