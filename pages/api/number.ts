// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  number: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const number = Math.floor(Math.random() * 10)
  res.status(200).json({ number })
}
