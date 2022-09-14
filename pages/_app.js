import '../styles/globals.css'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'

const MyApp = ({ Component, pageProps }) => {
  return (
     <ThirdwebProvider 
     desiredChainId={ChainId.Rinkeby}
     chainRpc={{
          [ChainId.Rinkeby]: 'https://proud-green-wind.rinkeby.discover.quiknode.pro/f82ed6dc556cdd7d8fc60d5ad13ad2b1b74d0353/'
     }}
     >
          <Component {...pageProps} />
     </ThirdwebProvider>
  )
}

export default MyApp
