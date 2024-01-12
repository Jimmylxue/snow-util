import { Card, Flex, Tabs, Text, Tooltip } from '@radix-ui/themes'
import { StarIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'

export function Category() {
	return (
		<div>
			<Tabs.Root defaultValue="css" orientation="vertical">
				<Tabs.List aria-label="tabs example">
					<Tabs.Trigger value="css">CSS</Tabs.Trigger>
					<Tabs.Trigger value="photo">图片</Tabs.Trigger>
					<Tabs.Trigger value="util">工具</Tabs.Trigger>
				</Tabs.List>

				<Tabs.Content value="photo">
					<Flex gap="3" mt="3">
						<Card
							style={{ minWidth: 240 }}
							className=" cursor-pointer hover:bg-sky-400 hover:text-white"
							variant="classic"
						>
							<Link to="/home/nokia">
								<div className=" w-full flex items-center justify-between cursor-pointer">
									<Text as="div" size="2">
										诺基亚斗图神器
									</Text>
									<StarIcon width="16" height="16" />
								</div>
							</Link>
						</Card>
						<Card
							style={{ minWidth: 240 }}
							className=" cursor-pointer hover:bg-sky-400 hover:text-white"
							variant="classic"
						>
							<Link to="/home/watermark">
								<div className=" w-full flex items-center justify-between cursor-pointer">
									<Text as="div" size="2">
										水印生成器
									</Text>
									<StarIcon width="16" height="16" />
								</div>
							</Link>
						</Card>
					</Flex>
				</Tabs.Content>
				<Tabs.Content value="util">
					<Flex gap="3" mt="3">
						<Tooltip content="作者正在快马加鞭开发中...">
							<Card
								style={{ minWidth: 240 }}
								className=" cursor-pointer hover:bg-sky-400 hover:text-white bg-gray-400"
							>
								<div className=" w-full flex items-center justify-between cursor-pointer">
									<Text as="div" size="2">
										翻译助手
									</Text>
									<StarIcon width="16" height="16" />
								</div>
							</Card>
						</Tooltip>
					</Flex>
				</Tabs.Content>
				<Tabs.Content value="css">
					<Flex gap="3" mt="3">
						<Card
							style={{ minWidth: 240 }}
							className=" cursor-pointer hover:bg-sky-400 hover:text-white"
							variant="classic"
						>
							<Link to="/home/picColor">
								<div className=" w-full flex items-center justify-between cursor-pointer">
									<Text as="div" size="2">
										图片背景色提取
									</Text>
									<StarIcon width="16" height="16" />
								</div>
							</Link>
						</Card>
					</Flex>
				</Tabs.Content>
			</Tabs.Root>
		</div>
	)
}
