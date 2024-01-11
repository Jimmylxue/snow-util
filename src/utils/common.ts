/**
 * 复制文件到剪切板
 * @param text string
 */
export function copyToClipboard(text: string) {
	const textArea = document.createElement('textarea')
	textArea.value = text
	document.body.appendChild(textArea)
	textArea.select()
	document.execCommand('copy')
	document.body.removeChild(textArea)
}

/**
 * rgb颜色转换为16进制颜色
 * @param rgb string
 * @returns string
 */
export function rgbToHex(rgb: string) {
	var sep = rgb.indexOf(',') > -1 ? ',' : ' '
	const newRgb = rgb.substr(4).split(')')[0].split(sep)

	var r = parseInt(newRgb[0], 10)
	var g = parseInt(newRgb[1], 10)
	var b = parseInt(newRgb[2], 10)

	var red = r.toString(16).padStart(2, '0')
	var green = g.toString(16).padStart(2, '0')
	var blue = b.toString(16).padStart(2, '0')

	return '#' + red + green + blue
}
