const defaultSearchValues = {
    tenantId: "",
    schemaCode:""
  };
export const searchconfig = () => 
{
  return {
    label: "Estimate Search",
    type: "search",
    apiDetails: {
      serviceName: "/mdms-v2/v2/_search",
      requestParam: {
          "tenantId":Digit.ULBService.getCurrentTenantId()
      },
      requestBody: {
        apiOperation: "SEARCH",
        MdmsCriteria: {
          "tenantId": Digit.ULBService.getCurrentTenantId(),
          // "schemaCode": ""
        },
      },
     masterName: "commonUiConfig",
      moduleName: "SearchEstimateConfig",
      minParametersForSearchForm: 0,
      tableFormJsonPath: "requestParam",
      filterFormJsonPath: "requestBody.MdmsCriteria",
      searchFormJsonPath: "requestBody.MdmsCriteria",
    },
    sections: {
      search: {
        uiConfig: {
          formClassName: "custom-both-clear-search",
          primaryLabel: "ES_COMMON_SEARCH",
          secondaryLabel: "ES_COMMON_CLEAR_SEARCH",
          minReqFields: 0,
          defaultValues: defaultSearchValues, // Set default values for search fields
          fields: [
            {
              label: "Tenant Id",
              isMandatory: false,
              key: "tenantId",
              type: "text",
              populators: { 
                name: "tenantId", 
                // error: "Required", 
                // validation: { pattern: /^[A-Za-z]+$/i } 
              },
            },
            {
              label: "Schema Code",
              isMandatory: false,
              key: "schemaCode",
              type: "text",
              disable: false,
              populators: { 
                name: "schemaCode",
              },
            },
            // {
            //   label: "Id",
            //   isMandatory: false,
            //   key: "id",
            //   type: "text",
            //   disable: false,
            //   populators: { 
            //     name: "id",
            //   },
            // },
          ],
        },

        show: true
      },
      searchResult: {
        tenantId: Digit.ULBService.getCurrentTenantId(),
        uiConfig: {
          columns: [
            {
              label: "Tenant Id",
              jsonPath: "tenantId",
            },
            {
              label: "Schema Code",
              jsonPath: "schemaCode",
              // "additionalCustomization": true,
            },
            {
              label: "Id",
              jsonPath: "id",
              // additionalCustomization: true,
            },
          ],

          enableColumnSort: true,
          resultsJsonPath: "mdms"
        },
        show: true,
      },
    },
  };
};