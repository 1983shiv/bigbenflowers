import React, { Fragment } from 'react';
import { ThemeProvider } from 'theme-ui';
import { Global } from '@emotion/core';
import { Helmet } from 'react-helmet';
import CartProvider from '../../provider/cart-provider';
import LocalCartProvider from '../../provider/local-cart-provider';
import SearchProvider from '../../provider/search-provider';
import theme from '../../gatsby-plugin-theme-ui';
import styles from './layout.style';

const Layout: React.FunctionComponent = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<LocalCartProvider>
				<CartProvider>
					<SearchProvider>
						<Fragment>
							<Helmet>
								<meta
									name="viewport"
									content="width=device-width, initial-scale=1 maximum-scale=1"
								/>
							</Helmet>
							<Global styles={styles} />
							{children}
						</Fragment>
					</SearchProvider>
				</CartProvider>
			</LocalCartProvider>
		</ThemeProvider>
	);
};

export default Layout;
