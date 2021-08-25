import Mock from 'mockjs'

const UserListData = (page: number, limit: number) => {
	if (isNaN(page) || isNaN(limit)) return null

	return {
		[`userList|${limit}`]: [
			{
				'id|+1': (page - 1) * 10 + 1,
				name: '@name',
				image: '@image',
				number: /[1-9]{8}/,
				email: /[1-9a-zA-Z]{5,10}@[1-9a-z]{2,5}\.com/,
				password: /[1-9a-zA-Z]{8,16}/,
			},
		],
	}
}

export const data = Mock.mock(/^\/api\/[a-zA-Z]+\??[^?'":./]*$/, (options: any) => {
	const url = new URL('https://www.baidu.com' + options.url)
	// const paramsString: string[] = url.search.match(/[^?]+/gi) as string[]
	const paramsString: string = url.search.slice(1) //也可以这样
	const params = new URLSearchParams(paramsString)
	const page = parseInt(params.get('page') ?? '')
	const limit = parseInt(params.get('limit') ?? '')
	console.log(page, limit)
	const template = UserListData(page, limit)
	return Mock.mock(template)
})
// 输出结果
