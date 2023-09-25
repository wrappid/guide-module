import React from "react";

import { CoreTextButton, CoreBox, CoreGrid, CoreTypographyBody1, CoreClasses } from "@wrappid/core";

import DocsRegistry from "./docs/DocsRegistry";

export default function Components() {

  const [_DocsRegistry] = React.useState(DocsRegistry);

  const [currentPage, setCurrentPage] = React.useState(null);
  const [docsPageRegistry, setDocsPageRegistry] = React.useState({});

  const getSortedRegistry = (docsRegistry) => {
    return Object.keys(docsRegistry).sort((curr, next) => docsRegistry[curr].order - docsRegistry[next].order);
  };

  const getDocsPage = (docsRegistry) => {
    let docsPage = {};

    Object.keys(docsRegistry).forEach(docKey => {
      docsPage[docKey] = docsRegistry[docKey]?.main;
    });
    return docsPage;
  };

  const getAllDocKeys = (docsRegistry, docPagesReg) => {
    if (Object.keys(docsRegistry)?.length > 0) {
      let tempDocsRegistry = docsRegistry?.main ? (docsRegistry?.childrens || {}) : docsRegistry;

      docPagesReg = { ...docPagesReg, ...getDocsPage(tempDocsRegistry) };
      Object.keys(tempDocsRegistry).forEach(docKey => {
        docPagesReg = { ...docPagesReg, ...getAllDocKeys(tempDocsRegistry[docKey], docPagesReg) };
      });
    }

    return docPagesReg;
  };

  React.useEffect(() => {
    let docPagesReg = {};

    docPagesReg = getAllDocKeys(_DocsRegistry, docPagesReg);

    setDocsPageRegistry(docPagesReg);
  }, []);

  React.useEffect(() => {
    setCurrentPage(getSortedRegistry(_DocsRegistry)[0]);
  }, [docsPageRegistry]);

  const renderTOC = (docsRegistry) => {
    return (
      <>
        {getSortedRegistry(docsRegistry).map(docKey => {
          return (
            <CoreBox key={`${docKey}`} styleClasses={[CoreClasses.PADDING.PL1]}>
              <CoreTextButton
                label={docKey}
                OnClick={() => {
                  setCurrentPage(docKey);
                }}
              />
              
              {docsRegistry[docKey]?.childrens
                && Object.keys(docsRegistry[docKey]?.childrens)?.length > 0
                && renderTOC(docsRegistry[docKey]?.childrens)}
            </CoreBox>
          );
        })}
      </>
    );
  };

  return (
    <CoreGrid>
      <CoreBox gridProps={{ gridSize: 9 }}>
        {currentPage && React.createElement(docsPageRegistry[currentPage])}
      </CoreBox>

      <CoreBox gridProps={{ gridSize: 3 }}>
        <CoreTypographyBody1>Table Of Contents</CoreTypographyBody1>

        {renderTOC(_DocsRegistry)}
      </CoreBox>
    </CoreGrid>
  );
}
