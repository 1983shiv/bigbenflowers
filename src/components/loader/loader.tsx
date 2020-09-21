import React from 'react';
import Wrapper, { Dot } from './loader.style';

const Loader = () => {
	return (
		<Wrapper>
			<Dot className="dot-1" />
			<Dot className="dot-2" />
			<Dot className="dot-3" />
		</Wrapper>
	);
};

export default Loader;
