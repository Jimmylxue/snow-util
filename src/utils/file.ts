export function base64ToBlob(code: string) {
	const parts = code.split(';base64,')
	const contentType = parts[0].split(':')[1]
	const raw = window.atob(parts[1])
	const rawLength = raw.length
	const uint8Array = new Uint8Array(rawLength)
	for (let i = 0; i < rawLength; i++) {
		uint8Array[i] = raw.charCodeAt(i)
	}
	return new Blob([uint8Array], { type: contentType })
}

export function blob2DownLoad(blob: any) {
	const aLink = document.createElement('a') // 创建一个a标签
	const event = document.createEvent('HTMLEvents')
	event.initEvent('click', true, true)
	aLink.download = new Date().getTime() + '.' + blob.type.split('/')[1] // 使用时间戳给文件命名
	aLink.href = URL.createObjectURL(blob)
	aLink.click()
}

export function downloadBase64(base64: string) {
	const blob = base64ToBlob(base64)
	blob2DownLoad(blob)
}
