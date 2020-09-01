// bg dark image
import bgDark from "../../images/bg-dark.png"
import bgLight from "../../images/bg-light.png"

export const lightTheme = {
  body: "#fafafa",
  text: "#363537",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#39598A, #79D7ED)",
  bgImage: `url(${bgLight}) center center no-repeat`,
  button: {},
  bodyBg: "#fff",
  theme: "light",
}

export const darkTheme = {
  body: "#000000",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  gradient: "linear-gradient(#091236, #1E215D)",
  bgImage: `url(${bgDark}) center center no-repeat`,
  button: {
    background: "#000000",
    "border-color": "#fff",
    color: "#fff",
  },
  bodyBg: "#141414",
  theme: "dark",
}
