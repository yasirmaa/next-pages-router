import { retriveData } from '@/lib/firebase/service';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  status: boolean;
  statusCode: number;
  data: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const data = await retriveData('product');
    res.status(200).json({ status: true, statusCode: 200, data });
  } catch (error) {
    res.status(500).json({ status: false, statusCode: 500, data: error });
  }
}
