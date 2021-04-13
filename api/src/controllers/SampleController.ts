import { Request, Response, Router } from 'express';
import { userService } from '../services';
import { caseService } from '../services/CaseService';

const sampleController: Router = Router();

sampleController.get('/', async (req: Request, res: Response) => {
  const name = await userService.find();
  res.json({ data: name });
});

sampleController.get('/user', async (req: Request, res: Response) => {
  const name = await userService.update();
  res.json({ data: name });
});

sampleController.get('/save/:id', async (req: Request, res: Response) => {
  const id = await caseService.create(req.params.id as string);
  res.json({ data: id });
});

sampleController.get('/update', async (req: Request, res: Response) => {
  const id = await caseService.update();
  res.json({ data: id });
});

sampleController.get('/test', async (req: Request, res: Response) => {
  const id = await caseService.updateTest();
  res.json({ data: id });
});

export { sampleController };
