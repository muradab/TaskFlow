import { Separator } from "@/components/ui/separator";
import { Info } from "./_components/info";
import { BoardList } from "./_components/board-list";
import { Suspense } from "react";

const OrganizationIdPage = async () => {
  console.log("I am logged in the browser");
  return (
    <div w-full mb-20>
      <Info />
      <Separator className="my-4" />
      <div className="px-2 md:px-4">
        <Suspense>
          <BoardList />
        </Suspense>
      </div>
    </div>
  );
};

export default OrganizationIdPage;
