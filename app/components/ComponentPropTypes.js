/* eslint-disable no-console */
import {
  CoreClasses,
  CoreTable,
  CoreTableBody,
  CoreTableCell,
  CoreTableHead,
  CoreTableHeadCell,
  CoreTableRow,
  CoreTypographySubtitle2
} from "@wrappid/core";

export default function ComponentPropTypes({ propTypes }) {
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
    <CoreTable size="small">
      <CoreTableHead styleClasses={[CoreClasses.BG.BG_PRIMARY, CoreClasses.COLOR.TEXT_BLACK]} size="small">
        <CoreTableRow>
          <CoreTableHeadCell>Type</CoreTableHeadCell>

          <CoreTableHeadCell>Default</CoreTableHeadCell>

          <CoreTableHeadCell>Valid Values</CoreTableHeadCell>
        </CoreTableRow>
      </CoreTableHead>

      <CoreTableBody>
        {propTypes && propTypes.length > 0 ? (
          propTypes?.map((eachType) => {
            return (
              <CoreTableRow key={`${eachType}`}>
                <CoreTableCell>{eachType?.type || "Not Given"}</CoreTableCell>

                <CoreTableCell>{handleDefaultValues(eachType)}</CoreTableCell>

                <CoreTableCell>{handleValidValues(eachType)}</CoreTableCell>
              </CoreTableRow>
            );
          })
        ) : (
          <CoreTableRow>
            <CoreTableCell></CoreTableCell>

            <CoreTableCell>
              <CoreTypographySubtitle2>NA.</CoreTypographySubtitle2>
            </CoreTableCell>

            <CoreTableCell></CoreTableCell>
          </CoreTableRow>
        )}
      </CoreTableBody>
    </CoreTable>
  );
}
