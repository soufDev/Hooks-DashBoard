import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, Nav, Menu, MenuItem, Item as ItemMenu } from '../../styledComponents/Header';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface ItemProps {
  title: string;
  name: string;
  onClick?: (e?: any) => void;
}

function Item(props: ItemProps) {
  const { title, name } = props;
  const backgroundColor = title.toLowerCase() === name ? theme.menu_item_hover_bg: theme.menu_bg; 
  return (
    <ItemMenu {...props} theme={{...theme, menu_item_hover_bg: backgroundColor}}>
      {props.title}
    </ItemMenu>
  )
}

function Header(props: RouteComponentProps<{ history?: string }>) {
  const [itemFocus, setItemFocus] = useState('ff');
  const [focus, setFocus] = useState(false);
  const handleExpendMenu = () => setFocus(!focus);
  const hanldeMenuClick = (e: { target: { name: string, title: string }}) => {
    const title = e.target.title.toLowerCase()
    setItemFocus(title);
    if (title === 'signout')
      props.history.push(`/`);
    else props.history.push(`/${title}`);
  }
  return (
    <ThemeProvider theme={{...theme, display: focus ? 'block': 'none' } }>
      <Nav>
        <Menu>
          <MenuItem><Item title="Home" name={itemFocus} onClick={hanldeMenuClick}/></MenuItem>
          <MenuItem><Item title="Orders" name={itemFocus} onClick={hanldeMenuClick} /></MenuItem>
          <MenuItem><Item title="Bikers" name={itemFocus} onClick={hanldeMenuClick}/></MenuItem>
          <MenuItem><Item title="Signout" name={itemFocus} onClick={hanldeMenuClick}/></MenuItem>
        </Menu>
        <Menu>
          <MenuItem><Item onClick={handleExpendMenu} title="Menu" name="menu"/></MenuItem>
        </Menu>
      </Nav>
    </ThemeProvider>
  )
}

export default withRouter(Header);