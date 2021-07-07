import styled from 'styled-components'
import { BaseLayout } from '@pixiuswapp/uikit-2'

const NftGrid = styled(BaseLayout)`
  padding-bottom: 24px;
  padding-top: 24px;

  & > div {
    grid-column: 2 / 6;

    ${({ theme }) => theme.mediaQueries.sm} {
      grid-column: span 4;
    }
  }
`

export default NftGrid
