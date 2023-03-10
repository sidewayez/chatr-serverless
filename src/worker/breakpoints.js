const size = {
  xs: '320px',
  sm: '600px',
  md: '768px',
  lg: '992px',
  xlg: '1200px',
}
export const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xlg: `(min-width: ${size.xlg})`,
}
// export default { size, device }
// /* Extra small devices (phones, 600px and down) */
// @media only screen and (max-width: 600px) {
//     .example {background: red;}
//   }

//   /* Small devices (portrait tablets and large phones, 600px and up) */
//   @media only screen and (min-width: 600px) {
//     .example {background: green;}
//   }

//   /* Medium devices (landscape tablets, 768px and up) */
//   @media only screen and (min-width: 768px) {
//     .example {background: blue;}
//   }

//   /* Large devices (laptops/desktops, 992px and up) */
//   @media only screen and (min-width: 992px) {
//     .example {background: orange;}
//   }

//   /* Extra large devices (large laptops and desktops, 1200px and up) */
//   @media only screen and (min-width: 1200px) {
//     .example {background: pink;}
//   }

// @media only screen and ${device.xs} {
//   font-size: x-small;
// }
// @media only screen and ${device.sm} {
//   font-size: x-small;
// }
// @media only screen and ${device.md} {
//   font-size: medium;
// }
// @media only screen and ${device.lg} {
//   font-sze: large;
// }
// @media only screen and ${device.xlg} {
//   font-size: large;
// }