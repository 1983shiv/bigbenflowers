import { useRef, useEffect } from 'react';

export default function usePrevious(value: any) {
	const ref = useRef();
	useEffect(() => void (ref.current = value), [value]);
	return ref.current;
}
