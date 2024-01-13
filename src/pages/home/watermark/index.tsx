import {
	Box,
	Button,
	Card,
	Flex,
	RadioGroup,
	Select,
	Text,
	TextField,
} from '@radix-ui/themes'
import { Upload } from '@/components/Upload'
import { useEffect, useState } from 'react'
import { fullMarker, marker } from 'esay-watermark'
import picImg from '@/assets/img/picImage.jpeg'
import { downloadBase64 } from '@/utils/file'
import {
	TPositionConst,
	TextType,
} from 'esay-watermark/dist/types/baseInterface'

export function WaterMark() {
	const [imgUrl, setImgUrl] = useState<string>(picImg)
	const [previewImgSource, setPreviewImgSource] = useState<string>('')
	const [printType, setPrintType] = useState<'single' | 'full'>('full')
	const [textType, setTextType] = useState<TextType>('stroke')
	const [textColor, setTextColor] = useState<string>('#7f8c8d')
	const [position, setPosition] = useState<TPositionConst>('RIGHT_BOTTOM')
	const [textSize, setTextSize] = useState<number>(60)
	const [padding, setPadding] = useState<number>(200)
	const [rotate, setRotate] = useState<number>(-15)
	const [text, setText] = useState<string>('hello world')

	useEffect(() => {
		if (printType === 'full') {
			setPadding(200)
			setTextType('stroke')
		} else {
			setPadding(50)
			setTextType('fill')
		}
	}, [printType])

	useEffect(() => {
		setTimeout(() => {
			previewImgFn()
		}, 500)
	}, [])

	const previewImgFn = async () => {
		let source = ''
		if (printType === 'single') {
			source = await marker({
				src: imgUrl,
				text,
				color: textColor,
				size: textSize,
				position,
				padding,
				type: textType,
				rotate,
			})
		} else {
			source = await fullMarker({
				src: imgUrl,
				text,
				color: textColor,
				size: textSize,
				padding: padding,
				rotate,
				type: textType,
			})
		}
		setPreviewImgSource(source)
	}

	return (
		<Card>
			<Flex gap="3">
				<Box
					className=" flex-shrink-0"
					style={{
						width: 300,
					}}
				>
					<Upload
						onChange={(e: any) => {
							const file = e.target.files[0]
							const reader = new FileReader()
							reader.onload = (event: any) => {
								const imageUrl = event.target.result
								setImgUrl(imageUrl)
							}
							reader.readAsDataURL(file)
						}}
					/>
					<img
						style={{ width: 100, height: 100 }}
						className="my-2"
						src={imgUrl}
						alt=""
					/>
					<div className=" mb-2">
						<div>水印类型</div>
						<RadioGroup.Root
							value={printType}
							onValueChange={value => {
								setPrintType(value as any)
							}}
						>
							<Flex gap="2" direction="row">
								<Text as="label" size="2">
									<Flex gap="2">
										<RadioGroup.Item value={'single'} /> 单行文本水平
									</Flex>
								</Text>
								<Text as="label" size="2">
									<Flex gap="2">
										<RadioGroup.Item value={'full'} /> 平铺水印
									</Flex>
								</Text>
							</Flex>
						</RadioGroup.Root>
					</div>
					<div className=" mb-2">
						<div>文字类型</div>
						<RadioGroup.Root
							value={textType}
							onValueChange={value => {
								setTextType(value as any)
							}}
						>
							<Flex gap="2" direction="row">
								<Text as="label" size="2">
									<Flex gap="2">
										<RadioGroup.Item value={'fill'} /> 填充
									</Flex>
								</Text>
								<Text as="label" size="2">
									<Flex gap="2">
										<RadioGroup.Item value={'stroke'} /> 描边
									</Flex>
								</Text>
							</Flex>
						</RadioGroup.Root>
					</div>
					<div className=" mb-2">
						<div className=" mb-1">水印文字</div>
						<TextField.Input
							color="indigo"
							variant="soft"
							placeholder="Search the docs…"
							value={text}
							onChange={e => setText(e.target.value)}
						/>
					</div>
					<div className=" mb-2">
						<div className=" mb-1">水印颜色</div>
						<TextField.Input
							type="color"
							color="indigo"
							variant="soft"
							value={textColor}
							onChange={e => {
								setTextColor(e.target.value)
							}}
						/>
					</div>
					<div className=" mb-2">
						<div className=" mb-1">水印字体大小</div>
						<TextField.Input
							type="number"
							color="indigo"
							variant="soft"
							value={textSize}
							onChange={e => setTextSize(+e.target.value)}
						/>
					</div>
					<div className=" mb-2">
						<div className=" mb-1">间距</div>
						<TextField.Input
							type="number"
							color="indigo"
							variant="soft"
							value={padding}
							onChange={e => setPadding(+e.target.value)}
						/>
					</div>
					<div className=" mb-2">
						<div className=" mb-1">旋转角度</div>
						<TextField.Input
							type="number"
							color="indigo"
							variant="soft"
							min="-360"
							max="360"
							value={rotate}
							onChange={e => setRotate(+e.target.value)}
						/>
					</div>
					{printType === 'single' && (
						<div className=" mb-2">
							<div className=" mb-1">水印位置</div>
							<Select.Root
								value={position}
								onValueChange={value => {
									setPosition(value as TPositionConst)
								}}
							>
								<Select.Trigger />
								<Select.Content position="popper">
									<Select.Item value="LEFT_TOP">左上角</Select.Item>
									<Select.Item value="CENTER_TOP">上方</Select.Item>
									<Select.Item value="RIGHT_TOP">右上角</Select.Item>
									<Select.Item value="LEFT_CENTER">左方</Select.Item>
									<Select.Item value="CENTER">居中</Select.Item>
									<Select.Item value="RIGHT_CENTER">右方</Select.Item>
									<Select.Item value="LEFT_BOTTOM">左下角</Select.Item>
									<Select.Item value="CENTER_BOTTOM">下方</Select.Item>
									<Select.Item value="RIGHT_BOTTOM">右下角</Select.Item>
								</Select.Content>
							</Select.Root>
						</div>
					)}
					<Flex gap="3" mt="3">
						<Button color="indigo" variant="soft" onClick={previewImgFn}>
							预览
						</Button>
						<Button
							color="indigo"
							variant="soft"
							onClick={() => {
								downloadBase64(previewImgSource)
							}}
						>
							下载
						</Button>
					</Flex>
				</Box>
				<Box>
					<img src={previewImgSource} alt="预览图" />
				</Box>
			</Flex>
		</Card>
	)
}
