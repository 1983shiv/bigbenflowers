/** @jsx jsx */
import { useContext, useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import { Box, Text, Image, jsx } from 'theme-ui';
import ProductGrid from '../product-grid/product-grid';
import { SearchContext } from '../../provider/search-provider';
import notFoundSVG from '../../images/no-result-found.svg';
import styles from './search.style';

type PropsType = {
	allShopifyProduct: any;
};

const fuseOptions = {
	isCaseSensitive: false,
	findAllMatches: false,
	includeMatches: false,
	includeScore: false,
	useExtendedSearch: false,
	minMatchCharLength: 2,
	shouldSort: true,
	threshold: 0.3, // lower threshold value means more accurate results
	location: 0,
	distance: 100,
	keys: ['node.title', 'node.tags'],
};

const Search: React.FC<PropsType> = (props) => {
	const { allShopifyProduct } = props;
	const products = allShopifyProduct?.edges || [];
	const [value, setValue] = useState('');
	const [searchData, setSearchData] = useState([]);
	const [noResult, setNoResult] = useState(false);
	const { setIsSearched } = useContext(SearchContext);
	const fuse = new Fuse(products, fuseOptions);

	useEffect(() => {
		if (value.length > 0) {
			setIsSearched(true);
		}
		return () => setIsSearched(false);
	}, [value]);

	useEffect(() => {
		const handler = setTimeout(() => {
			let searchData: any = [];
			if (value.length) {
				const fuseData = fuse.search(value);
				if (fuseData && fuseData.length) {
					fuseData.forEach((data) => {
						searchData.push(data.item);
					});
				}
			}
			setSearchData(searchData);
		}, 500);
		return () => clearTimeout(handler);
	}, [value]);

	useEffect(() => {
		const handler = setTimeout(() => {
			if (value.length && !searchData.length) {
				setNoResult(true);
			} else {
				setNoResult(false);
			}
		}, 1000);
		return () => {
			clearTimeout(handler);
		};
	}, [value, searchData]);

	const handleClear = () => {
		setValue('');
		setNoResult(false);
	};

	return (
		<Box className="picksySearch" sx={styles.wrapper}>
			<Box as="label" className="search" sx={styles.fieldWrapper}>
				<svg className="search-icon" width="16" height="16" viewBox="0 0 16 16">
					<path
						d="M16.122,12.452a6.772,6.772,0,1,0-1.195,1.2l.036.038,3.592,3.592a.847.847,0,0,0,1.2-1.2L16.16,12.488ZM14.364,4.706a5.079,5.079,0,1,1-7.183,0A5.079,5.079,0,0,1,14.364,4.706Z"
						transform="translate(-4 -1.525)"
						fillRule="evenodd"
					/>
				</svg>

				<input
					type="text"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					placeholder="What Are You Looking For?"
					autoComplete="off"
				/>
				{value && (
					<svg
						className="close-icon"
						onClick={() => setValue('')}
						width="14"
						height="14"
						viewBox="0 0 14 14"
					>
						<path
							d="M6.115,4.792A.936.936,0,0,0,4.792,6.115l5.4,5.4-5.4,5.4a.936.936,0,0,0,1.323,1.323l5.4-5.4,5.4,5.4a.936.936,0,0,0,1.323-1.323l-5.4-5.4,5.4-5.4a.936.936,0,1,0-1.323-1.323l-5.4,5.4Z"
							transform="translate(-4.518 -4.518)"
						/>
					</svg>
				)}
			</Box>

			{value && searchData.length ? (
				<Box className="searchResult" sx={styles.searchResult}>
					<ProductGrid
						gridTitle="Search Result"
						products={searchData}
						close={handleClear}
					/>
				</Box>
			) : null}
			{value && noResult && (
				<Box className="notFound searchResult" sx={styles.searchResult}>
					<Box sx={styles.notFoundCard}>
						<Image src={notFoundSVG} alt="No Items Found" />
						<Text as="h2">No Items Found :(</Text>
						<Text as="p">Sorry mate ... no items found inside your search</Text>
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default Search;
