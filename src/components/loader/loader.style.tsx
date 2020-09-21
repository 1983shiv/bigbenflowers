import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const grow = keyframes`
  0%, 40%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	overflow: hidden;
	.dot-2 {
		animation: 1.2s ${grow} ease-in-out infinite 0.15555s;
	}
	.dot-3 {
		animation: 1.2s ${grow} ease-in-out infinite 0.3s;
	}
`;

export const Dot = styled.div`
	height: 8px;
	width: 8px;
	border-radius: 50%;
	margin-left: 2px;
	margin-right: 2px;
	background-color: #292929;
	animation: 1.2s ${grow} ease-in-out infinite;
`;

export default Wrapper;
