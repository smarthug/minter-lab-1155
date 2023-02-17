import * as React from "react";
const SvgPolygon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <rect width={28} height={28} fill="#8247E5" rx={14} />
    <rect
      width={28}
      height={28}
      fill="url(#polygon_svg__a)"
      fillOpacity={0.3}
      rx={14}
    />
    <path
      fill="#fff"
      d="M18.28 10.92a1.06 1.06 0 0 0-1.06 0l-2.41 1.42-1.65.93-2.41 1.43c-.31.19-.72.19-1.06 0l-1.92-1.12a1.07 1.07 0 0 1-.53-.9v-2.2a1 1 0 0 1 .53-.9l1.9-1.08c.3-.18.7-.18 1.04 0l1.9 1.09c.3.18.52.52.52.9v1.42l1.64-.96V9.52a1 1 0 0 0-.52-.9l-3.5-2.04a1.06 1.06 0 0 0-1.06 0L6.13 8.63a1 1 0 0 0-.53.9v4.12a1 1 0 0 0 .53.9l3.56 2.04c.31.19.71.19 1.06 0l2.41-1.4 1.65-.95 2.41-1.4c.31-.19.72-.19 1.06 0l1.89 1.09c.3.18.53.52.53.9v2.2a1 1 0 0 1-.53.9l-1.9 1.11c-.3.19-.7.19-1.05 0l-1.89-1.08a1.07 1.07 0 0 1-.52-.9v-1.43l-1.65.96v1.43a1 1 0 0 0 .53.9l3.56 2.04c.31.19.72.19 1.06 0l3.56-2.04c.31-.19.53-.53.53-.9v-4.13a1 1 0 0 0-.53-.9l-3.6-2.07Z"
    />
    <defs>
      <linearGradient
        id="polygon_svg__a"
        x1={0}
        x2={14}
        y1={0}
        y2={28}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgPolygon;
