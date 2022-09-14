import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const sdk = new ThirdwebSDK('rinkeby')
const nftDrop = sdk.getNFTDrop(process.env.PUBLIC_NFT_DROP_ADDRESS)

export { nftDrop }
