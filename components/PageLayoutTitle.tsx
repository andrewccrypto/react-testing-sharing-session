import { ReactElement } from "react";
import { Spinner, SpinnerSize } from "@fluentui/react/lib/Spinner";
import { Text } from "@fluentui/react/lib/Text";

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
        <Spinner style={{ marginLeft: "2px" }} size={SpinnerSize.large} />
      )}
    </div>
  );
}

export default PageLayoutTitle;
