export default function createInt8TypeArray(length, position, value) {
	if (postion < 0 || postion >= length) {
		throw new Error('Position outside range');
	}
	const buffer = new ArrayBuffer(length);
	const view = new Int8Array(buffer);
	view[position] = value;

	return buffer;
}
