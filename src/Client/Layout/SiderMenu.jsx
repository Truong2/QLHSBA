// import React, { useMemo } from "react";
// import { Link, useHistory, useLocation } from "react-router-dom";
// import { Menu } from "antd";
// import { useTranslation } from "react-i18next";
// import PropTypes from "prop-types";
// import { useUser } from "app/hooks";
// import styled from "styled-components";

// const { SubMenu, Item } = Menu;

// const CustomMenu = styled(Menu)`
//   padding-left: 4px;
//   padding-right: 4px;
//   ${({ type }) =>
//     type === "DEV" &&
//     `
// 		color: #d5d8ea;
// 		background-color: #212d6e;
// 	`}
// `;

// const CustomSubItem = styled(Item)`
//   ${({ selected, type }) =>
//     selected &&
//     type === "ADMIN" &&
//     `
// 		color: #2C3D94;
// 		background-color: #EAECF4;
// 		`}
//   ${({ selected, type }) =>
//     selected &&
//     type === "DEV" &&
//     `
// 		color: #F6CD4C;
// 		`}
// 	${({ isTitle }) =>
//     isTitle &&
//     `
// 		&:active {
// 			background-color: #ffffff;
// 		}
// 		cursor: default;
// 		color: #2C3D94;
// 		font-weight: 700;
// 	`}
// 	${({ type }) =>
//     type === "DEV" &&
//     `
// 			&:hover {
// 				color: #F6CD4C !important;
// 			}

// 		`}
// `;

// const CustomSubmenu = styled(SubMenu)`
//   ${({ type }) =>
//     type === "DEV" &&
//     `
// 		&:hover {
// 			.ant-menu-submenu-arrow {
// 				color: #ffffff !important;
// 			}
// 		}
// 		.ant-menu-sub.ant-menu-inline {
// 			color: #d5d8ea;
// 			background: #212d6e;
// 		}

// 		.ant-menu-submenu-expand-icon, .ant-menu-submenu-arrow {
// 			color: #d5d8ea;
// 		}
// 	`}
//   ${({ selected }) =>
//     selected &&
//     `
// 		.ant-menu-submenu-title {
// 			color: #ffffff;
// 			background-color: #2c3d94 !important;
// 			border-radius: 0.75em;
// 		}
// 		.ant-menu-submenu-arrow {
// 			color: #ffffff;
// 		}
// 	`}
// 	${({ type, selected }) =>
//     type === "DEV" &&
//     !selected &&
//     `
// 		.ant-menu-submenu-title:hover {
// 			color: #F6CD4C !important;
// 			.ant-menu-submenu-arrow {
// 				color: #F6CD4C !important;
// 			}
// 		}
// 	`}
// 	${({ type, selected }) =>
//     type === "DEV" &&
//     selected &&
//     `
// 		.ant-menu-submenu-title:hover {
// 			color: #ffffff !important;
// 			.ant-menu-submenu-arrow {
// 				color: #ffffff !important;
// 			}
// 		}
// 	`}
// 	${({ type, selected }) =>
//     type === "ADMIN" &&
//     selected &&
//     `
// 		.ant-menu-submenu-title:hover {
// 			color: #ffffff !important;
// 			.ant-menu-submenu-arrow {
// 				color: #ffffff !important;
// 			}
// 		}
// 	`}
// `;

// const SiderMenu = ({ menus, rootPath, type, isCollapsed }) => {
//   const { user } = useUser();
//   const { t } = useTranslation("left_menu");
//   const history = useHistory();
//   const { pathname } = useLocation();
//   function onRouterSubMenu(toSub, link) {
//     if (link) {
//       return window.open(link, "_blank");
//     }
//     return history.push(rootPath + toSub);
//   }
//   const selectedKey = useMemo(() => pathname.replace(rootPath, ""), [pathname]);

//   const isTechId = user?.techId;
//   return (
//     <CustomMenu
//       type={type}
//       mode="inline"
//       selectedKeys={[selectedKey]}
//       defaultOpenKeys={[`/${selectedKey.split("/")[1]}`]}
//       className="py-4"
//     >
//       {menus.map(({ to, Icon, title, subMenus, hide: hideMenu }, indexMenu) => {
//         if (hideMenu) {
//           return null;
//         }
//         if (subMenus) {
//           return (
//             <CustomSubmenu
//               type={type}
//               key={`${to}_${indexMenu}`}
//               icon={<Icon className="mr-3 inline-block" width="w-3" />}
//               title={t(title)}
//               selected={subMenus?.some((element) => {
//                 if (pathname.includes(element.to)) {
//                   return true;
//                 }
//                 return false;
//               })}
//             >
//               {isCollapsed && (
//                 <CustomSubItem type={type} isTitle title={t(title)}>
//                   {t(title)}
//                 </CustomSubItem>
//               )}
//               {subMenus.map(
//                 ({ to: toSub, title: titleSub, hide, link }, indexSubMenu) => {
//                   if (
//                     hide ||
//                     (isTechId && toSub === "/account/change-password")
//                   ) {
//                     return null;
//                   }

//                   return (
//                     <CustomSubItem
//                       type={type}
//                       onClick={() => {
//                         onRouterSubMenu(toSub, link);
//                       }}
//                       key={`${toSub}_${indexMenu}_${indexSubMenu}`}
//                       title={titleSub}
//                       selected={
//                         pathname?.split("/").slice(2).join("/") ===
//                         toSub?.split("/").slice(1).join("/")
//                       }
//                     >
//                       {t(titleSub)}
//                     </CustomSubItem>
//                   );
//                 }
//               )}
//             </CustomSubmenu>
//           );
//         }

//         return (
//           <Item
//             onClick={() => {
//               onRouterSubMenu(to);
//             }}
//             key={to}
//             icon={<Icon className="mr-3 inline-block" width="w-3" />}
//           >
//             {t(title)}
//           </Item>
//         );
//       })}
//     </CustomMenu>
//   );
// };

// SiderMenu.propTypes = {
//   rootPath: PropTypes.string.isRequired,
//   menus: PropTypes.arrayOf(Object),
// };

// SiderMenu.defaultProps = {
//   menus: [],
// };

// export default React.memo(SiderMenu);
