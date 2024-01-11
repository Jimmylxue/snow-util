import { Card, Flex, Tabs, Text } from '@radix-ui/themes'
import { StarIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'

export function Category() {
	return (
		<div>
			<Tabs.Root defaultValue="photo" orientation="vertical">
				<Tabs.List aria-label="tabs example">
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
					</Flex>
				</Tabs.Content>
				<Tabs.Content value="util">
					<Flex gap="3" mt="3">
						<Card
							style={{ minWidth: 240 }}
							className=" cursor-pointer hover:bg-sky-400 hover:text-white"
							variant="classic"
						>
							<div className=" w-full flex items-center justify-between cursor-pointer">
								<Text as="div" size="2">
									翻译助手
								</Text>
								<StarIcon width="16" height="16" />
							</div>
						</Card>
					</Flex>
				</Tabs.Content>
			</Tabs.Root>
		</div>
	)
}
