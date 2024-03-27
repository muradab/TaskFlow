"use client";
import { deleteBoard } from "@/actions/delete-board";
import { FormDelete } from "./form-delete";
import { useAction } from "@/hooks/use-action";

interface BoardProps {
  title: string;
  id: string;
}

export const Board = ({ title, id }: BoardProps) => {
  const { execute, fieldErrors } = useAction(deleteBoard, {
    onSuccess: (data) => {
      console.log(data, "SUCCESS");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const onSubmit = (formdata: FormData) => {
    console.log(id);
    execute({ id });
  };
  // const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <form action={onSubmit} className="flex items-center gap-x-2">
      <p>Board title = {title}</p>
      <FormDelete />
    </form>
  );
};
