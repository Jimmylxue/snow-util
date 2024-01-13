import { Card, Flex } from '@radix-ui/themes'
import { StarIcon } from '@radix-ui/react-icons'

type TProps = {
	onChange: (e: any) => void
}

export function Upload({ onChange }: TProps) {
	return (
		<Card
			className=" hover:border-cyan-300 "
			variant="classic"
			style={{
				width: 120,
				height: 40,
			}}
		>
			<Flex justify="center" align="center" height="100%" className=" relative">
				<StarIcon />
				上传图片
				<input
					className=" w-full h-full absolute opacity-0"
					type="file"
					onChange={onChange}
				/>
			</Flex>
		</Card>
	)
}
