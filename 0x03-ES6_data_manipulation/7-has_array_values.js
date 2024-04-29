export default function(set, array) {
	return array.every(element => set.has(element));
}
