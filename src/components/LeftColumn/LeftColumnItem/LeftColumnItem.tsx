import { FC } from "react";
import { Icon } from "@/components";
import {
  StyledImage,
  StyledImageWrapper,
  StyledInnerWrapper,
  StyledText,
  StyledTextWrapper,
  StyledWrapper
} from "./styles";
import { LeftColumnItemProps } from "./types";

const LeftColumnItem: FC<LeftColumnItemProps> = ({
  id,
  item,
  rows,
  onItemClick,
  wrapItemTitle
}) => {
  return (
    <StyledWrapper
      // title={item.title + " | " + item.subtitle}
      title={`${item.title}${item.subtitle ? " | " + item.subtitle : ""}`}
      clickable={typeof onItemClick === "function"}
      rows={rows}
      onClick={() => onItemClick?.({ id, label: item })}>
      <StyledInnerWrapper>
        <StyledImageWrapper>
          {item.icon ? (
            <StyledImage src={item.icon} alt="Icon"></StyledImage>
          ) : (
            <Icon iconName="defaultAvatar" />
          )}
        </StyledImageWrapper>
        <StyledTextWrapper>
          <StyledText isMain style={{ whiteSpace: wrapItemTitle ? "nowrap" : "normal" }}>
            {item.title}
          </StyledText>
          <StyledText>{item.subtitle}</StyledText>
        </StyledTextWrapper>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

export default LeftColumnItem;
