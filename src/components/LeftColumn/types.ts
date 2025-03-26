import { PaginatedSchedulerData, SchedulerItemClickData } from "@/types/global";

export type LeftColumnProps = {
  data: PaginatedSchedulerData;
  rows: number[];
  pageNum: number;
  pagesAmount: number;
  onLoadNext: () => void;
  onLoadPrevious: () => void;
  searchInputValue: string;
  setSearchInputValue: React.Dispatch<React.SetStateAction<string>>;
  onSearchInputChange: React.ChangeEventHandler<HTMLInputElement>;
  onItemClick?: (data: SchedulerItemClickData) => void;
  outsideWrapperRef: React.RefObject<HTMLDivElement>;
};

export type StyledInputWrapperProps = {
  isFocused: boolean;
};
