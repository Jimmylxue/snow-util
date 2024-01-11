import { Avatar, Card, Flex, TextField } from '@radix-ui/themes'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

export function NavBar() {
	return (
		<Card className=" py-2">
			<Flex px="3" gap="5" align="center">
				<Avatar
					size="3"
					src="https://avatars.githubusercontent.com/u/65758455?v=4"
					fallback="A"
				/>
				<div className=" flex-grow">
					<TextField.Root>
						<TextField.Slot>
							<MagnifyingGlassIcon height="26" width="26" />
						</TextField.Slot>
						<TextField.Input
							variant="soft"
							placeholder="请输入关键字进行搜索"
							size="3"
						/>
					</TextField.Root>
				</div>

				<Avatar
					size="3"
					src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
					radius="full"
					fallback="T"
				/>
			</Flex>
		</Card>
	)
}
