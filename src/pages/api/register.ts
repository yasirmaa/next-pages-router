import type { NextApiRequest, NextApiResponse } from 'next';
import { registerUser } from '../../lib/firebase/service';

type responseData = {
  status: number;
  message: string;
};
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    await registerUser('users', req.body, (response: responseData) => {
      res.status(response.status).json(response);
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
