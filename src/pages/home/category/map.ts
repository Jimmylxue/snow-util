type TCategoryType = {
	name: string
	value: string
	children: { link: string; name: string; isComplete: boolean }[]
}[]

export const categoryList: TCategoryType = [
	{
		name: 'CSS',
		value: 'css',
		children: [
			{
				link: '/home/picColor',
				name: '图片背景色提取',
				isComplete: true,
			},
		],
	},
	{
		name: '图片',
		value: 'photo',
		children: [
			{
				link: '/home/watermark',
				name: '水印生成器',
				isComplete: true,
			},
			{
				link: '/home/blur',
				name: '高斯模糊生成器',
				isComplete: true,
			},
			{
				link: '/home/mosaic',
				name: '马赛克生成器',
				isComplete: true,
			},
			{
				link: '/home/nokia',
				name: '诺基亚斗图神器',
				isComplete: true,
			},
		],
	},
	{
		name: '工具',
		value: 'utils',
		children: [
			{ link: '/home/translate', name: '翻译助手', isComplete: false },
			{ link: '/home/qrcode', name: '文本二维码', isComplete: true },
		],
	},
]
