import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';

export default withApiAuthRequired(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession(req, res);
  const user = session?.user;

  res.status(200).json({ user });
});

