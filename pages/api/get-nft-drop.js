import { nftDrop, nnftDrop } from '../../utils/nftDrop';

export default async function handler(req, res) {
     const claimed = await nftDrop.getAllClaimed()
     const total = await nftDrop.totalSupply()
     const claimedConditions = await nftDrop.claimConditions.getAll()

     const claimedSupply = claim.length
     const totalSupply = total.toNumber()
     const nftPrice = claimConditions[0].currencyMetadata.displayValue
     const claimPhases = claimConditions.map((condition) => ({
          startTime: condition.startTime.getTime(),
     }))

     res.status(200).json({
          claimedSupply,
          totalSupply,
          nftPrice,
          claimPhases
     })


}