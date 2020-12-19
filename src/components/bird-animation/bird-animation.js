import React from 'react';
import styled, { keyframes } from 'styled-components';

const flyCycle = keyframes`
	100% {background-position: -900px 0}
`;

const flyRightOne = keyframes`
		0% {transform: scale(0.3) translateX(-10vw)}
		10% {transform: translateY(2vh) translateX(10vw) scale(0.4)}
		20% {transform: translateY(0vh) translateX(30vw) scale(0.5)}
		30% {transform: translateY(4vh) translateX(50vw) scale(0.6)}
		40% {transform: translateY(2vh) translateX(70vw) scale(0.6)}
		50% {transform: translateY(0vh) translateX(90vw) scale(0.6)}
		60% {transform: translateY(0vh) translateX(110vw) scale(0.6)}
		100% {transform: translateY(0vh) translateX(110vw) scale(0.6)}
`;

const Container = styled.div`
	z-index: -1;
	position: absolute;
	top: 0;
	left: 0;
	overflow: hidden;
	width: 100vw;
	background-color: transparent;
	height: 100vh;
	@media only screen and (max-width: 800px) {
		height: 30vh;
	}
`;

const Bird = styled.div`
	background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg);
	background-size: auto 100%;
	width: 88px;
	height: 125px;
	will-change: background-position;
	animation-name: ${flyCycle};
	animation-timing-function: steps(10);
	animation-iteration-count: infinite;
`;

const BirdOne = styled(Bird)`
	animation-duration: 1s;
	animation-delay: -0.5s;
`;
const BirdTwo = styled(Bird)`
	animation-duration: 1.25s;
	animation-delay: -0.25s;
`;

const BirdContainer = styled.div`
	position: absolute;
	top: 20%;
	left: -10%;
	transform: scale(0) translateX(-10vw);
	will-change: transform;
	animation-name: ${flyRightOne};
	animation-timing-function: linear;
	animation-iteration-count: infinite;
`;

const BirdContainerOne = styled(BirdContainer)`
	animation-duration: 15s;
	animation-delay: 0;
`;

const BirdContainerTwo = styled(BirdContainer)`
	animation-duration: 14.6s;
	animation-delay: 9.5s;
`;

const BirdAnimation = () => {
	return (
		<Container>
			<BirdContainerOne>
				<BirdOne></BirdOne>
			</BirdContainerOne>
			<BirdContainerTwo>
				<BirdTwo></BirdTwo>
			</BirdContainerTwo>
		</Container>
	);
};

export default BirdAnimation;
