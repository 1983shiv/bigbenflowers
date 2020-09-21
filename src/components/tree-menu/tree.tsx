/** @jsx jsx */
import React, { memo } from 'react';
import { Box, jsx } from 'theme-ui';
import { useSpring, animated } from 'react-spring';
import usePrevious from '../../hooks/usePrevious';
import useMeasure from '../../hooks/useMeasure';

type Props = {
	handler: string | React.ReactNode;
	name?: string;
	style?: React.CSSProperties;
	isOpen?: boolean;
	className?: string;
	onClick?: (e: any) => void;
};

const Tree: React.FC<Props> = memo(
	({ children, handler, style, onClick, isOpen, className }) => {
		const addClass = ['parent'];
		const previous = usePrevious(isOpen);
		const [bind, { height: viewHeight }] = useMeasure();
		const { height, opacity, transform } = useSpring({
			from: {
				height: 0,
				opacity: 0,
				transform: 'translate3d(20px,0,0)',
			},
			to: {
				height: isOpen ? viewHeight : 0,
				opacity: isOpen ? 1 : 0,
				transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
			},
		});
		if (className) {
			addClass.push(className);
		}

		return (
			<Box className={addClass.join(' ')} sx={{ overflowX: 'hidden' }}>
				<Box
					style={style}
					onClick={onClick}
					className={`handler ${isOpen ? 'active' : ''}`}
				>
					{handler}
				</Box>
				<animated.div
					style={{
						opacity,
						height: isOpen && previous === isOpen ? 'auto' : height,
						visibility: isOpen ? 'visible' : 'hidden',
						overflow: 'hidden',
					}}
					className="child"
				>
					<animated.div style={{ transform }} {...bind} children={children} />
				</animated.div>
			</Box>
		);
	}
);

export default Tree;
