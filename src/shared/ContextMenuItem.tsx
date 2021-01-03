import React, { useState } from "react";
import styled from "styled-components";
import { ItemType } from "../sections/menu/schema/menu-items";
import { ReactComponent as ArrowIcon } from "../assets/svgs/navigation/triangle-right.svg";
import ContextMenu from "./ContextMenu";

const StyledContextMenuItem = styled.div`
  position: relative;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.2rem 1rem 0.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  :hover {
    background-color: var(--context-hover);
  }
`;

const ItemText = styled.div`
  color: var(--text);
  font-size: 1.3rem;
  white-space: nowrap;
`;

const Icon = styled.div`
  margin-left: 4rem;
`;

const Arrow = styled(ArrowIcon)`
  height: 1rem;
  fill: var(--text);
`;

type Props = {
  menuItem: ItemType;
  close: () => void;
};

const ContextMenuItem = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledContextMenuItem
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Button
        onClick={() => {
          if (props.menuItem.action) props.menuItem.action();
          props.close();
        }}
      >
        <ItemText>{props.menuItem.name}</ItemText>
        <Icon>{props.menuItem.itemSets && <Arrow />}</Icon>
      </Button>
      {props.menuItem.itemSets && (
        <ContextMenu
          open={open}
          itemSets={props.menuItem.itemSets}
          close={() => {
            setOpen(false);
            props.close();
          }}
          subMenu={true}
        />
      )}
    </StyledContextMenuItem>
  );
};

export default ContextMenuItem;
