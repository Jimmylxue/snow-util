import { Card, Flex, Tabs, Text, Tooltip } from '@radix-ui/themes'
import { StarIcon } from '@radix-ui/react-icons'
import { useNavigate } from 'react-router-dom'
import { categoryList } from './map'
import { useToast } from '@/hooks/useToast'

export function Category() {
	const { toast } = useToast()
	const navigate = useNavigate()
	return (
		<div>
			<Tabs.Root defaultValue="all" orientation="vertical">
				<Tabs.List aria-label="tabs example">
					<Tabs.Trigger value="all">全部</Tabs.Trigger>
					{categoryList.map(item => (
						<Tabs.Trigger value={item.value} key={item.value}>
							{item.name}
						</Tabs.Trigger>
					))}
				</Tabs.List>

				<Tabs.Content value={'all'}>
					<Flex gap="3" mt="3" className=" flex-shrink-0 flex-wrap">
						{categoryList.map(item =>
							item.children.map(it => (
								<Tooltip
									key={it.link}
									content={
										it.isComplete ? it.name : '作者正在快马加鞭开发中...'
									}
								>
									<Card
										style={{ minWidth: 240 }}
										className=" cursor-pointer hover:bg-sky-400 hover:text-white"
										variant="classic"
										onClick={() => {
											if (!it.isComplete) {
												toast('作者正快马加鞭开发中...')
												return
											}
											navigate(it.link)
										}}
									>
										<div className=" w-full flex items-center justify-between cursor-pointer">
											<Text as="div" size="2">
												{it.name}
											</Text>
											<StarIcon width="16" height="16" />
										</div>
									</Card>
								</Tooltip>
							))
						)}
					</Flex>
				</Tabs.Content>

				{categoryList.map(item => (
					<Tabs.Content value={item.value} key={item.value}>
						<Flex gap="3" mt="3" className=" flex-shrink-0 flex-wrap">
							{item.children.map(it => (
								<Tooltip
									key={it.link}
									content={
										it.isComplete ? it.name : '作者正在快马加鞭开发中...'
									}
								>
									<Card
										style={{ minWidth: 240 }}
										className=" cursor-pointer hover:bg-sky-400 hover:text-white"
										variant="classic"
										onClick={() => {
											if (!it.isComplete) {
												return
											}
											navigate(it.link)
										}}
									>
										<div className=" w-full flex items-center justify-between cursor-pointer">
											<Text as="div" size="2">
												{it.name}
											</Text>
											<StarIcon width="16" height="16" />
										</div>
									</Card>
								</Tooltip>
							))}
						</Flex>
					</Tabs.Content>
				))}
			</Tabs.Root>
		</div>
	)
}
