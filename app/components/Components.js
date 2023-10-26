import React from "react";

import { CoreBox, CoreGrid, CoreH4 } from "@wrappid/core";

import DocsRegistry from "./docs/DocsRegistry";
import DocsTOC from "./DocsTOC";

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
      let tempDocsRegistry = docsRegistry?.main ? (docsRegistry?.children || {}) : docsRegistry;

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

  return (
    <CoreGrid>
      <CoreBox gridProps={{ gridSize: 9 }}>
        {currentPage && docsPageRegistry[currentPage]
          ? React.createElement(docsPageRegistry[currentPage])
          : <CoreH4>No documentation component available for {currentPage}.</CoreH4>}
      </CoreBox>

      <CoreBox gridProps={{ gridSize: 3 }}>
        <DocsTOC
          docsRegistry={_DocsRegistry}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </CoreBox>
    </CoreGrid>
  );
}
