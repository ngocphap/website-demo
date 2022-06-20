import React, { } from "react";
import {
  Menu,
  MenuItem,
  SidebarContent,
  SubMenu
} from "react-pro-sidebar";
const SubMenuItemMenu = props => {
  return (
    <>
      <SidebarContent className=" bg-dropdown-menu">
        <Menu iconShape="square" className="p-0 m-0 bg-dropdown-menu">
          {props.listMenuItem.map(item => (
            < >
              {
                props.menuCollapse ?
                  ("")
                  :
                  (<MenuItem>{item.nameMenu}</MenuItem>)
              }
              {
                item.children.map(item => (
                  <>
                    {!item.isSubmenu && <MenuItem suffix={<div className={`badge rounded-circle ${item.bg_message}`}><span >{item.numbermessage}</span></div>} icon={props.menuCollapse ? (item.iconItemMenu2) : (item.iconItemMenu)}>
                      <div>{item.nameItemMenu}</div>
                    </MenuItem>}
                    <Menu iconShape="square" className="p-0 m-0">
                      {item.isSubmenu &&
                        <SubMenu
                          open={props.isopen}
                          onOpenChange={props.clickhanlopen}
                          title={item.nameItemMenu}
                          suffix={<div className={`badge rounded-circle ${item.bg_message}`}><span >{item.numbermessage}</span></div>}
                          icon={props.menuCollapse ? (item.iconItemMenu2) : (item.iconItemMenu)}
                        >
                          {item.children?.map(items => (
                            <>
                              <Menu iconShape="square" className="p-0 m-0">
                                {!items.isSubmenu &&
                                  <MenuItem icon={items.iconItemMenu}>{items.nameItemMenu}
                                  </MenuItem>
                                }
                              </Menu>
                              {items.isSubmenu &&
                                <SubMenu title={items.nameItemMenu} >
                                  <Menu iconShape="square" className="p-0 m-0">
                                    {items.children?.map(itemss => (
                                      <MenuItem >{itemss.nameItemMenu}
                                      </MenuItem>
                                    ))}
                                  </Menu>
                                </SubMenu>
                              }
                            </>
                          ))}
                        </SubMenu>}
                    </Menu>
                  </>
                ))
              }
            </>
          ))}
        </Menu>
      </SidebarContent>
    </>
  );
}
export default SubMenuItemMenu;
