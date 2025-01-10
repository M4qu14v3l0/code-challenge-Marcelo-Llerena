import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";

import React, { forwardRef } from "react";
import CalendarIcon from "@/assets/svgs/calendar.svg?react";

import SingleChevronRight from "@/assets/svgs/single-chevron-right.svg?react";
import SingleChevronLeft from "@/assets/svgs/single-chevron-left.svg?react";
import DoubleChevronRight from "@/assets/svgs/double-chevron-right.svg?react";
import DoubleChevronLeft from "@/assets/svgs/double-chevron-left.svg?react";

import { formateDateDatePicker } from "@/features/kanban/utils/formatDate";

import styles from "./datepicker.module.css";
import "./datepicker.css";
import { FieldErrors } from "react-hook-form";
import { TaskFormValues } from "@/features/kanban/components/toolbar/components/create-task/task-form/schema/task-squema";
interface DatepickerProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
  errors: FieldErrors<TaskFormValues> | undefined;
}

export default function Datepicker({
  onChange,
  value,
  errors,
}: DatepickerProps) {
  const DatePickerInput = forwardRef<
    HTMLInputElement,
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  >((props, ref) => (
    <div
      className={`${styles.datePicker} ${errors?.dueDate && styles.isError}`}
    >
      <CalendarIcon className={styles.calendarIcon} />
      <input
        ref={ref}
        {...props}
        readOnly
        placeholder="Due Date"
        className={styles.input}
      />
    </div>
  ));

  return (
    <div className={styles.datePickerContainer}>
      <DatePicker
        selected={value}
        onChange={onChange}
        enableTabLoop={false}
        dateFormat={"MMM. d yyyy"}
        customInput={<DatePickerInput />}
        todayButton="Today"
        className={styles.wrapper}
        renderCustomHeader={({
          monthDate,
          decreaseMonth,
          increaseMonth,
          increaseYear,
          decreaseYear,
        }) => (
          <div className={styles.customHeader}>
            <div className={styles.chevronsContainer}>
              <button
                type="button"
                onClick={decreaseYear}
                className={styles.navButton}
              >
                <DoubleChevronLeft />
              </button>
              <button
                type="button"
                onClick={decreaseMonth}
                className={styles.navButton}
              >
                <SingleChevronLeft />
              </button>
            </div>
            <span>{formateDateDatePicker(monthDate)}</span>
            <div className={styles.chevronsContainer}>
              <button
                type="button"
                onClick={increaseMonth}
                className={styles.navButton}
              >
                <SingleChevronRight />
              </button>
              <button
                type="button"
                onClick={increaseYear}
                className={styles.navButton}
              >
                <DoubleChevronRight />
              </button>
            </div>
          </div>
        )}
      />
      {errors?.dueDate && <span className={styles.errorMessage}>Required</span>}
    </div>
  );
}
