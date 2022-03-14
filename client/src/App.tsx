/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

export default function App() {
  
  return <div css={test}>hello</div>
}

const test = css`
  border: 1px solid red;
`
