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
      feelingEmpty: "Нет данных",
      free: "Свободно",
      loadNext: "Next",
      loadPrevious: "Previous",
      over: "over",
      taken: "Занято",
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

  // const mocked = [];
  // const mocked = getSimpleMockData();

  // const mocked = [
  //   {
  //     id: "2",
  //     label: {
  //       title: "Петров Петя Петрович",
  //       subtitle: "Должность"
  //     },
  //     data: [
  //       {
  //         id: "employment_12",
  //         startDate: "2025-01-28",
  //         endDate: "2025-02-05",
  //         occupancy: 3600,
  //         title: "Отсутствие",
  //         description: "отпуск",
  //         bgColor: "#FF8181"
  //       },
  //       {
  //         id: "employment_11",
  //         startDate: "2025-01-15",
  //         endDate: "2025-01-23",
  //         occupancy: 3600,
  //         title: "Пресейл активность",
  //         description: "desc описание описание описание описание описание описание описание",
  //         bgColor: "#FFD9B3"
  //       },
  //       {
  //         id: "employment_9",
  //         startDate: "2025-01-28",
  //         endDate: "2025-01-31",
  //         occupancy: 3600,
  //         title: "Проектная деятельность",
  //         description: null,
  //         bgColor: "#CCE5CC"
  //       },
  //       {
  //         id: "employment_4",
  //         startDate: "2025-02-11",
  //         endDate: "2025-02-14",
  //         occupancy: 3600,
  //         title: "Отсутствие",
  //         description: "",
  //         bgColor: "#FF8181"
  //       }
  //     ]
  //   },
  //   {
  //     id: "7",
  //     label: {
  //       title: "Иванов Иван Иванович",
  //       subtitle: "Должность"
  //     },
  //     data: [
  //       {
  //         id: "employment_10",
  //         startDate: "2024-12-31",
  //         endDate: "2025-02-07",
  //         occupancy: 3600,
  //         title: "Проектная деятельность",
  //         description: "2",
  //         bgColor: "#CCE5CC"
  //       },
  //       {
  //         id: "employment_8",
  //         startDate: "2025-02-01",
  //         endDate: "2025-02-04",
  //         occupancy: 3600,
  //         title: "Проектная деятельность",
  //         description: null,
  //         bgColor: "#CCE5CC"
  //       },
  //       {
  //         id: "employment_6",
  //         startDate: "2025-01-01",
  //         endDate: "2025-01-04",
  //         occupancy: 3600,
  //         title: "Проектная деятельность",
  //         description: "тест2",
  //         bgColor: "#CCE5CC"
  //       },
  //       {
  //         id: "employment_5",
  //         startDate: "2025-01-20",
  //         endDate: "2025-01-26",
  //         occupancy: 3600,
  //         title: "Проектная деятельность",
  //         description: "тест",
  //         bgColor: "#CCE5CC"
  //       }
  //     ]
  //   },
  //   {
  //     id: "6",
  //     label: {
  //       title: "Васильев Вася Васильевич",
  //       subtitle: "Должность"
  //     },
  //     data: [
  //       {
  //         id: "employment_3",
  //         startDate: "2025-02-25",
  //         endDate: "2025-02-28",
  //         occupancy: 3600,
  //         title: "Проектная деятельность",
  //         description: null,
  //         bgColor: "#CCE5CC"
  //       }
  //     ]
  //   }
  // ];

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
          onTileClick={(data) => console.log("clicked: ", data)}
          onFilterData={handleFilterData}
          config={{
            zoom: -1,
            maxRecordsPerPage: maxRecordsPerPage,
            maxZoom: 2,
            filterButtonState: -1,
            lang: "ru",
            translations: langs,
            wrapItemTitle: false,
            showTooltip: true,
            autoPageLoad: false
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
