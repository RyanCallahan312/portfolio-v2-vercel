export function getOffset(position: number, items: number): number {
	return ((2 * Math.PI) / items) * position;
}
