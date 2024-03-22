/* eslint-disable no-console */
import {
  CoreTableBody,
  CoreTableCell,
  CoreTableRow, CoreAccordion, CoreAccordionSummary, CoreIconButton, CoreIcon, CoreH6, CoreAccordionDetail, CoreChip, CoreDivider, CoreTypographyBody1, CoreBox, CoreTable, CoreTableHead, CoreTableHeadCell, CoreClasses
} from "@wrappid/core";

export default function ComponentPropTypes({ propTypes, viewType }) {

  // eslint-disable-next-line no-undef
  console.log("viewType:", viewType);

  const VALUE_NOT_SPECIFIED = "NA";
  const VALUE_NOT_PROVIDED = "Not Provided";
  const prepareValueString = (value) => {
    if (value) {
      console.log("ValidValue Exists");
      if (Array.isArray(value)) {
        console.log("ValidValue is an array");
        if (value.length > 0) {
          console.log("ValidValue array contains element(s)");
          return value.join(" | ");
        } else {
          console.log("ValidValue array is empty");
          return VALUE_NOT_SPECIFIED;
        }
      } else {
        console.log("ValidValue is not an array");
        return JSON.stringify(value);
      }
    } else {
      console.log("ValidValue Not Exists");
      return VALUE_NOT_SPECIFIED;
    }
  };

  const handleValidValues = (value) => {
    if (value) {
      return prepareValueString(value.validValues);
    } else {
      return VALUE_NOT_PROVIDED;
    }
  };
  
  const handleDefaultValues = (value) => {
    if (value) {
      return prepareValueString(value.default);
    } else {
      return VALUE_NOT_PROVIDED;
    }
  };

  return (
    <>
      { viewType === "Table" && 
      
      <CoreTable size="small">
        <CoreTableHead styleClasses={[CoreClasses.BG.BG_PRIMARY, CoreClasses.COLOR.TEXT_BLACK]} size="small">
          <CoreTableRow>
            <CoreTableHeadCell>Prop</CoreTableHeadCell>

            <CoreTableHeadCell>Description</CoreTableHeadCell>

            <CoreTableHeadCell>Type</CoreTableHeadCell>

            <CoreTableHeadCell>Default</CoreTableHeadCell>

            <CoreTableHeadCell>Valid Values</CoreTableHeadCell>
          </CoreTableRow>
        </CoreTableHead>

        <CoreTableBody>
          <CoreTableRow>
            <CoreTableCell>{propTypes?.name || "NA"}</CoreTableCell>
 
            <CoreTableCell>{propTypes.description || "NA"}</CoreTableCell>
 
            <CoreTableCell>{propTypes?.types?.type || "NA"}</CoreTableCell>
             
            <CoreTableCell>{handleDefaultValues(propTypes?.types) || "NA"}</CoreTableCell>
 
            <CoreTableCell>{handleValidValues(propTypes?.types) || "NA"}</CoreTableCell>
          </CoreTableRow>
        </CoreTableBody>
      </CoreTable>
      } 

      { viewType === "List" && <CoreAccordion gridProps={12}>
        <CoreAccordionSummary expandIcon={<CoreIconButton><CoreIcon icon="expand_more" /></CoreIconButton>}>
          <CoreH6>{propTypes?.name || "NA"}</CoreH6>
        </CoreAccordionSummary>

        <CoreAccordionDetail>
          <CoreBox>
            {propTypes?.required ? (
              <CoreChip size="small" color="info" label="REQUIRED" />
            ) : (
              <CoreChip size="small" color="warning" label="OPTIONAL" />
            )}

            <CoreDivider />

            <CoreTypographyBody1>
              {propTypes?.description || "NA"}
            </CoreTypographyBody1>

            <CoreTypographyBody1>
              {handleDefaultValues(propTypes?.types) || "NA"}
            </CoreTypographyBody1>

            <CoreTypographyBody1>
              {handleValidValues(propTypes?.types) || "NA"}
            </CoreTypographyBody1>

            <CoreDivider />
          </CoreBox>
        </CoreAccordionDetail>
      </CoreAccordion>}
    </>
  );
}
