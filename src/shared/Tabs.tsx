import React, { useState } from "react";
import styled from "styled-components";

const StyledTabs = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: solid 1px var(--border);
`;

const Header = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type ItemProps = {
  active?: boolean;
};

const HeaderItem = styled.div`
  height: 100%;
  padding: 0.5rem;
  color: ${(props: ItemProps) =>
    props.active ? "var(--tab-text)" : "var(--tab-text-inactive)"};
  background-color: ${(props: ItemProps) =>
    props.active ? "var(--panel)" : "var(--expandable)"};
  border-right: solid 1px var(--border);
  border-bottom: solid 1px var(--border);
  border-bottom: ${(props: ItemProps) =>
    props.active ? "solid 1px var(--panel)" : "solid 1px var(--border)"};
`;

const MenuContainer = styled.div`
  flex: 1;
  height: 100%;
  justify-content: end;
  align-items: center;
  border-bottom: solid 1px var(--border);
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2rem;
`;

const Line = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: var(--menu-lines);
  margin-bottom: 0.1rem;
`;

export type TabType = {
  label: string;
  content: JSX.Element;
};

type Props = {
  tabs: TabType[];
};

const Tabs = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <StyledTabs>
      <Header>
        {props.tabs.map((tab: TabType, index: number) => (
          <HeaderItem
            onClick={() => setActiveIndex(index)}
            active={index === activeIndex}
          >
            {tab.label}
          </HeaderItem>
        ))}
        <MenuContainer>
          <Menu>
            <Line />
            <Line />
            <Line />
            <Line />
          </Menu>
        </MenuContainer>
      </Header>
      {props.tabs[activeIndex].content}
    </StyledTabs>
  );
};

export default Tabs;