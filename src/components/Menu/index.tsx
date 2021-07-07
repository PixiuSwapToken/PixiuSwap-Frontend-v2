import React, { useContext } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import { usePriceBlzdBusd } from 'state/hooks'
import { Menu as UikitMenu } from '@pixiuswapp/uikit-2'
import config from './config'

const Menu = (props) => {
  const { account, connect, reset } = useWallet()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const blzdPriceUsd = usePriceBlzdBusd()

  return (
    <UikitMenu
      account={account}
      login={connect}
      logout={reset}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage && selectedLanguage.code}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={blzdPriceUsd.toNumber()}
      links={config}
      priceLink="https://pancakeswap.info/token/0xca92ab56378b0bc3615a17eabdd0ea65e0dc9bd8"
      {...props}
    />
  )
}

export default Menu
