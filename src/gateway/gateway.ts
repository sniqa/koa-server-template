import { ParameterizedContext } from 'koa'
import { IRouterParamContext } from 'koa-router'

export const gateway = async (
	ctx: ParameterizedContext<any, IRouterParamContext<any, {}>, any>
) => {
	const { body } = ctx.request

	ctx.response.body = { hello: 'world2' }
}
