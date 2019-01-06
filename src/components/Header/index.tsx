import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, Nav, Menu, MenuItem, Item as ItemMenu } from '../../styledComponents/Header';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import AuthService from '../../Auth';

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
  const [itemFocus, setItemFocus] = useState('');
  const [focus, setFocus] = useState(false);
  const handleExpendMenu = () => setFocus(!focus);
  const handleMenuClick = (e: { target: { name: string, title: string }}) => {
    const title = e.target.title.toLowerCase()
    setItemFocus(title);
    if (title === 'signout') {
      AuthService.logout();
      setItemFocus('home');
      props.history.push('/');
    } else {
      props.history.push(`/${title}`);
    }
  }
  const result = (AuthService.loggedIn() && !AuthService.isTokenExpired(AuthService.getToken())) ? 
    (
      <ThemeProvider theme={{...theme, display: focus ? 'block': 'none' } }>
        <Nav>
          <Menu>
            <MenuItem><Item title="Home" name={itemFocus} onClick={handleMenuClick}/></MenuItem>
            <MenuItem><Item title="Orders" name={itemFocus} onClick={handleMenuClick} /></MenuItem>          
            <MenuItem><Item title="Signout" name={itemFocus} onClick={handleMenuClick}/></MenuItem>
          </Menu>
          <Menu>
            <MenuItem><Item onClick={handleExpendMenu} title="Menu" name="menu"/></MenuItem>
          </Menu>
        </Nav>
      </ThemeProvider>
  ) : (<></>)
  return result;
}

export default withRouter(Header);