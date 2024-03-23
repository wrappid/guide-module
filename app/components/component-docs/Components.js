import React from "react";

import {
  CoreBox, CoreClasses, CoreGrid, CoreH4, CoreLayoutItem, CoreContainer, BlankLayout, CoreIconButton, toggleRightMenuState, CoreIcon, CoreRightDrawer
} from "@wrappid/core";
import { useDispatch, useSelector } from "react-redux";

import ComponentsMenu from "./ComponentsMenu";
import DocsRegistry from "./DocsRegistry";

export default function Components() {

  const [_DocsRegistry] = React.useState(DocsRegistry);

  const [currentPage, setCurrentPage] = React.useState(null);
  const [docsPageRegistry, setDocsPageRegistry] = React.useState({});

  const dispatch = useDispatch();
  const rightMenuOpen = useSelector((state) => state?.menu?.rightMenuOpen);

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

  const toggleRightDrawer = () => {
    dispatch(toggleRightMenuState());
  };

  return (
    <>
      <CoreLayoutItem id={BlankLayout.PLACEHOLDER.CONTENT}>
        <CoreGrid>
          <CoreBox gridProps={{ gridSize: 11 }}>
            <CoreContainer>
              <CoreBox>
                {currentPage && docsPageRegistry[currentPage]
                  ? React.createElement(docsPageRegistry[currentPage])
                  : <CoreH4>No documentation component available for {currentPage}.</CoreH4>}
              </CoreBox>
            </CoreContainer>
          </CoreBox>

          <CoreBox gridProps={{ gridSize: 1, styleClasses: [CoreClasses.BG.BG_GREY_100, CoreClasses.COLOR.TEXT_BLACK, CoreClasses.HEIGHT.H_100] }}>
            <CoreIconButton onClick={() => dispatch(toggleRightMenuState())}><CoreIcon icon="menu"></CoreIcon></CoreIconButton>

            {rightMenuOpen === true &&
              <CoreRightDrawer
                anchor="right"
                onOpen={toggleRightDrawer}
                onClose={toggleRightDrawer}
                open={rightMenuOpen}
              >
                <ComponentsMenu
                  docsRegistry={_DocsRegistry}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </CoreRightDrawer>
            }
          </CoreBox>
        </CoreGrid>
      </CoreLayoutItem>
    </>
  );
}
