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
  CoreBox,
  CoreStack
} from "@wrappid/core";

/**
 * Renders a component's prop types in either a table or a list view.
 * 
 * @param {Object} props - The component's prop types and view type.
 * @param {Array} props.propTypes - The array of prop types.
 * @param {string} props.viewType - The view type, either "Table" or "List".
 * @returns {JSX.Element} - The rendered prop types.
 */
export default function ComponentPropTypes({ propTypes, viewType }) {
  const VALUE_NOT_SPECIFIED = "NA";
  const TYPE_NOT_SPECIFIED = "NA";
  const VALUE_NOT_PROVIDED = "Not Provided";
  
  /**
   * Prepares the value string. 
   * @param {*} value - The value to prepare.
   * @returns {string} - The prepared value string.
   */
  const prepareValueString = (value) => {
    if (value) {
      if (Array.isArray(value)) {
        return value.length > 0 ? value.join(" | ") : VALUE_NOT_SPECIFIED;
      } else {
        return JSON.stringify(value);
      }
    } else if (typeof value === "boolean") {
      return value ? "true" : "false";
    }
    else {
      return VALUE_NOT_SPECIFIED;
    }
  };

  /**
   * Renders a chip with the default value 
   * @returns {JSX.Element} - The rendered chip. 
   */
  const DefaultChip = () => {
    return (
      <>
        <CoreChip size="small" label="default" />
      </>
    );
  };

  /**
   * Handles the valid values for a prop type. 
   * @param {*} value
   * @returns {string} - The valid values string.
   */
  const handleValidValues = (value) => {
    return value ? prepareValueString(value.validValues) : VALUE_NOT_PROVIDED;
  };

  /**
   * Handles the default values for a prop type.
   * @param {*} value 
   * @returns {string} - The default value string.
   */
  const handleDefaultValues = (value) => {
    return value ? prepareValueString(value.default) : VALUE_NOT_PROVIDED;
  };

  /**
   * Handles the types for a prop type.
   * @param {*} value 
   * @returns {string} - The type string. 
   */
  const handleTypes = (value) => {
    return value ? value.type : TYPE_NOT_SPECIFIED;
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

              <CoreTableCell>
                <CoreStack direction={"row"} spacing={2}>
                  {handleTypes(prop)} 

                  {(prop && prop?.isDefaultType) && (
                    <DefaultChip />
                  )}
                </CoreStack>
              </CoreTableCell>

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
