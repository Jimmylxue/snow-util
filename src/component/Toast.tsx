import { Callout } from '@radix-ui/themes'
import { InfoCircledIcon } from '@radix-ui/react-icons'
import { useToast } from '../hooks/useToast'

export function Toast() {
	const { visible, describe } = useToast()
	return (
		visible && (
			<div
				className=" fixed top-20"
				style={{
					left: '50%',
					transform: 'translateX(-50%)',
				}}
			>
				<Callout.Root color="blue">
					<Callout.Icon>
						<InfoCircledIcon />
					</Callout.Icon>
					<Callout.Text>{describe}</Callout.Text>
				</Callout.Root>
			</div>
		)
	)
}
