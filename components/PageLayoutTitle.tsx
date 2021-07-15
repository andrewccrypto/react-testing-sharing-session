import { ReactElement } from "react";
import { Spinner, SpinnerSize, Text } from "@fluentui/react";

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
      <Text as="h1" variant="xxLarge">
        {title}
      </Text>
      {isLoading && (
        <Spinner style={{ marginLeft: "5px" }} size={SpinnerSize.large} />
      )}
    </div>
  );
}

export default PageLayoutTitle;
