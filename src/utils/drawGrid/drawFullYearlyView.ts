import dayjs from "dayjs";
import { boxHeight, singleDayWidthInYear } from "@/constants";
import { Day } from "@/types/global";
import { Theme } from "@/styles";
import { getDaysInMonths } from "../dates";
import { drawCell } from "./drawCell";

export const drawFullYearlyView = (
  ctx: CanvasRenderingContext2D,
  rows: number,
  cols: number,
  startDate: Day,
  theme: Theme
) => {
  let xPos = -(startDate.dayOfMonth - 1) * singleDayWidthInYear;

  for (let i = 0; i <= cols; i++) {
    const month = dayjs(`${startDate.year}-${startDate.month + 1}-${startDate.dayOfMonth}`).add(
      i,
      "months"
    );

    const isCurrMonth = month.isSame(dayjs(), "month");
    const monthWidth = getDaysInMonths(startDate, i) * singleDayWidthInYear;

    for (let y = 0; y < rows; y++) {
      drawCell(ctx, xPos, y * boxHeight, monthWidth, true, isCurrMonth, theme);
    }

    xPos += monthWidth;
  }
};
