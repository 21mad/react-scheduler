import { FC, useRef } from "react";
import styled, { useTheme } from "styled-components";
import { Tooltip, tooltipClasses } from "@mui/material";
import dayjs from "dayjs";
import { Instance } from "@popperjs/core";
import { useCalendar } from "@/context/CalendarProvider";
import { getDatesRange } from "@/utils/getDatesRange";
import { getTileProperties } from "@/utils/getTileProperties";
import { getTileTextColor } from "@/utils/getTileTextColor";
import {
  StyledDescription,
  StyledStickyWrapper,
  StyledText,
  StyledTextWrapper,
  StyledTileWrapper
} from "./styles";
import { TileProps } from "./types";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.colors.tooltip
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.colors.tooltip
  }
}));

const Tile: FC<TileProps> = ({ row, data, zoom, onTileClick }) => {
  const { date } = useCalendar();
  const datesRange = getDatesRange(date, zoom);
  const { y, x, width } = getTileProperties(
    row,
    datesRange.startDate,
    datesRange.endDate,
    data.startDate,
    data.endDate,
    zoom
  );

  // console.log(`Tile properties: ${data.title} `, { y, x, width });

  const { colors } = useTheme();
  const { config } = useCalendar();
  const { showTooltip = true } = config;

  const positionRef = useRef<{ x: number; y: number }>({
    x: 0,
    y: 0
  });
  const popperRef = useRef<Instance>(null);
  const areaRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current !== null) {
      popperRef.current.update();
    }
  };

  return (
    <BootstrapTooltip
      title={
        <div>
          <StyledText bold>{data.title}</StyledText>
          {data.subtitle && data.title && (
            <span style={{ margin: "0 3px", fontWeight: "bold" }}>|</span>
          )}
          <StyledText>{data.subtitle}</StyledText>
          <hr />
          <StyledDescription>{data.description}</StyledDescription>
          <StyledDescription>
            Начало: {dayjs(data.startDate).format("DD.MM.YYYY")}
          </StyledDescription>
          <StyledDescription>
            Окончание: {dayjs(data.endDate).format("DD.MM.YYYY")}
          </StyledDescription>
        </div>
      }
      style={{
        backgroundColor: colors.defaultTile
      }}
      disableHoverListener={!showTooltip}
      disableInteractive
      leaveTouchDelay={500}
      placement="top"
      arrow={true}
      slotProps={{
        popper: {
          popperRef,
          anchorEl: {
            getBoundingClientRect: () => {
              return new DOMRect(
                positionRef.current.x,
                areaRef.current?.getBoundingClientRect().y,
                0,
                0
              );
            }
          }
        }
      }}>
      <StyledTileWrapper
        style={{
          left: `${x}px`,
          top: `${y}px`,
          backgroundColor: `${data.bgColor ?? colors.defaultTile}`,
          width: `${width}px`,
          color: getTileTextColor(data.bgColor ?? "")
        }}
        ref={areaRef}
        onMouseMove={handleMouseMove}
        onClick={() => onTileClick?.(data)}>
        <StyledTextWrapper>
          <StyledStickyWrapper>
            <StyledText bold>{data.title}</StyledText>
            {data.subtitle && data.title && (
              <span style={{ margin: "0 3px", fontWeight: "bold" }}>|</span>
            )}
            <StyledText>{data.subtitle}</StyledText>
            <StyledDescription>{data.description}</StyledDescription>
          </StyledStickyWrapper>
        </StyledTextWrapper>
      </StyledTileWrapper>
    </BootstrapTooltip>
  );
};

export default Tile;
