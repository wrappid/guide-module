import React from "react";

import {
  CoreBox,
  CoreClasses,
  CoreGrid,
  CoreH4,
  CoreH5,
  CoreLayoutItem,
  CoreContainer,
  BlankLayout,
  CoreTOC,
  CoreAppBar
} from "@wrappid/core";

import ComponentsMenu from "./ComponentsMenu";
import DocsRegistry from "./DocsRegistry";

export default function Components() {
  const [_DocsRegistry] = React.useState(DocsRegistry);
  const contentRef = React.useRef(null);

  const [currentPage, setCurrentPage] = React.useState(null);
  const [docsPageRegistry, setDocsPageRegistry] = React.useState({});

  const getSortedRegistry = (docsRegistry) => {
    return Object.keys(docsRegistry).sort(
      (curr, next) => docsRegistry[curr].order - docsRegistry[next].order
    );
  };

  const getDocsPage = (docsRegistry) => {
    let docsPage = {};

    Object.keys(docsRegistry).forEach((docKey) => {
      docsPage[docKey] = docsRegistry[docKey]?.main;
    });
    return docsPage;
  };

  const getAllDocKeys = (docsRegistry, docPagesReg) => {
    if (Object.keys(docsRegistry)?.length > 0) {
      let tempDocsRegistry = docsRegistry?.main
        ? docsRegistry?.children || {}
        : docsRegistry;

      docPagesReg = { ...docPagesReg, ...getDocsPage(tempDocsRegistry) };
      Object.keys(tempDocsRegistry).forEach((docKey) => {
        docPagesReg = {
          ...docPagesReg,
          ...getAllDocKeys(tempDocsRegistry[docKey], docPagesReg),
        };
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
    <>
      <CoreLayoutItem id={BlankLayout.PLACEHOLDER.CONTENT}>
        <CoreBox>
          <CoreAppBar />
        </CoreBox>

        <CoreGrid>
          <CoreBox gridProps={{ gridSize: 2 }}>
            <ComponentsMenu
              docsRegistry={_DocsRegistry}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
           
          </CoreBox>

          <CoreBox gridProps={{ gridSize: 8 }}>
            <CoreContainer>
              <CoreBox ref={contentRef}>
                {currentPage && docsPageRegistry[currentPage] ? (
                  React.createElement(docsPageRegistry[currentPage])
                ) : (
                  <CoreH4>
                    No documentation component available for {currentPage}.
                  </CoreH4>
                )}
              </CoreBox>
            </CoreContainer>
          </CoreBox>

          <CoreBox
            gridProps={{
              gridSize    : 2,
              styleClasses: [CoreClasses.BG.BG_GREY_100, CoreClasses.COLOR.TEXT_BLACK, CoreClasses.HEIGHT.H_100],
            }}
          >
            <CoreTOC
              key={`${currentPage}`}
              contentRef={contentRef}
              headerComponents={[CoreH5]}
            />
          </CoreBox>
        </CoreGrid>
      </CoreLayoutItem>
    </>
  );
}

// eslint-disable-next-line no-multiple-empty-lines
{/* <CoreLayoutItem id={LeftRightDrawerLayout.PLACEHOLDER.Header}>
        <CoreAppBar />
      </CoreLayoutItem>

      <CoreLayoutItem id={LeftRightDrawerLayout.PLACEHOLDER.LeftDrawer}>
        <CoreBox gridProps={{ gridSize: 2 }}>
          <CoreTOC
            key={`${currentPage}`}
            contentRef={contentRef}
            headerComponents={[CoreH5]}
          />
        </CoreBox>
      </CoreLayoutItem>

      <CoreLayoutItem id={LeftRightDrawerLayout.PLACEHOLDER.Content}>
        <CoreBox gridProps={{ gridSize: 8 }}>
          <CoreContainer>
            <CoreBox ref={contentRef}>
              {currentPage && docsPageRegistry[currentPage] ? (
                React.createElement(docsPageRegistry[currentPage])
              ) : (
                <CoreH4>
                    No documentation component available for {currentPage}.
                </CoreH4>
              )}
            </CoreBox>
          </CoreContainer>
        </CoreBox>
      </CoreLayoutItem>

      <CoreLayoutItem id={LeftRightDrawerLayout.PLACEHOLDER.RightDrawer}>
        <CoreBox
          gridProps={{
            gridSize    : 2,
            styleClasses: [CoreClasses.BG.BG_GREY_100, CoreClasses.COLOR.TEXT_BLACK, CoreClasses.HEIGHT.H_100],
          }}
        >
          <ComponentsMenu
            docsRegistry={_DocsRegistry}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </CoreBox>
      </CoreLayoutItem> */}
