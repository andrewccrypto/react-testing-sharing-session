import { ReactElement, ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  headerContent?: ReactNode;
}

function PageLayout({
  children,
  headerContent,
}: PageLayoutProps): ReactElement {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      {headerContent && (
        <header style={{ paddingLeft: '15vw', paddingRight: '15vw' }}>
          {headerContent}
        </header>
      )}
      <div
        style={{
          height: '100%',
          overflow: 'auto',
          paddingLeft: '15vw',
          paddingRight: '15vw',
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default PageLayout;
