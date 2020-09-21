/** @jsx jsx */
import { useContext, useState, useRef } from 'react';
import { Box, Flex, Text, Image, jsx } from 'theme-ui';
import { animated, useSpring, useChain } from 'react-spring';
import LineItem from './line-item/line-item';
import Cart from './cart';
import { LocalCartContext } from '../../provider/local-cart-provider';
import useFreezeBodyScroll from '../../hooks/useFreezeBodyScroll';
import emptyCartSVG from '../../images/empty-cart.svg';

const CartStatus: React.FC<{ btnProps: any }> = ({ btnProps }) => {
	const { products, totalPrice, currency } = useContext(LocalCartContext);
	const [open, set] = useState(false);
	useFreezeBodyScroll(open);

	const cartBtnProps = useSpring({
		config: { mass: 1, tension: 800, friction: 50 },
		opacity: open ? 0 : 1,
		transform: open ? 'translateY(-100%)' : 'translateY(0)',
	});
	const cartOverlayRef = useRef();
	// @ts-ignore
	const { size, ...rest } = useSpring({
		ref: cartOverlayRef,
		config: { mass: 1, tension: 800, friction: 50 },
		from: {
			size: '70%',
			left: '15%',
			opacity: 0,
			bottom: '30px',
			borderRadius: 10,
		},
		to: {
			opacity: open ? 1 : 0,
			size: open ? '100%' : '70%',
			left: open ? '0' : '15%',
			bottom: open ? '0' : '30px',
			borderRadius: open ? 0 : 10,
		},
	});
	useChain(
		// @ts-ignore
		open ? [cartBtnProps, cartOverlayRef] : [cartOverlayRef, cartBtnProps],
		[0, open ? 0.1 : 0.2]
	);

	const getPrice = (price: any) =>
		Intl.NumberFormat(undefined, {
			currency,
			minimumFractionDigits: 2,
			style: 'currency',
		}).format(parseFloat(price ? price : 0));

	return (
		<Box className={open ? 'active' : ''} sx={styles.wrapper}>
			{products.length > 0 && (
				<animated.button
					style={{ ...btnProps, ...cartBtnProps, ...styles.cartBtn }}
					onClick={() => set(!open)}
				>
					<Flex sx={styles.cartText}>
						<svg width="16" height="16" viewBox="0 0 16 16">
							<path
								id="shopping-bag"
								d="M4.4,3.6H15.6a.8.8,0,0,1,.8.8V15.6a.8.8,0,0,1-.8.8H4.4a.8.8,0,0,1-.8-.8V4.4A.8.8,0,0,1,4.4,3.6ZM2,4.4A2.4,2.4,0,0,1,4.4,2H15.6A2.4,2.4,0,0,1,18,4.4V15.6A2.4,2.4,0,0,1,15.6,18H4.4A2.4,2.4,0,0,1,2,15.6ZM10,10C7.791,10,6,7.851,6,5.2H7.6c0,2.053,1.335,3.2,2.4,3.2s2.4-1.147,2.4-3.2H14C14,7.851,12.209,10,10,10Z"
								transform="translate(-2 -2)"
								fill="#ffffff"
								fillRule="evenodd"
							/>
						</svg>
						Added {products.length} Items
					</Flex>
					<Text sx={styles.price}>{totalPrice && getPrice(totalPrice)}</Text>
				</animated.button>
			)}

			<animated.div
				style={{
					...rest,
					width: size,
					height: size,
					position: 'fixed',
					backgroundColor: 'white',
					pointerEvents: open ? 'all' : 'none',
					zIndex: 9999,
				}}
			>
				<Cart onClick={() => set(false)}>
					<Box>
						{products.length > 0 ? (
							products.map((item) => (
								<LineItem key={`product-cart-${item.variantId}`} item={item} />
							))
						) : (
							<Box sx={styles.notFound}>
								<Image src={emptyCartSVG} alt="empty cart" />
								<Text as="h3">Your cart is empty!</Text>
								<Text as="p">Looks like you haven't made your menu yet.</Text>
							</Box>
						)}
					</Box>
				</Cart>
			</animated.div>
		</Box>
	);
};

const styles = {
	wrapper: {
		maxWidth: 960,
		margin: '0 auto',
		pointerEvents: 'none',
		width: 'calc(100% - 40px)',
		'&.active': {
			'&::after': {
				content: '""',
				display: 'block',
				width: '100vw',
				height: '100vh',
				backgroundColor: 'rgba(0, 0, 0, 0.8)',
				position: 'fixed',
				left: 0,
				bottom: 0,
			},
		},
	},
	cartBtn: {
		border: 0,
		outline: 0,
		maxWidth: 960,
		height: 50,
		color: 'white',
		padding: '0 30px',
		position: 'fixed',
		pointerEvents: 'all',
		width: 'calc(100% - 40px)',
		borderRadius: 6,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#292929',
		boxShadow: '0 6px 12px rgba(0, 0, 0, 0.12)',
		cursor: 'pointer',
		left: 'auto',
		right: 'auto',
		zIndex: 999,
	},
	cartText: {
		alignItems: 'center',
		fontSize: '15px',
		svg: {
			marginRight: 15,
		},
	},
	price: {
		fontSize: '15px',
		fontWeight: 500,
	},
	notFound: {
		textAlign: 'center',
		paddingTop: ['25px', '50px'],
		paddingBottom: ['25px', '50px'],
		img: {
			marginBottom: 30,
		},
		h3: {
			fontSize: 2,
			color: 'primary',
			marginBottom: [12, 15],
		},
	},
};

export default CartStatus;
