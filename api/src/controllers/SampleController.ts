import { Request, Response, Router } from 'express';

const sampleController: Router = Router();

sampleController.get('/', (req: Request, res: Response) => {
  res.json({ data: 'Hello World' });
});

export { sampleController };
