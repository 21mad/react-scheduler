import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import { SchedulerData, SchedulerProjectData } from "@/types/global";
import { ParsedDatesRange } from "@/utils/getDatesRange";

const secondsInWorkDay = 28800;

export const mockedOnRangeChange = (range: ParsedDatesRange, data: SchedulerData) => {
  console.log("Mocked on range change has been triggered. New range: ", range, data);
};

const getRandomWords = (amount?: number) =>
  amount ? faker.random.words(amount) : faker.random.word();

const getRandomDates = (year: number) => {
  const startDate = faker.date.between(new Date(year, 0, 1), new Date(year + 1, 0, 1));
  const endDate = faker.date.between(
    startDate,
    new Date(year + Math.ceil(Math.random() * 4), 0, 1)
  );

  return { startDate, endDate };
};

export const generateProjects = (
  years: number,
  maxProjectsPerYear: number,
  amountOfDscWords = 5,
  title: string
): SchedulerProjectData[] => {
  const startYear = dayjs()
    .subtract(Math.floor(years / 2), "years")
    .get("year");

  const endYear = dayjs()
    .add(Math.floor(years / 2), "years")
    .get("year");

  const data = [];
  const bgColor = `rgb(${Math.ceil(Math.random() * 255)},${Math.ceil(
    Math.random() * 200
  )},${Math.ceil(Math.random() * 200)})`;

  for (let yearIndex = startYear; yearIndex <= endYear; yearIndex++) {
    const projectsPerYear = Math.ceil(Math.random() * maxProjectsPerYear);

    for (let projectIndex = 0; projectIndex < projectsPerYear; projectIndex++) {
      const { startDate, endDate } = getRandomDates(yearIndex);
      data.push({
        id: faker.datatype.uuid(),
        startDate,
        endDate,
        occupancy: Math.ceil(Math.random() * secondsInWorkDay),
        title,
        subtitle: getRandomWords(),
        description: getRandomWords(amountOfDscWords),
        bgColor
      });
    }
  }
  return data;
};

export const createMockData = (
  amountOfPeople: number,
  years: number,
  maxProjectsPerYear: number,
  amountOfDscWords = 5
): SchedulerData => {
  const schedulerData: SchedulerData = [];
  for (let i = 0; i < amountOfPeople; i++) {
    const title = getRandomWords(2);
    const data: SchedulerProjectData[] = generateProjects(
      years,
      maxProjectsPerYear,
      amountOfDscWords,
      title
    );

    const item = {
      id: faker.datatype.uuid(),
      label: {
        icon: "https://picsum.photos/24",
        title,
        subtitle: getRandomWords()
      },
      data
    };
    schedulerData.push(item);
  }
  return schedulerData;
};
// export const getSimpleMockData = () => [];
// export const getSimpleMockData = () => {
//   const today = Date.now();
//   const day = 1000 * 60 * 60 * 24;

//   return [
//     {
//       id: "070ac5b5-8369-4cd2-8ba2-0a209130cc60",
//       label: {
//         icon: "https://dummyimage.com/300",
//         title: "Иванов Иван Иванович",
//         subtitle: "Frontend Developer"
//       },
//       data: [
//         {
//           id: "06e5c0a6-3d8f-4b5e-a6d5-4emb7d7d7d7d",
//           // startDate: new Date("2023-04-13T15:31:24.272Z"),
//           // endDate: new Date("2023-08-28T10:28:22.649Z"),
//           startDate: today,
//           endDate: today + day,
//           occupancy: 3600,
//           title: "Задача 1.1",
//           subtitle: "Подзаголовок",
//           description: "Описание",
//           bgColor: "rgb(254,165,177)"
//         },
//         {
//           id: "06e5c0a6-3d8f-4b5e-a6d5-4emb7d7d7d79",
//           // startDate: new Date("2023-04-13T15:31:24.272Z"),
//           // endDate: new Date("2023-08-28T10:28:22.649Z"),
//           startDate: "2025-01-01",
//           endDate: "2025-02-28",
//           occupancy: 3600,
//           title: "Задача 1.3",
//           subtitle: "Подзаголовок",
//           description: "Описание",
//           bgColor: "rgb(254,165,177)"
//         },
//         {
//           id: "22fbe237-6344-4c8e-affb-64a1750f33bd",
//           startDate: today + 8 * day,
//           endDate: today + 11 * day,
//           occupancy: 2852,
//           title: "Задача 1.2",
//           subtitle: "Подзаголовок",
//           description: "Описание задачи",
//           bgColor: "rgb(254,165,177)"
//         }
//       ]
//     },
//     {
//       id: "070ac5b5-8369-4cd2-8ba2-0a209130cc61",
//       label: {
//         icon: "https://dummyimage.com/300",
//         title: "Петров Петр Петрович",
//         subtitle: "Backend Developer"
//       },
//       data: [
//         {
//           id: "06e5c0a6-3d8f-4b5e-a6d5-4e9c71ed7d7d",
//           startDate: today - day,
//           endDate: today + 3 * day,
//           occupancy: 3600,
//           title: "Задача 2",
//           subtitle: "Подзаголовок",
//           description: "Описание задачи",
//           bgColor: "rgb(204,165,177)"
//         }
//       ]
//     },
//     {
//       id: "070ac5b5-8369-4cd2-8ba2-0a209130cc62",
//       label: {
//         icon: "https://dummyimage.com/300",
//         title: "Сидоров Сергей Семенович",
//         subtitle: "Backend Developer"
//       },
//       data: [
//         {
//           id: "06e5c0a6-3d8f-4b5e-a6d5-4e9ced7dwd7d",
//           startDate: today + 2 * day,
//           endDate: today + 10 * day,
//           occupancy: 3600,
//           title: "Задача 3",
//           subtitle: "Подзаголовок",
//           description: "Описание задачи",
//           bgColor: "rgb(104,165,177)"
//         }
//       ]
//     },
//     {
//       id: "070ac5b5-8369-4cd2-8ba2-0a209130cc63",
//       label: {
//         icon: "https://dummyimage.com/300",
//         title: "Васин Василий Викторович",
//         subtitle: "Backend Developer"
//       },
//       data: [
//         {
//           id: "06e5c0a6-3d8f-4b5e-a1d5-4e9c7d7d7d7d",
//           startDate: today + day,
//           endDate: today + 2 * day,
//           occupancy: 3600,
//           title: "Задача 4.1",
//           subtitle: "Подзаголовок",
//           description: "Описание задачи",
//           bgColor: "rgb(104,105,177)"
//         },
//         {
//           id: "06e5c0a6-3d8f-425e-a6d5-4e9c7d7d7d71",
//           startDate: today + 3 * day,
//           endDate: today + 4 * day,
//           occupancy: 3600,
//           title: "Задача 4.2",
//           subtitle: "Подзаголовок",
//           description: "Описание задачи",
//           bgColor: "rgb(104,105,177)"
//         },
//         {
//           id: "06e5c0a6-3d8f-1b5e-a6d5-4e9c7d7d7d72",
//           startDate: today + 10 * day,
//           endDate: today + 13 * day,
//           occupancy: 3600,
//           title: "Задача 4.3",
//           subtitle: "Подзаголовок",
//           description: "Описание задачи",
//           bgColor: "rgb(104,105,177)"
//         }
//       ]
//     },
//     {
//       id: "070ac5b5-8369-4cd2-8ba2-0a209130cc64",
//       label: {
//         icon: "https://dummyimage.com/300",
//         title: "Макаров Михаил Маратович",
//         subtitle: "Frontend Developer"
//       },
//       data: [
//         {
//           id: "06e5c0a6-3d8f-4b5e-a6d5-4e9c7d7d7d7d",
//           startDate: today + 2 * day,
//           endDate: today + 10 * day,
//           occupancy: 3600,
//           title: "Задача 5.1",
//           subtitle: "Подзаголовок",
//           description: "Описание задачи",
//           bgColor: "rgb(104,105,177)"
//         },
//         {
//           id: "06e5c0a6-3d8f-4b5e-a6d5-4e9c7d7l7d71",
//           startDate: today + 363 * day,
//           endDate: today + 366 * day,
//           occupancy: 3600,
//           title: "Задача 5.2",
//           subtitle: "Подзаголовок",
//           description: "Описание задачи",
//           bgColor: "rgb(104,105,177)"
//         }
//       ]
//     }
//   ];
// };
