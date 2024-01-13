import {
	Box,
	Button,
	Card,
	Flex,
	RadioGroup,
	Text,
	TextArea,
	TextField,
} from '@radix-ui/themes'
import { Upload } from '@/components/Upload'
import { useEffect, useState } from 'react'
import { QRcode } from 'esay-watermark'
import picImg from '@/assets/img/picImage.jpeg'
import { downloadBase64 } from '@/utils/file'
import { PreviewImg } from '@/components/PreviewImg'

export function QRCode() {
	const [imgUrl, setImgUrl] = useState<string>(picImg)
	const [previewImgSource, setPreviewImgSource] = useState<string>('')
	const [codeText, setCodeText] = useState<string>('hello world')
	const [codeSize, setCodeSize] = useState<number>(300)
	const [size, setSize] = useState<number>(50)
	const [colorLight, setColorLight] = useState<string>('#ffffff')
	const [colorDark, setColorDark] = useState<string>('#000000')
	const [correctLevel, setCorrectLevel] = useState<number>(2)

	useEffect(() => {
		setTimeout(() => {
			previewImgFn()
		}, 500)
	}, [])

	const previewImgFn = async () => {
		const source = await QRcode({
			source: codeText,
			src: imgUrl,
			codeSize,
			size,
			colorLight,
			colorDark,
			correctLevel,
		})
		setPreviewImgSource(source)
	}

	return (
		<Card>
			<Flex gap="3" className=" text-sm">
				<Box
					className=" flex-shrink-0"
					style={{
						width: 600,
					}}
				>
					<Upload
						text="上传Logo"
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
					<div className=" my-2">
						<PreviewImg
							imgSource={imgUrl}
							onRemove={() => {
								setImgUrl('')
							}}
						/>
					</div>

					<div className=" mb-2">
						<div className=" mb-1">Logo尺寸</div>
						<TextField.Input
							type="number"
							color="indigo"
							variant="soft"
							value={size}
							onChange={e => setSize(+e.target.value)}
						/>
					</div>
					<div className=" mb-2">
						<div className=" mb-1">二维码文本内容</div>
						<TextArea
							variant="soft"
							placeholder="请输入二维码描述内容"
							value={codeText}
							onChange={e => setCodeText(e.target.value)}
						/>
					</div>
					<div className=" mb-2">
						<div className=" mb-1">二维码尺寸</div>
						<TextField.Input
							type="number"
							color="indigo"
							variant="soft"
							value={codeSize}
							onChange={e => setCodeSize(+e.target.value)}
						/>
					</div>
					<div className=" mb-2">
						<div>文本纠错等级</div>
						<RadioGroup.Root
							value={String(correctLevel)}
							onValueChange={value => {
								setCorrectLevel(+value)
							}}
						>
							<Flex gap="2" direction="row">
								<Text as="label" size="2">
									<Flex gap="2">
										<RadioGroup.Item value={'1'} /> 低 ~7&
									</Flex>
								</Text>
								<Text as="label" size="2">
									<Flex gap="2">
										<RadioGroup.Item value={'2'} /> 中 ~15%
									</Flex>
								</Text>
								<Text as="label" size="2">
									<Flex gap="2">
										<RadioGroup.Item value={'3'} /> 四分之一 ~25%
									</Flex>
								</Text>
								<Text as="label" size="2">
									<Flex gap="2">
										<RadioGroup.Item value={'4'} /> 高 ~30%
									</Flex>
								</Text>
							</Flex>
						</RadioGroup.Root>
					</div>
					<div className=" mb-2">
						<div className=" mb-1">前景色</div>
						<TextField.Input
							type="color"
							color="indigo"
							variant="soft"
							value={colorLight}
							onChange={e => {
								console.log('aaa', e.target.value)
								setColorLight(e.target.value)
							}}
						/>
					</div>
					<div className=" mb-2">
						<div className=" mb-1">背景色</div>
						<TextField.Input
							type="color"
							color="indigo"
							variant="soft"
							value={colorDark}
							onChange={e => {
								setColorDark(e.target.value)
							}}
						/>
					</div>
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
					{previewImgSource ? (
						<img src={previewImgSource} alt="预览图" />
					) : (
						<div>加载中...</div>
					)}
				</Box>
			</Flex>
		</Card>
	)
}
