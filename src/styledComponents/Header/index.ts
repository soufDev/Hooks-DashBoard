import styled from 'styled-components';
import { lighten } from 'polished';

const menu_color = 'rgba(0, 0, 0, .35)';
const menu_bg = '#fff';

export const Nav = styled.nav`
  background-color: ${props => props.theme.menu_bg};
`;

export const MenuItem = styled.ul`
  position: relative;
  border-width: 0 0 1px;
  border-style: solid;
  &:last-child {
    border-width: 0;
  }
  border-color: ${props => props.theme.menu_item_border_color};
`;

export const Item = styled.a`
  cursor: pointer;
  color: ${props => props.theme.menu_item_color};
  background-color: ${props => props.theme.menu_item_hover_bg};
  &:hover {
    color: ${props => props.theme.menu_item_hover_color};
    background-color: ${props => props.theme.menu_item_hover_bg};
  }
`;

export const Menu = styled.ul`
  border-bottom: solid 2px red;
  display: flex;
  flex-flow: row wrap;
  ${MenuItem} {
    border-width: 0 1px 0 0;
  }
  &, ${MenuItem} {
    margin: 0;
    padding: 0;
  }

  ${Item} {
    font-weight: 700;
    padding: .75em 1.25em;
    transition: background .25s ease-in-out;
  }
  ${MenuItem},
  ${Item} {
    display: block;
    text-decoration: none;
  }
  &:nth-child(2) {
    display: none;
  };
  @media only screen and (max-width: 1023px) {
    &:nth-child(1) {
      display: flex;
      flex-flow: column wrap;
      text-align: center;
      display: ${props => props.theme.display};
      
      ${MenuItem} {
        border-width: 0 1px 0 0;
      }
    }
    &:nth-child(2) {
      display: block;
      text-align: center;
    }
  }
`;

export const theme = {
  menu_bg,
  menu_item_color: menu_color,
  menu_item_hover_color: 'rgba(88, 88, 88, .9)',
  menu_item_hover_bg: 'rgba(202, 202, 202, .9)',
  menu_item_border_color: lighten(3, menu_bg),
};