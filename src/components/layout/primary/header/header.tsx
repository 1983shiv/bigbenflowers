/** @jsx jsx */
import { useContext, useEffect, useState } from 'react';
import { Box, jsx } from 'theme-ui';
import Sticky from 'react-stickynode';
import Noticebar from '../../../noticebar/noticebar';
import { SearchContext } from '../../../../provider/search-provider';
import useFreezeBodyScroll from '../../../../hooks/useFreezeBodyScroll';
import Topbar from './topbar/topbar';
import Navbar from './navbar/navbar';
import styles from './header.style';

const Header: React.FC<{
	fluid?: boolean;
	showNoticeBar?: boolean;
	homeLink?: string;
	pathPrefix?: string;
}> = ({ fluid, showNoticeBar = true, homeLink, pathPrefix }) => {
	const [notice, setNotice] = useState(false);
	const { isSearched } = useContext<any>(SearchContext);
	useFreezeBodyScroll(isSearched);
	useEffect(() => {
		const storedValue = window.localStorage.getItem('notice');
		const noticePreference = storedValue ? JSON.parse(storedValue) : true;
		setNotice(noticePreference);
	}, []);
	const handleCloseNotice = () => {
		setNotice(false);
		window.localStorage.setItem('notice', JSON.stringify(false));
	};
	const addClass = [];
	if (notice && showNoticeBar) {
		addClass.push('isNoticeActive');
	}
	if (isSearched) {
		addClass.push('isSearchedActive');
	}

	return (
		<Box as="header" sx={styles.header}>
			{notice && showNoticeBar && (
				<Noticebar fluid={fluid} onClose={handleCloseNotice} />
			)}
			<Box sx={styles.showOnlyDesktop} className={addClass.join(' ')}>
				<Topbar fluid={fluid} homeLink={homeLink} />
			</Box>
			<Box sx={styles.showOnlyTab}>
				<Sticky activeClass="active" innerZ={9}>
					<Topbar fluid={fluid} homeLink={homeLink} />
				</Sticky>
			</Box>
			<Box sx={styles.showOnlyDesktop}>
				<Sticky activeClass="active" innerZ={9}>
					<Navbar fluid={fluid} homeLink={homeLink} pathPrefix={pathPrefix} />
				</Sticky>
			</Box>
		</Box>
	);
};

export default Header;
