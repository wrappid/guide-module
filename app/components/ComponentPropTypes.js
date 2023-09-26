import {
  CoreTable, CoreTableBody, CoreTableCell, CoreTableHead, CoreTableHeadCell, CoreTableRow, CoreTypographySubtitle2 
} from "@wrappid/core";

export default function ComponentPropTypes({ propTypes }) {
  return (
    <CoreTable>
      <CoreTableHead>
        <CoreTableRow>
          <CoreTableHeadCell>Type</CoreTableHeadCell>

          <CoreTableHeadCell>Default</CoreTableHeadCell>

          <CoreTableHeadCell>Valid Values</CoreTableHeadCell>
        </CoreTableRow>
      </CoreTableHead>

      <CoreTableBody>
        {propTypes && propTypes.length > 0 ? (
          propTypes?.map(eachType => {
            return (
              <CoreTableRow key={`${eachType}`}>
                <CoreTableCell>
                  {eachType?.type || "Not Given"}
                </CoreTableCell>

                <CoreTableCell>
                  {eachType?.default || "Not Given"}
                </CoreTableCell>

                <CoreTableCell>
                  {eachType?.validValues?.join(" | ") || "Not Given"}
                </CoreTableCell>
              </CoreTableRow>
            );
          })
        ) : (
          <CoreTableRow>
            <CoreTableCell></CoreTableCell>

            <CoreTableCell>    
              <CoreTypographySubtitle2>Not specified.</CoreTypographySubtitle2>
            </CoreTableCell>

            <CoreTableCell></CoreTableCell>
          </CoreTableRow>
        )}
      </CoreTableBody>
    </CoreTable>
  );
}
