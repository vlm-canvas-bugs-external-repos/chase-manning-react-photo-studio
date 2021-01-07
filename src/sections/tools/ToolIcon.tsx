import React from "react";
import styled from "styled-components";
import { ToolOption } from "./toolSchema";
import move from "../../assets/svgs/tools/move.svg";
import rectangularMarquee from "../../assets/svgs/tools/rectangular-marquee.svg";
import lasso from "../../assets/svgs/tools/lasso.svg";
import magicWand from "../../assets/svgs/tools/magic-wand.svg";
import crop from "../../assets/svgs/tools/crop.svg";
import frame from "../../assets/svgs/tools/frame.svg";
import eyedropper from "../../assets/svgs/tools/eyedropper.svg";
import spotHealingBrush from "../../assets/svgs/tools/spot-healing-brush.svg";
import brush from "../../assets/svgs/tools/brush.svg";
import cloneStamp from "../../assets/svgs/tools/clone-stamp.svg";

const StyledToolIcon = styled.img`
  height: 100%;
`;

const GetIcon = (option: ToolOption): string => {
  switch (option) {
    case ToolOption.MOVE:
      return move;
    case ToolOption.RECTANGULAR_MARQUEE:
      return rectangularMarquee;
    case ToolOption.LASSO:
      return lasso;
    case ToolOption.MAGIC_WAND:
      return magicWand;
    case ToolOption.CROP:
      return crop;
    case ToolOption.FRAME:
      return frame;
    case ToolOption.EYEDROPPER:
      return eyedropper;
    case ToolOption.SPOT_HEALING_BRUSH:
      return spotHealingBrush;
    case ToolOption.BRUSH:
      return brush;
    case ToolOption.CLONE_STAMP:
      return cloneStamp;
    default:
      return "";
  }
};

type Props = {
  option: ToolOption;
};

const ToolIcon = (props: Props) => {
  return <StyledToolIcon src={GetIcon(props.option)} />;
};

export default ToolIcon;
