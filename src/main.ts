import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import { port } from './../config'
import router from './router'

const app = new Koa()

app.use(bodyParser())

app.use(router.routes())

app.use(router.allowedMethods())

app.listen(port)

console.log(`server run at http://127.0.0.1:${port}`)
