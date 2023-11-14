import {
  CoreBox,
  CoreH4,
  CorePaper,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CorePaperDocs() {
  return (
    <>
      <CoreH4>CorePaper</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
  
      <CodeSample
        title={"Introduction CorePaper (NOT_WORKING)<SX>"}
        description={"In Material Design, surface components and shadow styles are heavily influenced by their real-world physical counterparts.\
        Material UI implements this concept with the Paper component, a container-like surface that features the elevation prop for pulling box-shadow values from the theme."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          <CoreBox
            sx={{
              "& > :not(style)": {
                height: 128,
                m     : 1,
                width : 128,
              },
              display : "flex",
              flexWrap: "wrap",
            }}
          >
            <CorePaper elevation={0} />

            <CorePaper />

            <CorePaper elevation={3} />
          </CoreBox>
        </>}
      />

      <CodeSample
        title={"Elevation (NOT_WORKING)"}
        description={"Use the elevation prop to establish hierarchy through the use of shadows. The Paper component's default elevation level is 1. The prop accepts values from 0 to 24. The higher the number, the further away the Paper appears to be from its background.\
        In dark mode, increasing the elevation also makes the background color lighter. This is done by applying a semi-transparent gradient with the background-image CSS property."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Variants (NOT_WORKING)"}
        description={"Set the variant prop to \"outlined\" for a flat, outlined Paper with no shadows:"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          {/* <CoreStack direction="row" spacing={2}>
            <CoreDemoPaper variant="elevation">default variant</CoreDemoPaper>

            <CoreDemoPaper variant="outlined">outlined variant</CoreDemoPaper>
          </CoreStack> */}
        </>}
      />

      <CodeSample
        title={"Corners (NOT_WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          {/* <CoreStack direction="row" spacing={2}>
            <CoreDemoPaper square={false}>rounded corners</CoreDemoPaper>

            <CoreDemoPaper square>square corners</CoreDemoPaper>
          </CoreStack> */}
        </>}
      />

      {/* <ComponentProps component={CorePaper} /> */}
      
    </>
  );
}