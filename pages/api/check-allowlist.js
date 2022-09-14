import { table } from '../../utils/airtable'

export default async function handler(req, res) {
     const { address } = JSON.parse(req.body)
     
     const records = await table
          .select({
               fields : ['Address1', 'Minted'],
               filterByFormula: `{Address} = '${address}'`
          })
          .all()

     const inAllowList = records.length > 0
     res.status(200).json({ inAllowList })
}