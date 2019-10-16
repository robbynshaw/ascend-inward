import * as React from "react";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import SwipeMenu from "./SwipeMenu";
import Theme from "../Theme";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const MenuButton = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;
  z-index: 10;
`;

const MenuIconButton = styled(IconButton)`
  background-color: ${Theme.colors.darkBackground};
  color: ${Theme.colors.lightText};
`;

export interface ILayoutState {
    auth: boolean;
    anchorEl: any;
    menuOpen: boolean;
}

class Layout extends React.Component<{}, ILayoutState> {
  state: ILayoutState = {
    auth: true,
    anchorEl: null,
    menuOpen: false,
  };

  constructor(props: {}) {
    super(props);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  
  toggleDrawer(open: boolean) {
    return (
    event: React.KeyboardEvent | React.MouseEvent,
    ) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      this.setState({ ...this.state, menuOpen: open });
    };
  }

  handleMenu = (event : React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    return (
      <Container>
        <MenuButton>
            <MenuIconButton
              aria-label="Menu"
              onClick={this.toggleDrawer(true)}
            >
              <MenuIcon
                onClick={this.toggleDrawer(true)}
              />
            </MenuIconButton>
        </MenuButton>
        <SwipeMenu
          toggleDrawer={this.toggleDrawer}
          menuOpen={this.state.menuOpen}
        />
        {this.props.children}
      </Container>
    );
  }
}

export default Layout;