import { Outlet } from 'react-router-dom'
import { NavBar } from './component/NavBar'
import { Button, Flex, Heading } from '@radix-ui/themes'
import { BookmarkIcon, StarIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'

function Home() {
	return (
		<div className=" w-full h-screen flex flex-col">
			<NavBar />
			<div
				className=" w-full px-20 py-4 flex-grow"
				style={{
					backgroundColor: '#f5f8fb',
				}}
			>
				<div>
					<Heading color="indigo" size="8">
						Snow Util
					</Heading>
					<Heading color="indigo" size="5" mt="2">
						永远相信，美好的事情即将发生
					</Heading>
					<Heading color="indigo" size="5">
						For Developers.
					</Heading>
				</div>
				<div className=" mt-10">
					<div>
						<Button variant="classic">
							<BookmarkIcon width="16" height="16" />{' '}
							<Link to="/home/category">分类</Link>
						</Button>
						<Button variant="soft" ml="3">
							<StarIcon width="16" height="16" /> 收藏
						</Button>
					</div>
				</div>

				<Flex mt="8" gap="5">
					<div className=" flex-grow">
						<Outlet />
					</div>
					<div
						className=" bg-red-200"
						style={{
							width: 220,
						}}
					></div>
				</Flex>
			</div>
		</div>
	)
}

export default Home
