import type { Component } from "solid-js";

export const Close: Component = () => (
  <svg
    width="58"
    height="90"
    viewBox="0 0 95 95" // Adjusted viewBox to maintain aspect ratio
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_7_459)">
      <circle cx="47.2718" cy="42.0433" r="28.9496" fill="white" />
    </g>
    <path
      d="M43.7178 51.479L53.1112 42.0429L43.7178 32.6068"
      stroke="#6940DA"
    />
    <defs>
      <filter
        id="filter0_d_7_459"
        x="0.0365524"
        y="0.522322"
        width="94.4708"
        height="94.4704"
        filterUnits="userSpaceOnUse"
      >
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="5.71429" />
        <feGaussianBlur stdDeviation="9.14286" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0323264 0 0 0 0 0.0598209 0 0 0 0 0.204167 0 0 0 0.06 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_7_459"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_7_459"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
