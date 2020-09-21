/** @jsx jsx */
import { useState, useContext, useEffect, useRef, Fragment } from 'react';
import { Flex, Box, Text, Button, jsx } from 'theme-ui';
import { IoIosMenu } from 'react-icons/io';
import {
	AiOutlineSearch,
	AiOutlineUser,
	AiOutlineShopping,
} from 'react-icons/ai';
import Drawer from 'rc-drawer';
import 'rc-drawer/assets/index.css';
import Logo from '../../../logo/logo';
import Search from '../../../search';
import Sidebar from '../sidebar/sidebar';
import DrawerCart from '../../../drawer-cart/drawer-cart';
import { LocalCartContext } from '../../../../provider/local-cart-provider';
import useWindowSize from '../../../../hooks/useWindowSize';
import useOnClickOutside from '../../../../hooks/useOutsideClick';
import styles from './header.style';

const Header = () => {
	const [sidebarVisibile, setSidebarVisible] = useState(false);
	const [cartVisible, setCartVisible] = useState(false);
	const [mobileSearch, setMobileSearch] = useState(false);
	const mobileSearchRef = useRef(null!);
	useOnClickOutside(mobileSearchRef, () => setMobileSearch(false));
	const { products } = useContext(LocalCartContext);
	const windowSize = useWindowSize();
	useEffect(() => {
		if (windowSize && windowSize > 1024) {
			setSidebarVisible(false);
		}
	}, [windowSize]);

	return (
		<Fragment>
			<Box as="header" sx={styles.wrapper}>
				{mobileSearch ? (
					<Box sx={styles.mobileSearch} ref={mobileSearchRef}>
						<Search />
					</Box>
				) : (
					<Fragment>
						<Flex sx={styles.logoArea}>
							<Button
								variant="text"
								sx={styles.hamburgBtn}
								onClick={() => setSidebarVisible(true)}
								ariaLabel="Hamburg menu"
							>
								<IoIosMenu />
							</Button>

							<Logo path="/modern" />
						</Flex>
						<Search />
						<Box sx={styles.icons}>
							<Button
								sx={styles.searchBtn}
								variant="text"
								ariaLabel="Search"
								onClick={() => setMobileSearch(true)}
							>
								<AiOutlineSearch />
							</Button>
							<a
								href={`https://${process.env.GATSBY_SHOP_NAME}.myshopify.com/account`}
								rel="noopener noreferrer"
								target="_blank"
								title="My account"
							>
								<AiOutlineUser />
							</a>
							<Button
								variant="text"
								ariaLabel="Cart"
								onClick={() => setCartVisible(true)}
							>
								<AiOutlineShopping />
								<Text sx={styles.badge}>{products.length}</Text>
							</Button>
						</Box>
					</Fragment>
				)}
			</Box>
			<Drawer
				level={null}
				width="100%"
				open={sidebarVisibile}
				handler={false}
				placement="left"
				onClose={() => setSidebarVisible(false)}
			>
				<Sidebar onClose={() => setSidebarVisible(false)} />
			</Drawer>
			<DrawerCart
				open={cartVisible}
				onClick={() => setCartVisible(false)}
				onClose={() => setCartVisible(false)}
				products={products}
			/>
		</Fragment>
	);
};

export default Header;
