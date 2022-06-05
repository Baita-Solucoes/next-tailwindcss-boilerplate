import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  * {
    ${tw`m-0 p-0 outline-none box-border`};
  }
  *:focus{
    ${tw`outline-none`};
  }
  *::selection{
    ${tw`bg-red-500 bg-opacity-25`};
  }
  button {
    ${tw`outline-none focus:outline-none`}
  }
  html, :root{
    ${tw`h-screen w-screen antialiased`}
  }
  body {
    ${tw`dark:bg-gray-900 antialiased w-full text-gray-400 overflow-x-hidden`};
  }
  a {
    ${tw`transition-all ease duration-300`}
  }
`

function GlobalStyles() {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
    </>
  )
}

export default GlobalStyles
