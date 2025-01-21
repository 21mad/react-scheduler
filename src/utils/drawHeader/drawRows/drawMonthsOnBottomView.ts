import dayjs from "dayjs";
import {
  fonts,
  headerMonthHeightYearView,
  middleRowTextYPosYearView,
  monthsInYear,
  singleDayWidthInYear
} from "@/constants";
import { Day } from "@/types/global";
import { getDaysInMonths } from "@/utils/dates";
import { Theme } from "@/styles";
import { getBoxFillStyle } from "@/utils/getBoxFillStyle";
import { drawRow } from "../../drawRow";

export const drawMonthsOnBottomYearView = (
  ctx: CanvasRenderingContext2D,
  cols: number,
  startDate: Day,
  theme: Theme
) => {
  let xPos = 0;
  const yPos = headerMonthHeightYearView;
  const monthIndex = startDate.month;
  let index = monthIndex;

  for (let i = 0; i < cols; i++) {
    if (index >= monthsInYear) index = 0;
    const width = getDaysInMonths(startDate, i) * singleDayWidthInYear;
    const month = dayjs(`${startDate.year}-${startDate.month + 1}-${startDate.dayOfMonth}`).add(
      i,
      "months"
    );
    const isCurrentMonth = month.isSame(dayjs(), "month");

    drawRow(
      {
        ctx,
        x: xPos,
        y: yPos,
        width,
        height: headerMonthHeightYearView,
        textYPos: middleRowTextYPosYearView,
        fillStyle: getBoxFillStyle({ isCurrent: isCurrentMonth, variant: "yearView" }, theme),
        label: dayjs().month(index).format("MMMM").toUpperCase(),
        font: fonts.bottomRow.number,
        isBottomRow: true
      },
      theme
    );

    xPos += width;
    index++;
  }
};
