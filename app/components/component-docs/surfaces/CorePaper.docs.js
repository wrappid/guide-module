import {
  CoreBox,
  CoreH4,
  CorePaper,
  CoreTypographyBody1,
  CoreClasses
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CorePaperDocs() {
  return (
    <>
      <CoreH4>CorePaper</CoreH4>
  
      <CoreTypographyBody1>
      The Paper component is a container for displaying content on an elevated surface.
      </CoreTypographyBody1>
  
      <CodeSample
        title={"Paper"}
        description={"In Material Design, surface components and shadow styles are heavily influenced by their real-world physical counterparts.\
        Material UI implements this concept with the Paper component, a container-like surface that features the elevation prop for pulling box-shadow values from the theme."}
        code={`<CoreBox styleClasses={[
          CoreClasses.WIDTH.VW_50,
          CoreClasses.BG.BG_GREY_100,
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.GAP.GAP_2,
          CoreClasses.PADDING.P2
        ]}>
          <CorePaper styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]} elevation={0} />
  
          <CorePaper styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]} />
  
          <CorePaper styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]} elevation={3} />
        </CoreBox>`}
        renderElement={<>
          <CoreBox styleClasses={[
            CoreClasses.WIDTH.VW_50,
            CoreClasses.BG.BG_GREY_100,
            CoreClasses.DISPLAY.FLEX,
            CoreClasses.GAP.GAP_2,
            CoreClasses.PADDING.P2
          ]}>
            <CorePaper styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]} elevation={0} />

            <CorePaper styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]} />

            <CorePaper styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]} elevation={3} />
          </CoreBox>
        </>}
      />

      <CodeSample
        title={"Elevation"}
        description={"Use the elevation prop to establish hierarchy through the use of shadows. The Paper component's default elevation level is 1. The prop accepts values from 0 to 24. The higher the number, the further away the Paper appears to be from its background.\
        In dark mode, increasing the elevation also makes the background color lighter. This is done by applying a semi-transparent gradient with the background-image CSS property."}
        code={` <CoreBox styleClasses={[
          CoreClasses.WIDTH.W_75,
          CoreClasses.BG.BG_GREY_100,
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.FLEX.FLEX_WRAP_WRAP,
          CoreClasses.FLEX.DIRECTION_ROW,
          CoreClasses.GAP.GAP_2,
        ]}>
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
            <CorePaper styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.HEIGHT.VH_25]} key={elevation} elevation={elevation}>
            elevation=elevation
            </CorePaper>
          ))}
        </CoreBox>`}
        renderElement={<>
          <CoreBox styleClasses={[
            CoreClasses.WIDTH.W_75,
            CoreClasses.BG.BG_GREY_100,
            CoreClasses.DISPLAY.FLEX,
            CoreClasses.FLEX.FLEX_WRAP_WRAP,
            CoreClasses.FLEX.DIRECTION_ROW,
            CoreClasses.GAP.GAP_2,
            CoreClasses.PADDING.P2
          ]}>
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
              <CorePaper styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.HEIGHT.VH_25]} key={elevation} elevation={elevation}>
                <CoreTypographyBody1>{`elevation=${elevation}`}</CoreTypographyBody1>
              </CorePaper>
            ))}
          </CoreBox>
        </>}
      />

      <CodeSample
        title={"Variants"}
        description={"Set the variant prop to \"outlined\" for a flat, outlined Paper with no shadows:"}
        code={`<CoreBox styleClasses={[
          CoreClasses.WIDTH.VW_50,
          CoreClasses.BG.BG_GREY_100,
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.GAP.GAP_2,
          CoreClasses.PADDING.P2
        ]}>
          <CorePaper styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]} variant="outlined">
            <CoreTypographyBody1>default variant</CoreTypographyBody1>
          </CorePaper>
  
          <CorePaper styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]} variant="elevation">
            <CoreTypographyBody1>outlined variant</CoreTypographyBody1>
          </CorePaper>
        </CoreBox>`}
        renderElement={<>
          <CoreBox styleClasses={[
            CoreClasses.WIDTH.VW_50,
            CoreClasses.BG.BG_GREY_100,
            CoreClasses.DISPLAY.FLEX,
            CoreClasses.GAP.GAP_2,
            CoreClasses.PADDING.P2
          ]}>
            <CorePaper styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]} variant="outlined">
              <CoreTypographyBody1>default variant</CoreTypographyBody1>
            </CorePaper>

            <CorePaper styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]} variant="elevation">
              <CoreTypographyBody1>outlined variant</CoreTypographyBody1>
            </CorePaper>
          </CoreBox>
        </>}
      />

      <CodeSample
        title={"Corners"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={` <CoreBox styleClasses={[
          CoreClasses.WIDTH.VW_50,
          CoreClasses.BG.BG_GREY_100,
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.GAP.GAP_2,
          CoreClasses.PADDING.P2
        ]}>
          <CorePaper  square={false} styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]} variant="outlined">
            <CoreTypographyBody1>rounded corners</CoreTypographyBody1>
          </CorePaper>
  
          <CorePaper  square styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]} variant="elevation">
            <CoreTypographyBody1>square corners</CoreTypographyBody1>
          </CorePaper>
        </CoreBox>`}
        renderElement={<>
          <CoreBox styleClasses={[
            CoreClasses.WIDTH.VW_50,
            CoreClasses.BG.BG_GREY_100,
            CoreClasses.DISPLAY.FLEX,
            CoreClasses.GAP.GAP_2,
            CoreClasses.PADDING.P2
          ]}>
            <CorePaper square={false} styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]} variant="outlined">
              <CoreTypographyBody1>rounded corners</CoreTypographyBody1>
            </CorePaper>

            <CorePaper square styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]} variant="elevation">
              <CoreTypographyBody1>square corners</CoreTypographyBody1>
            </CorePaper>
          </CoreBox>
        </>}
      />

      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <ComponentProps component={CorePaper} /> */}
      
    </>
  );
}