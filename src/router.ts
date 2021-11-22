import Router from 'koa-router'
import { gateway } from './gateway'
import { test } from './test'

const router = new Router()

// router.get('/gateway', (ctx) => gateway(ctx))
router.post('/gateway', async (ctx) =>
	gateway(ctx).catch((err) => console.log(err))
)

router.get('/test', () => test())

export default router
