import styled from 'styled-components'

const Anchor = styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  text-decoration: none;
`

export { Anchor }
