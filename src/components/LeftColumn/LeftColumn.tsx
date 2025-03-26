import { FC, useState } from "react";
import { useLanguage } from "@/context/LocaleProvider";
import { useCalendar } from "@/context/CalendarProvider";
import Icon from "../Icon";
import PaginationButton from "../PaginationButton/PaginationButton";
import { StyledInput, StyledInputWrapper, StyledLeftColumnHeader, StyledWrapper } from "./styles";
import { LeftColumnProps } from "./types";
import LeftColumnItem from "./LeftColumnItem/LeftColumnItem";

const LeftColumn: FC<LeftColumnProps> = ({
  data,
  rows,
  onLoadNext,
  onLoadPrevious,
  pageNum,
  pagesAmount,
  searchInputValue,
  setSearchInputValue,
  onSearchInputChange,
  onItemClick,
  outsideWrapperRef
}) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const { search } = useLanguage();
  const { config } = useCalendar();
  const { wrapItemTitle = true } = config;

  const toggleFocus = () => setIsInputFocused((prev) => !prev);

  return (
    <StyledWrapper style={{ minHeight: outsideWrapperRef.current?.clientHeight }}>
      <StyledLeftColumnHeader>
        <StyledInputWrapper isFocused={isInputFocused}>
          <StyledInput
            placeholder={search}
            value={searchInputValue}
            onChange={onSearchInputChange}
            onFocus={toggleFocus}
            onBlur={toggleFocus}
          />
          <Icon iconName="search" />
          {searchInputValue && (
            <div
              onClick={() => setSearchInputValue("")}
              style={{ cursor: "pointer", width: "24px", height: "24px", marginRight: "12px" }}>
              <Icon iconName="close" fill="rgb(119, 119, 119)" />
            </div>
          )}
        </StyledInputWrapper>
        <PaginationButton
          intent="previous"
          isVisible={pageNum !== 0}
          onClick={onLoadPrevious}
          icon={<Icon iconName="arrowUp" width="16" height="16" />}
          pageNum={pageNum}
          pagesAmount={pagesAmount}
        />
      </StyledLeftColumnHeader>
      {data.map((item, index) => (
        <LeftColumnItem
          id={item.id}
          item={item.label}
          key={item.id}
          rows={rows[index]}
          onItemClick={onItemClick}
          wrapItemTitle={wrapItemTitle}
        />
      ))}
      <PaginationButton
        intent="next"
        isVisible={pageNum !== pagesAmount - 1}
        onClick={onLoadNext}
        icon={<Icon iconName="arrowDown" width="16" height="16" />}
        pageNum={pageNum}
        pagesAmount={pagesAmount}
      />
    </StyledWrapper>
  );
};

export default LeftColumn;
