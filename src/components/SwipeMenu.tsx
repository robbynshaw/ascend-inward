import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AvatarIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import styled from 'styled-components';

const MenuList = styled.li`
    width: 250px;
`;

const MenuHeader = styled.h2`
  text-align: center;
`;

export interface IMenuProps {
    toggleDrawer: Function;
    menuOpen: boolean;
}

export default function SwipeMenu(props: IMenuProps) {
  return (
    <div>
      <SwipeableDrawer
        open={props.menuOpen}
        onClose={props.toggleDrawer(false)}
        onOpen={props.toggleDrawer(true)}
      >
        <MenuList
          role="presentation"
          onClick={props.toggleDrawer(false)}
          onKeyDown={props.toggleDrawer(false)}
        >
          <MenuHeader>ascend-inward</MenuHeader>
          <List>
              <ListItem button>
                <ListItemIcon>
                  <AvatarIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
          </List>
        </MenuList>
      </SwipeableDrawer>
    </div>
  );
}