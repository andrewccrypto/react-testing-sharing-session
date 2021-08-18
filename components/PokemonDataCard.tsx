import { ReactElement } from 'react';
import {
  DocumentCard,
  DocumentCardPreview,
  DocumentCardTitle,
  ImageFit,
} from '@fluentui/react';
import PokemonElementTypeTag from '@components/PokemonElementTypeTag';
import { PokemonData } from '@types';

interface PokemonDataCardProps {
  data: PokemonData;
}

function PokemonDataCard({ data }: PokemonDataCardProps): ReactElement {
  function getId() {
    const idString = `${data.id}`;

    if (idString.length === 1) {
      return `#00${idString}`;
    }

    if (idString.length === 2) {
      return `#0${idString}`;
    }

    return `#${idString}`;
  }

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
      <DocumentCardTitle title={`${data.name} ${getId()}`} shouldTruncate />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingBottom: '8px',
          paddingLeft: '16px',
          paddingRight: '16px',
          paddingTop: '8px',
        }}
      >
        {data.elementTypes.map((element) => (
          <div
            key={element}
            style={{ marginRight: '5px', marginBottom: '5px' }}
          >
            <PokemonElementTypeTag element={element} />
          </div>
        ))}
      </div>
    </DocumentCard>
  );
}

export default PokemonDataCard;
