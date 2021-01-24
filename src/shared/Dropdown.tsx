import React from "react";
import styled from "styled-components";
import { FeatureRequest } from "../services/AnalyticsService";
import Label from "../styles/Label";

const StyledDropdown = styled.div`
  display: flex;
  align-items: center;
`;

const SelectedContainer = styled.div`
  display: flex;
  background-color: var(--hover-bg);
  border: solid 1px var(--input-border);
  border-radius: 0.3rem;
  padding-left: 0.7rem;
  align-items: center;
`;

const Icon = styled.img`
  height: 1.2rem;
  margin-right: 0.2rem;
`;

type SelectedProps = {
  width: number;
};

const Selected = styled.div`
  flex: 1;
  color: var(--input-text);
  padding: 0.2rem 0.7rem 0.2rem 0;
  width: ${(props: SelectedProps) => props.width + "rem"};
`;

const Button = styled.button`
  width: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Arrow = styled.div`
  transform: rotate(90deg);
  color: var(--icon);
`;

type Props = {
  label?: string;
  selected: string;
  options: string[];
  icon?: string;
};

const Dropdown = (props: Props) => {
  const optionLenghts = props.options.map((option: string) => option.length);
  const width = Math.max(...optionLenghts) * 0.57;

  return (
    <StyledDropdown>
      {props.label && <Label>{props.label + ":"}</Label>}
      <SelectedContainer>
        {props.icon && <Icon src={props.icon} />}
        <Selected width={width}>{props.selected}</Selected>
        <Button onClick={() => FeatureRequest("Dropdown")}>
          <Arrow>{">"}</Arrow>
        </Button>
      </SelectedContainer>
    </StyledDropdown>
  );
};

export default Dropdown;
