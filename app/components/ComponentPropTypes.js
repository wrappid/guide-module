import {
  CoreTableCell,
  CoreTableRow,
  CoreTableBody,
  CoreH6,
  CoreAccordion,
  CoreAccordionSummary,
  CoreIconButton,
  CoreIcon,
  CoreAccordionDetail,
  CoreChip,
  CoreDivider,
  CoreTypographyBody1,
  CoreBox
} from "@wrappid/core";

export default function ComponentPropTypes({ propTypes, viewType }) {
  const VALUE_NOT_SPECIFIED = "NA";
  const VALUE_NOT_PROVIDED = "Not Provided";

  const prepareValueString = (value) => {
    if (value) {
      if (Array.isArray(value)) {
        return value.length > 0 ? value.join(" | ") : VALUE_NOT_SPECIFIED;
      } else {
        return JSON.stringify(value);
      }
    } else if(typeof value === "boolean") {
      return value ? "true" : "false";
    }
    else {
      return VALUE_NOT_SPECIFIED;
    }
  };

  const handleValidValues = (value) => {
    return value ? prepareValueString(value.validValues) : VALUE_NOT_PROVIDED;
  };

  const handleDefaultValues = (value) => {
    return value ? prepareValueString(value.default) : VALUE_NOT_PROVIDED;
  };

  return (
    <>
      {viewType === "Table" && 
          <CoreTableBody>
            {propTypes?.types?.map((prop, index) => (
              <CoreTableRow key={index}>
                {index === 0 ? (
                  <CoreTableCell rowSpan={propTypes.types.length}>{propTypes?.name || VALUE_NOT_SPECIFIED}</CoreTableCell>
                ) : null}

                {index === 0 ? (
                  <CoreTableCell rowSpan={propTypes.types.length}>{propTypes?.description || VALUE_NOT_SPECIFIED}</CoreTableCell>
                ) : null}

                <CoreTableCell>{prop.type}</CoreTableCell>

                <CoreTableCell>{handleDefaultValues(prop) || VALUE_NOT_SPECIFIED}</CoreTableCell>

                <CoreTableCell>{handleValidValues(prop) || VALUE_NOT_SPECIFIED}</CoreTableCell>
              </CoreTableRow>
            ))}
          </CoreTableBody>
      }

      {viewType === "List" && (
        <CoreAccordion>
          <CoreAccordionSummary expandIcon={<CoreIconButton><CoreIcon icon="expand_more" /></CoreIconButton>}>
            <CoreH6>{propTypes?.name || VALUE_NOT_SPECIFIED}</CoreH6>
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
                {propTypes?.description || VALUE_NOT_SPECIFIED}
              </CoreTypographyBody1>

              <CoreTypographyBody1>
                {propTypes?.types?.map((type, index) => (
                  <CoreBox key={index}>
                    <CoreTypographyBody1>
                    Type: {type.type}
                    </CoreTypographyBody1>

                    <CoreTypographyBody1>
                    Default: {handleDefaultValues(type) || VALUE_NOT_SPECIFIED}
                    </CoreTypographyBody1>

                    <CoreTypographyBody1>
                    Valid Values: {handleValidValues(type) || VALUE_NOT_SPECIFIED}
                    </CoreTypographyBody1>
                  </CoreBox>
                ))}
              </CoreTypographyBody1>

              <CoreDivider />
            </CoreBox>
          </CoreAccordionDetail>
        </CoreAccordion>
      )}
    </>
  );
}
