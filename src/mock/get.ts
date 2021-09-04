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

export const userListData = Mock.mock(/^\/api\/userList\??[^?'":./]*$/, (options: any) => {
	const url = new URL('https://www.baidu.com' + options.url)
	// const paramsString: string[] = url.search.match(/[^?]+/gi) as string[]
	const paramsString: string = url.search.slice(1) //也可以这样
	const params = new URLSearchParams(paramsString)
	const page = parseInt(params.get('page') ?? '')
	const limit = parseInt(params.get('limit') ?? '')
	const template = UserListData(page, limit)
	return Mock.mock(template)
})

export const lineMapData = Mock.mock('/api/lineMapData', {
	'lineMapData|7': [
		{
			'week|+1': ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],
			'value|100-1000': 105,
		},
	],
})

export const appList = Mock.mock('/api/appList', {
	'appList|10': [
		{
			id: /[\d]{6}/,
			icon: /[A-Z]{2}/,
			name: /([a-z]|[A-Z]){5}/,
			url: /^https:\/\/[a-z0-9]{5,8}\.[a-z]{2,3}$/,
			'dayActive|100-1000': 102,
			'allActive|1000-5000': 1002,
		},
	],
})
