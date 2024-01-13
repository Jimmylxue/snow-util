import { CrossCircledIcon } from '@radix-ui/react-icons'
import './index.css'

type TProps = {
	imgSource: string
	onRemove: () => void
	size?: number
}

export function PreviewImg({ imgSource, onRemove, size = 100 }: TProps) {
	return (
		<div
			className=" relative rounded-sm overflow-hidden"
			style={{
				width: size,
				height: size,
			}}
		>
			<img src={imgSource} className=" w-full h-full" alt="" />
			<div className=" absolute left-0 top-0 w-full h-full snow-previewImg flex justify-center items-center">
				<CrossCircledIcon
					className="snow-close-icon text-white"
					onClick={onRemove}
				/>
			</div>
		</div>
	)
}
