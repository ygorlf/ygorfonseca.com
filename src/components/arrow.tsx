import * as React from "react";

interface IconProps {
  fill: string;
}

const Arrow = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="-0.5 -0.5 24 24"
    {...props}
  >
    <path
      fill={props.fill}
      d="M22.722 4.658a.412.412 0 0 0-.518.259 100.625 100.625 0 0 1-6.459 7.763 39.608 39.608 0 0 1-3.766 3.833c-.211.172-.45.412-.594.508 0-.115-.297-.172-.508-.345a36.867 36.867 0 0 1-2.674-2.588c-2.875-2.933-6.545-6.986-7.58-8.06a.364.364 0 0 0-.527.489c1.112 1.275 5.405 6.641 8.261 9.583a16.033 16.033 0 0 0 1.917 1.792 2.089 2.089 0 0 0 .882.441 2.223 2.223 0 0 0 1.39-.585 24.37 24.37 0 0 0 3.009-2.98A94.875 94.875 0 0 0 23 5.165a.403.403 0 0 0-.278-.508Zm-11.5 12.343h.086c-.019.048-.067.048-.077 0Z"
    />
  </svg>
)
export default Arrow;