import { Card, Flex } from '@radix-ui/themes'
import { UploadIcon } from '@radix-ui/react-icons'
import { ReactNode } from 'react'

type TProps = {
	onChange: (e: any) => void
	text?: string
	icon?: ReactNode
}

export function Upload({
	onChange,
	text = '上传图片',
	icon = <UploadIcon />,
}: TProps) {
	return (
		<Card
			className=" hover:border-cyan-300 "
			variant="classic"
			style={{
				width: 120,
				height: 40,
			}}
		>
			<Flex
				justify="center"
				align="center"
				height="100%"
				className=" relative"
				gap="1"
			>
				{icon}
				{text}
				<input
					className=" w-full h-full absolute opacity-0"
					type="file"
					onChange={onChange}
				/>
			</Flex>
		</Card>
	)
}
