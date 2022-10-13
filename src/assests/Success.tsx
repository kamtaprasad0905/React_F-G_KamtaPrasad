import React from "react";

const Success = ({ color, width }: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path
        fill={color}
        width={width}
        d="M32,3A29,29,0,1,0,61,32,29,29,0,0,0,32,3ZM47.75,20.88,29.69,41.53a1,1,0,0,1-.75.34,1,1,0,0,1-.61-.2L16.4,32.49a1,1,0,1,1,1.22-1.59L28.8,39.51l17.44-20a1,1,0,0,1,1.51,1.32Z"
        className="color000000 svgShape"
        data-name="Layer 3"
      />
    </svg>
  );
};

export default Success;
