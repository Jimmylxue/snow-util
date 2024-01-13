import { Box, Button, Card, Flex, Slider } from '@radix-ui/themes'
import { Upload } from '@/components/Upload'
import { useEffect, useState } from 'react'
import { blur } from 'esay-watermark'
import picImg from '@/assets/img/picImage.jpeg'
import { downloadBase64 } from '@/utils/file'

export function Blur() {
	const [imgUrl, setImgUrl] = useState<string>(picImg)
	const [previewImgSource, setPreviewImgSource] = useState<string>('')
	const [radius, setRadius] = useState<number>(10)

	useEffect(() => {
		setTimeout(() => {
			previewImgFn()
		}, 500)
	}, [])

	const previewImgFn = async () => {
		const source = await blur({
			src: imgUrl,
			radius,
		})
		setPreviewImgSource(source)
	}

	return (
		<Card className=" text-sm">
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
						<div className=" mb-1">模糊力度</div>
						<Slider
							defaultValue={[75]}
							value={[radius]}
							variant="soft"
							onValueChange={e => {
								setRadius(e?.[0])
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
