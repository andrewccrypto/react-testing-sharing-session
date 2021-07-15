import { ReactElement } from "react";
import {
  DocumentCard,
  DocumentCardPreview,
  DocumentCardTitle,
} from "@fluentui/react/lib/DocumentCard";
import { ImageFit } from "@fluentui/react/lib/Image";
import PokemonElementTypeTag from "@components/PokemonElementTypeTag";
import { PokemonData } from "@types";

interface PokemonDataCardProps {
  data: PokemonData;
}

function PokemonDataCard({ data }: PokemonDataCardProps): ReactElement {
  return (
    <DocumentCard>
      <DocumentCardPreview
        previewImages={[
          {
            name: data.name,
            previewImageSrc: data.imgSrc,
            imageFit: ImageFit.cover,
          },
        ]}
      />
      <DocumentCardTitle title={data.name} shouldTruncate />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingBottom: "8px",
          paddingLeft: "16px",
          paddingRight: "16px",
          paddingTop: "8px",
        }}
      >
        {data.elementTypes.map((element) => (
          <div
            key={element}
            style={{ marginRight: "5px", marginBottom: "5px" }}
          >
            <PokemonElementTypeTag element={element} />
          </div>
        ))}
      </div>
    </DocumentCard>
  );
}

export default PokemonDataCard;
