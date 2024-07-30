import { query } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  revalidate: boolean;
  message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.query.token !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ revalidate: false, message: 'Unauthorized' });
  }
  if (req.query.data === 'product') {
    try {
      await res.revalidate('/product/staticside');
      return res.status(200).json({ revalidate: true });
    } catch (error) {
      res.status(500).json({ revalidate: false });
    }
  }
  return res.status(400).json({ revalidate: false, message: 'Bad Request' });
}
