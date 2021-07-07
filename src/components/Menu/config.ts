import { MenuEntry } from '@pixiuswapp/uikit-2'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  // {
    // label: 'PIXIU to xPIXIU',
    // icon: 'TradeIcon',
    // href: '/xPIXIU',
  // },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pixiuswap.finance/#/swap?outputCurrency=0xca92ab56378b0bc3615a17eabdd0ea65e0dc9bd8',
        external: true,
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pixiuswap.finance/#/add/BNB/0xca92ab56378b0bc3615a17eabdd0ea65e0dc9bd8',
        external: true,
      },
    ],
  },
  // {
    // label: 'Farms',
    // icon: 'FarmIcon',
    // href: '/farms',
  // },
  // {
    // label: 'Caves',
    // icon: 'CaveIcon',
    // href: '/caves',
  // },
  // {
    // label: 'Blizzard',
    // icon: 'PoolIcon',
    // href: '/pools',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xca92ab56378b0bc3615a17eabdd0ea65e0dc9bd8',
        external: true,
      },
    ],
  },
  {
    label: 'Github',
    icon: 'GithubIcon',
    href: 'https://github.com/PixiuSwap',
    external: true,
  },
  {
    label: 'Blog',
    icon: 'MediumIcon',
    href: 'https://pixiuswaptoken.medium.com',
    external: true,
  },
  {
    label: 'Audit',
    icon: 'AuditIcon',
    external: true,
    href: 'https://github.com/pixiuswap/Pixiu-frontend/blob/master/public/files/gemzAudit.pdf',
  },
]

export default config
