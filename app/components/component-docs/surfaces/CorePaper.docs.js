import {
  CoreBox,
  CorePaper,
  CoreClasses,
  CoreTypographyBody1,
  CoreGrid
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const DemoPaper = ( props ) => (
  <CorePaper
    {...props}
    styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.HEIGHT.VH_25, CoreClasses.TEXT.TEXT_CENTER, CoreClasses.PADDING.P2]}
  />
);

export default function CorePaperDocs() {
  return (
    <>
      <ComponentDocs 
        component={CorePaper}
        description="The Paper component is a container for displaying content on an elevated surface."
        samples={
          <>
            <CodeSample 
              title="Paper"
              description="In Material Design, surface components and shadow styles are heavily influenced by their real-world physical counterparts. Material UI implements this concept with the Paper component, a container-like surface that features the elevation prop for pulling box-shadow values from the theme."
              code={`<CorePaper styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]} elevation={0} />
<CorePaper styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]} />
<CorePaper styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]} elevation={3} />`}
              expandedCode={`import {
  CoreBox,
  CorePaper,
  CoreClasses
} from "@wrappid/core";

export default function CorePaperDocs() {
  return (
    <CoreBox styleClasses={[
      CoreClasses.WIDTH.W_50,
      CoreClasses.BG.BG_GREY_100,
      CoreClasses.DISPLAY.FLEX,
      CoreClasses.GAP.GAP_2,
      CoreClasses.PADDING.P2
    ]}>
      <CorePaper styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]} elevation={0} />

      <CorePaper styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]} />

      <CorePaper styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]} elevation={3} />
    </CoreBox>
  );
}`}
              renderElement={
                <CoreBox styleClasses={[
                  CoreClasses.WIDTH.W_50,
                  CoreClasses.BG.BG_GREY_100,
                  CoreClasses.DISPLAY.FLEX,
                  CoreClasses.GAP.GAP_2,
                  CoreClasses.PADDING.P2
                ]}>
                  <CorePaper styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]} elevation={0} />

                  <CorePaper styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]} />

                  <CorePaper styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]} elevation={3} />
                </CoreBox>

              }
            />

            <CodeSample 
              title="Elevation"
              description={<CoreBox>
                <CoreTypographyBody1>Use the elevation prop to establish hierarchy through the use of shadows. The Paper component&apos;s default elevation level is 1. The prop accepts values from 0 to 24. The higher the number, the further away the Paper appears to be from its background.</CoreTypographyBody1>

                <CoreTypographyBody1>Use the elevation prop to establish hierarchy through the use of shadows. The Paper component&apos;s default elevation level is 1. The prop accepts values from 0 to 24. The higher the number, the further away the Paper appears to be from its background.</CoreTypographyBody1>
              </CoreBox>}
              code={`<CoreGrid>
      <CoreBox
        gridProps={{ gridSize: 12 }}
        styleClasses={[
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.FLEX.FLEX_WRAP_WRAP,
          CoreClasses.GAP.GAP_2,
          CoreClasses.PADDING.PY3,
        ]}
      >
        {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
          <CorePaper
            key={elevation}
            elevation={elevation}
            styleClasses={[
              CoreClasses.WIDTH.W_25,
              CoreClasses.HEIGHT.VH_25,
              CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
              CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
              CoreClasses.DISPLAY.FLEX,
            ]}
          >
            <CoreTypographyBody1>
              {\`elevation=$\{elevation}\`}
            </CoreTypographyBody1>
          </CorePaper>
        ))}
      </CoreBox>
    </CoreGrid>`}
              expandedCode={`import {
  CoreBox,
  CorePaper,
  CoreClasses,
  CoreGrid,
  CoreTypographyBody1
} from "@wrappid/core";

export default function CorePaperDocs() {
  return (
    <CoreGrid>
      <CoreBox
        gridProps={{ gridSize: 12 }}
        styleClasses={[
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.FLEX.FLEX_WRAP_WRAP,
          CoreClasses.GAP.GAP_2,
          CoreClasses.PADDING.PY3,
        ]}
      >
        {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
          <CorePaper
            key={elevation}
            elevation={elevation}
            styleClasses={[
              CoreClasses.WIDTH.W_25,
              CoreClasses.HEIGHT.VH_25,
              CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
              CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
              CoreClasses.DISPLAY.FLEX,
            ]}
          >
            <CoreTypographyBody1>
              {\`elevation=$\{elevation}\`}
            </CoreTypographyBody1>
          </CorePaper>
        ))}
      </CoreBox>
    </CoreGrid>
  );
}`}
              renderElement={
                <CoreGrid>
                  <CoreBox
                    gridProps={{ gridSize: 12 }}
                    styleClasses={[
                      CoreClasses.DISPLAY.FLEX,
                      CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
                      CoreClasses.FLEX.FLEX_WRAP_WRAP,
                      CoreClasses.GAP.GAP_2,
                      CoreClasses.PADDING.PY3,
                    ]}
                  >
                    {[
                      0,
                      1,
                      2,
                      3,
                      4,
                      6,
                      8,
                      12,
                      16,
                      24
                    ].map((elevation) => (
                      <CorePaper
                        key={elevation}
                        elevation={elevation}
                        styleClasses={[
                          CoreClasses.WIDTH.W_25,
                          CoreClasses.HEIGHT.VH_25,
                          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
                          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
                          CoreClasses.DISPLAY.FLEX,
                        ]}
                      >
                        <CoreTypographyBody1>
                          {`elevation=${elevation}`}
                        </CoreTypographyBody1>
                      </CorePaper>
                    ))}
                  </CoreBox>
                </CoreGrid>
              }
            />

            <CodeSample 
              title={"Variants"}
              description={"Set the variant prop to \"outlined\" for a flat, outlined Paper with no shadows:"}
              code={`<DemoPaper variant="elevation">Default variant</DemoPaper>
<DemoPaper variant="outlined">Outlined variant</DemoPaper>`}
              expandedCode={`import { CoreBox, CoreClasses, CorePaper } from "@wrappid/core";

const DemoPaper = ({ variant, children }) => (
const DemoPaper = ( props ) => (
  <CorePaper
    {...props}
    styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.HEIGHT.VH_25, CoreClasses.TEXT.TEXT_CENTER, CoreClasses.PADDING.P2]}
  />
);

export default function Variants() {
  return (
    <CoreBox
      styleClasses={[
        CoreClasses.DISPLAY.FLEX,
        CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
        CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
        CoreClasses.GAP.GAP_2,
        CoreClasses.WIDTH.W_100
      ]}
    >
      <DemoPaper variant="elevation">Default variant</DemoPaper>

      <DemoPaper variant="outlined">Outlined variant</DemoPaper>
    </CoreBox>
  );
}`}
              renderElement={
                <CoreBox
                  styleClasses={[
                    CoreClasses.DISPLAY.FLEX,
                    CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
                    CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
                    CoreClasses.GAP.GAP_2,
                    CoreClasses.WIDTH.W_100
                  ]}
                >
                  <DemoPaper variant="elevation">Default variant</DemoPaper>

                  <DemoPaper variant="outlined">Outlined variant</DemoPaper>
                </CoreBox>
              }
            />

            <CodeSample 
              title={"Corners"}
              description={"The Paper component features rounded corners by default. Add the square prop for square corners:"}
              code={`<DemoPaper square={false}>Rounded corners</DemoPaper>
<DemoPaper square>Square corners</DemoPaper>`}
              expandedCode={`import { CoreBox, CoreClasses, CorePaper } from "@wrappid/core";

const DemoPaper = ( props ) => (
  <CorePaper
    {...props}
    styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.HEIGHT.VH_25, CoreClasses.TEXT.TEXT_CENTER, CoreClasses.PADDING.P2]}
  />
);

export default function Variants() {
  return (
    <CoreBox styleClasses={[
      CoreClasses.DISPLAY.FLEX,
      CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
      CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
      CoreClasses.GAP.GAP_2,
      CoreClasses.WIDTH.W_100
    ]}>
      <DemoPaper square={false}>Rounded corners</DemoPaper>

      <DemoPaper square>Square corners</DemoPaper>
    </CoreBox>
  );
}`}
              renderElement={
                <CoreBox styleClasses={[
                  CoreClasses.DISPLAY.FLEX,
                  CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
                  CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
                  CoreClasses.GAP.GAP_2,
                  CoreClasses.WIDTH.W_100
                ]}>
                  <DemoPaper square={false}>Rounded corners</DemoPaper>

                  <DemoPaper square>Square corners</DemoPaper>
                </CoreBox>
              }
            />
          </>
        }
      />
    </>
  );
}