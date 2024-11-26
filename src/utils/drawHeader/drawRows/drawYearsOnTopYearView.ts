import { fonts, headerYearHeight, singleDayWidthInYear, topRowTextYPosYearView } from "@/constants";
import { Theme } from "@/styles";
import { Day } from "@/types/global";
import { daysInYear } from "@/utils/dates";
import { drawRow } from "@/utils/drawRow";
export const drawYearsOnTopYearView = (
  ctx: CanvasRenderingContext2D,
  startDate: Day,
  dayOfYear: number,
  theme: Theme
) => {
  const yPos = 0;
  const year = startDate.year;
  const canvasWidth = ctx.canvas.width * 2;
  let xPos = 0;
  let index = 0;
  let width = (daysInYear(year) - dayOfYear + 1) * singleDayWidthInYear;
  let totalWidthOfElements = 0;

  while (xPos + totalWidthOfElements <= canvasWidth) {
    if (index > 0) {
      width = daysInYear(year + index) * singleDayWidthInYear;
    }

    if (totalWidthOfElements + width > canvasWidth && index > 0) {
      width =
        Math.ceil((canvasWidth - totalWidthOfElements) / singleDayWidthInYear) *
        singleDayWidthInYear;
    }

    drawRow(
      {
        ctx,
        x: xPos,
        y: yPos,
        width,
        height: headerYearHeight,
        textYPos: topRowTextYPosYearView,
        label: (year + index).toString(),
        font: fonts.topRow
      },
      theme
    );

    xPos += width;
    totalWidthOfElements += width;
    index++;
  }
};
