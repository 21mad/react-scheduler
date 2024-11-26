/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useMemo, useState } from "react";
import dayjs from "dayjs";
import ruDayjsTranslations from "dayjs/locale/ru";
import { createMockData } from "./mock/appMock";
import { ParsedDatesRange } from "./utils/getDatesRange";
import { ConfigFormValues, SchedulerProjectData } from "./types/global";
import ConfigPanel from "./components/ConfigPanel";
import { StyledSchedulerFrame } from "./styles";
import { Scheduler } from ".";

const langs = [
  {
    id: "ru",
    lang: {
      feelingEmpty: "I feel so empty...",
      free: "Free",
      loadNext: "Next",
      loadPrevious: "Previous",
      over: "over",
      taken: "Taken",
      topbar: {
        filters: "Фильтры",
        next: "вперед",
        prev: "назад",
        today: "Сегодня",
        view: "Вид"
      },
      search: "Поиск",
      week: "Неделя"
    },
    translateCode: "ru-RU",
    dayjsTranslations: { ...ruDayjsTranslations, weekdaysShort: ruDayjsTranslations.weekdaysMin }
  }
];

function App() {
  const [values, setValues] = useState<ConfigFormValues>({
    peopleCount: 15,
    projectsPerYear: 5,
    yearsCovered: 0,
    startDate: undefined,
    maxRecordsPerPage: 50,
    isFullscreen: true
  });

  const { peopleCount, projectsPerYear, yearsCovered, isFullscreen, maxRecordsPerPage } = values;

  const mocked = useMemo(
    () => createMockData(+peopleCount, +yearsCovered, +projectsPerYear),
    [peopleCount, projectsPerYear, yearsCovered]
  );

  // const mocked = getSimpleMockData();

  const [range, setRange] = useState<ParsedDatesRange>({
    startDate: new Date(),
    endDate: new Date()
  });

  const handleRangeChange = useCallback((range: ParsedDatesRange) => {
    setRange(range);
  }, []);

  const filteredData = useMemo(
    () =>
      mocked.map((person) => ({
        ...person,
        data: person.data.filter(
          (project) =>
            dayjs(project.startDate).isBetween(range.startDate, range.endDate) ||
            dayjs(project.endDate).isBetween(range.startDate, range.endDate) ||
            (dayjs(project.startDate).isBefore(range.startDate, "day") &&
              dayjs(project.endDate).isAfter(range.endDate, "day"))
        )
      })),
    [mocked, range.endDate, range.startDate]
  );

  const handleFilterData = () => console.log(`Filters button was clicked.`);

  const handleTileClick = (data: SchedulerProjectData) =>
    console.log(
      `Item ${data.title} - ${data.subtitle} was clicked. \n==============\nStart date: ${data.startDate} \n==============\nEnd date: ${data.endDate}\n==============\nOccupancy: ${data.occupancy}`
    );

  return (
    <>
      <ConfigPanel values={values} onSubmit={setValues} />
      {isFullscreen ? (
        <Scheduler
          startDate={values.startDate ? new Date(values.startDate).toISOString() : undefined}
          onRangeChange={handleRangeChange}
          data={filteredData}
          isLoading={false}
          onTileClick={handleTileClick}
          onFilterData={handleFilterData}
          config={{
            zoom: -1,
            maxRecordsPerPage: maxRecordsPerPage,
            maxZoom: 1,
            filterButtonState: -1,
            lang: "ru",
            translations: langs
          }}
          onItemClick={(data) => console.log("clicked: ", data)}
        />
      ) : (
        <StyledSchedulerFrame>
          <Scheduler
            startDate={values.startDate ? new Date(values.startDate).toISOString() : undefined}
            onRangeChange={handleRangeChange}
            isLoading={false}
            data={filteredData}
            onTileClick={handleTileClick}
            onFilterData={handleFilterData}
            onItemClick={(data) => console.log("clicked: ", data)}
          />
        </StyledSchedulerFrame>
      )}
    </>
  );
}

export default App;
