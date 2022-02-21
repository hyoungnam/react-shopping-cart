/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Fragment } from 'react'
import * as s from './Layout.style'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <Fragment>
      <header css={s.header}>
        <div css={s.navBlock}>
          <nav css={s.nav}>
            <h1 css={s.h1}>WOOWA SHOP</h1>
            <div>
              <button css={s.button}>장바구니</button>
              <button css={s.button}>주문목록</button>
            </div>
          </nav>
        </div>
      </header>
      <main css={s.main}>{children}</main>
    </Fragment>
  )
}
