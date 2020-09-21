/** @jsx jsx */
import { StaticQuery, graphql } from 'gatsby';
import { Box, Text, jsx, Button } from 'theme-ui';
import { IoIosClose } from 'react-icons/io';
import TreeMenu from '../../../tree-menu/tree-menu';
import styles from './sidebar.style';

const menuStaticQuery = graphql`
	query {
		prismic {
			firstData: allCategorys {
				totalCount
				edges {
					cursor
					node {
						_meta {
							uid
						}
						title
						parent_category {
							... on PRISMIC_Category {
								title
								_meta {
									uid
								}
							}
						}
					}
				}
				pageInfo {
					hasNextPage
					endCursor
				}
			}
			lastData: allCategorys(after: "YXJyYXljb25uZWN0aW9uOjE5") {
				totalCount
				edges {
					cursor
					node {
						_meta {
							uid
						}
						title
						parent_category {
							... on PRISMIC_Category {
								title
								_meta {
									uid
								}
							}
						}
					}
				}
				pageInfo {
					hasNextPage
					endCursor
				}
			}
		}
	}
`;

const getMenuData = (categories) => {
	const data: any = [];
	//fill up first parent
	categories.forEach((category: any) => {
		if (!category?.node?.parent_category) {
			const uid = category?.node?._meta.uid;
			const text = category?.node?.title[0]?.text;
			if (uid && text) {
				data.push({ path: uid, title: text });
			}
		}
	});
	//fill up child
	categories.forEach((category: any) => {
		if (category?.node?.parent_category) {
			const parent = category?.node?.parent_category?._meta?.uid;
			const uid = category?.node?._meta.uid;
			const text = category?.node?.title[0]?.text;
			const index = data.findIndex((item: any) => item.path === parent);
			if (index > -1) {
				if (data[index]?.submenu && data[index]?.submenu?.length) {
					data[index].submenu.push({ path: uid, title: text });
				} else {
					data[index].submenu = [];
					data[index].submenu.push({ path: uid, title: text });
				}
			}
		}
	});
	return data;
};

const Sidebar: React.FC<{ onClose?: () => void }> = ({ onClose }) => (
	<StaticQuery<GatsbyTypes.Query>
		query={`${menuStaticQuery}`}
		render={(data: any) => {
			const firstData = data?.prismic?.firstData || false;
			const lastData = data?.prismic?.lastData || false;
			let categories: any = [];
			if (firstData && lastData) {
				categories = [...firstData?.edges, ...lastData?.edges];
			}
			const menuData = getMenuData(categories);
			return (
				<Box sx={styles.wrapper}>
					<Box sx={styles.header}>
						<Text as="p" sx={styles.text}>
							All Categories
						</Text>
						<Button variant="text" onClick={onClose}>
							<IoIosClose />
						</Button>
					</Box>
					<TreeMenu items={menuData} />
				</Box>
			);
		}}
	/>
);

export default Sidebar;
