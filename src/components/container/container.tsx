import React from 'react';
import Wrapper from './container.style';

type Props = {
	fluid?: boolean;
	className?: string;
};

const Container: React.FunctionComponent<Props> = ({
	fluid,
	className,
	children,
}) => {
	const classNames = ['container'];
	if (fluid) {
		classNames.push('fluid');
	}
	if (className) {
		classNames.push(className);
	}
	return (
		<Wrapper className={classNames.join(' ')} fluid={fluid}>
			{children}
		</Wrapper>
	);
};

export default Container;
