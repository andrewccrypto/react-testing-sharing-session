import { ReactElement } from "react";
import { Spinner, SpinnerSize } from "@fluentui/react/lib/Spinner";

interface PageLayoutTitleProps {
  isLoading?: boolean;
  title: string;
}

function PageLayoutTitle({
  isLoading,
  title,
}: PageLayoutTitleProps): ReactElement {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <h1>{title}</h1>
      {isLoading && (
        <Spinner style={{ marginLeft: "2px" }} size={SpinnerSize.large} />
      )}
    </div>
  );
}

export default PageLayoutTitle;
