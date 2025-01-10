import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

import DropDownMenu from "@/components/ui/dropdown-menu/dropdown-menu";
import Datepicker from "@/components/ui/datepicker/datepicker";
import EstimateIcon from "@/assets/svgs/estimate.svg?react";
import UserIcon from "@/assets/svgs/user.svg?react";

import { ControlledSelect } from "../controlled-select/controlled-select";
import { useGetUserOptions } from "../../hooks/use-get-user-options";
import { TaskFormValues } from "../../schema/task-squema";
import { tagOptions } from "../../constant/tag-options";
import { estimateOptions } from "../../constant/estimate-options";

import styles from "./form-view.module.css";
import Button from "@/components/ui/button/button";

import { DialogClose } from "@radix-ui/react-dialog";

interface FormViewProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  register: UseFormRegister<TaskFormValues>;
  control: Control<TaskFormValues>;
  errors: FieldErrors<TaskFormValues> | undefined;
}

export default function FormView({
  onSubmit,
  register,
  control,
  errors,
}: FormViewProps) {
  const { userOptions } = useGetUserOptions();
  return (
    <form className={styles.formView} onSubmit={onSubmit}>
      <div className={styles.inputContainer}>
        <input
          placeholder="Task Title"
          className={`${styles.input} ${errors?.name && styles.isError}`}
          {...register("name")}
        />
        {errors?.name && (
          <span className={styles.errorMessage}>{errors.name.message}</span>
        )}
      </div>

      <div className={styles.comboBoxes}>
        <ControlledSelect
          control={control}
          name="pointEstimate"
          options={estimateOptions}
          placeholder={
            <div className={styles.selectValue}>
              <EstimateIcon />
              Estimate
            </div>
          }
          variant="points"
          label="Estimate"
          errors={errors}
        />

        <ControlledSelect
          control={control}
          name="assignee"
          options={userOptions}
          placeholder={
            <div className={styles.selectValue}>
              <UserIcon />
              Assignee
            </div>
          }
          variant="assignee"
          label="Assign To..."
          errors={errors}
        />

        <Controller
          control={control}
          name="tags"
          render={({ field: { onChange, value } }) => (
            <DropDownMenu
              label="Tag Title"
              placeholder="Label"
              options={tagOptions}
              onChange={onChange}
              value={value}
              errors={errors}
            />
          )}
        />

        <Controller
          control={control}
          name="dueDate"
          render={({ field: { onChange, value } }) => (
            <Datepicker onChange={onChange} value={value} errors={errors} />
          )}
        />
      </div>

      <div className={styles.buttons}>
        <DialogClose className={styles.dialogClose}>
          <Button label="Cancel" variant="outline" />
        </DialogClose>
        <Button label="Create" type="submit" />
      </div>
    </form>
  );
}
