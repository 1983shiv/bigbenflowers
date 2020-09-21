import { useEffect } from 'react';

export default function useFreezeBodyScroll(freezeState: boolean) {
	useEffect(() => {
		window.document.body.style.overflow = freezeState ? 'hidden' : 'auto';
	}, [freezeState]);
}
