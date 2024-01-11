import { Button, Card, Flex, Select, Switch } from '@radix-ui/themes'
import { StarIcon } from '@radix-ui/react-icons'
import { useEffect, useMemo, useRef, useState } from 'react'
import { copyToClipboard, rgbToHex } from '../../utils'
import { useToast } from '../../hooks'
import picImg from '../../assets/img/picImage.jpeg'

export function PicColor() {
	const [takeColorCount, setTakeColorCount] = useState<string>('2')
	const [isRgb, setIsRgb] = useState<boolean>(true)
	const [imgUrl, setImgUrl] = useState<string>(picImg)
	// @ts-ignore
	const colorThief = new ColorThief()
	const imgRef = useRef<HTMLImageElement>(null)
	const [colorList, setColorList] = useState<string[]>([])

	const { toast } = useToast()

	const backGroundCSS = useMemo(() => {
		return `linear-gradient(to bottom,${colorList.join(',')})`
	}, [colorList])

	const saveValueFn = (color: string) => {
		const saveText = isRgb ? color : rgbToHex(color)
		copyToClipboard(saveText)
		toast(`复制成功：${saveText}`)
	}

	useEffect(() => {
		setTimeout(() => {
			const colorList = colorThief
				.getPalette(imgRef.current, +takeColorCount)
				.map((item: any) => `rgb(${item[0]},${item[1]},${item[2]})`)
			setColorList(colorList)
		}, 100)
	}, [imgUrl, takeColorCount])

	return (
		<div>
			<Card
				className=" py-10 relative"
				style={{
					minHeight: 450,
					background: backGroundCSS,
				}}
			>
				<Flex justify="center" align="center" direction="column">
					<Card
						className=" hover:border-cyan-300 "
						variant="classic"
						style={{
							width: 120,
							height: 40,
						}}
						onClick={() => {}}
					>
						<Flex
							justify="center"
							align="center"
							height="100%"
							className=" relative"
						>
							<StarIcon />
							上传图片
							<input
								className=" w-full h-full absolute opacity-0"
								type="file"
								onChange={(e: any) => {
									const file = e.target.files[0]
									const reader = new FileReader()
									reader.onload = (event: any) => {
										const imageUrl = event.target.result
										setImgUrl(imageUrl)
										// 在这里使用imageUrl，例如将其设置为img标签的src属性
									}
									reader.readAsDataURL(file)
								}}
							/>
						</Flex>
					</Card>
					<img
						ref={imgRef}
						className=" mt-4"
						src={imgUrl}
						alt=""
						style={{
							width: 300,
						}}
					/>
					{!!colorList.length && (
						<Flex
							gap="5"
							mt="5"
							align="center"
							style={{
								height: 50,
							}}
						>
							{colorList.map(color => (
								<Card
									className="w-10 h-10 hover:w-14 hover:h-14 cursor-pointer"
									style={{
										backgroundColor: color,
									}}
									onClick={() => saveValueFn(color)}
								></Card>
							))}
						</Flex>
					)}
					<Flex className=" mt-5">
						<Button
							color="indigo"
							variant="soft"
							onClick={() => {
								copyToClipboard(backGroundCSS)
								toast(`复制成功：${backGroundCSS}`)
							}}
						>
							复制CSS代码
						</Button>
					</Flex>
				</Flex>
				<div className=" absolute left-3 top-3">
					<Flex
						align="center"
						style={{
							height: 50,
						}}
					>
						提取色块数：
						<Select.Root
							size="3"
							value={takeColorCount}
							onValueChange={value => {
								setTakeColorCount(value)
							}}
						>
							<Select.Trigger />
							<Select.Content>
								<Select.Item value="2">2</Select.Item>
								<Select.Item value="3">3</Select.Item>
								<Select.Item value="4">4</Select.Item>
								<Select.Item value="5">5</Select.Item>
							</Select.Content>
						</Select.Root>
					</Flex>
					<Flex>
						采用rgb模式：
						<Switch
							radius="none"
							checked={isRgb}
							onClick={() => {
								setIsRgb(!isRgb)
							}}
							size="3"
						/>
					</Flex>
				</div>
			</Card>
		</div>
	)
}
