import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter, createContext } from '@todo-app/trpc';

const app = express();

app.use(
  '/api/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(3000, () => console.log('Listening on port http://localhost:3000'));
