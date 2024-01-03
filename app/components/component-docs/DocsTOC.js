import {
  CoreAccordion, CoreAccordionDetail, CoreAccordionSummary, CoreBox, CoreClasses, CoreTextButton, CoreTypographyBody1 
} from "@wrappid/core";

export default function DocsTOC(props) {
  const { docsRegistry, /* currentPage, */ setCurrentPage } = props;
  const getSortedRegistry = (docsRegistry) => {
    return Object.keys(docsRegistry).sort((curr, next) => docsRegistry[curr].order - docsRegistry[next].order);
  };
    
  const renderTOC = (docsRegistry) => {
    return (
      <>
        {getSortedRegistry(docsRegistry).map(docKey => {
          return (
            <CoreAccordion
              key={`${docKey}`}
              styleClasses={[CoreClasses.BG.BG_SECONDARY]}
              //   expanded={currentPage === docKey/*|| Object.keys(docsRegistry[docKey]?.children)?.includes(currentPage)*/}
              //   onChange={setCurrentPage(docKey)}
            >
              <CoreAccordionSummary  styleClasses={[CoreClasses.BG.BG_SUCCESS]}>
                <CoreTextButton
                  label={docKey}
                  OnClick={() => {
                    setCurrentPage(docKey);
                  }}
                />
              </CoreAccordionSummary>

              {docsRegistry[docKey]?.children && Object.keys(docsRegistry[docKey]?.children)?.length > 0 && (
                <CoreAccordionDetail styleClasses={[CoreClasses.PADDING.PL1, CoreClasses.BG.BG_INFO]}>
                  {renderTOC(docsRegistry[docKey]?.children)}
                </CoreAccordionDetail>
              )}
            </CoreAccordion>
          );
        })}
      </>
    );
  };

  return (
    <>
      <CoreTypographyBody1>Table Of Contents</CoreTypographyBody1>
     
      <CoreBox CoreClasses={[CoreClasses.OVERFLOW.OVERFLOW_Y_SCROLL, CoreClasses.HEIGHT.H_100]}>
        {renderTOC(docsRegistry)}
      </CoreBox>
    </>
  );
}