export const estimateConfig = [
  {
    head: "Basic Information",
    body: [
      {
        inline: true,
        label: "Proposal Date",
        isMandatory: false,
        key: "proposalDate",
        type: "date",
        disable: false,
        populators: { name: "proposalDate", error: "Required"},
      },
      {
        inline: true,
        label: "Status",
        isMandatory: false,
        key: "status",
        type: "text",
        disable: false,
        populators: { name: "status", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        inline: true,
        label: "Workflow Status",
        isMandatory: false,
        key: "wfStatus",
        type: "text",
        disable: false,
        populators: { name: "wfStatus", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        inline: true,
        label: "Name",
        isMandatory: false,
        key: "name",
        type: "text",
        disable: false,
        populators: { name: "name", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        inline: true,
        label: "Description",
        isMandatory: false,
        key: "description",
        type: "text",
        disable: false,
        populators: { name: "description", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        inline: true,
        label: "Executing Department",
        isMandatory: false,
        key: "executingDepartment",
        type: "text",
        disable: false,
        populators: { name: "executingDepartment", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
    ],
  },
  {
    head: "Address",
    key: "address",
    body: [
      {
        inline: true,
        label: "Latitude",
        isMandatory: true,
        key: "latitude",
        type: "number",
        disable: false,
        populators: { name: "latitude", error: " Required ", validation: { min: 0, max: 9999999999 } },
      },
      {
        inline: true,
        label: "Longitude",
        isMandatory: true,
        key: "longitude",
        type: "number",
        disable: false,
        populators: { name: "longitude", error: " Required ", validation: { min: 0, max: 9999999999 } },
      },
      {
        inline: true,
        label: "City",
        isMandatory: false,
        key: "city",
        type: "text",
        disable: false,
        populators: { name: "city", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
    ],
  },
  {
    head: "Estimate Details",
    key: "estimateDetails",
    body: [
      {
        isMandatory: false,
        key: "estimateDetails",
        type: "component", // for custom component
        component: "SampleAddEstimateComponent", // name of the component as per component registry
        withoutLabel: true,
        disable: false,
        customProps: {},
        populators: {
          name: "estimateDetails",
          required: true,
          options: [
            {
              inline: true,
              label: "SOR Id",
              isMandatory: true,
              key: "sorId",
              type: "text",
              disable: false,
              populators: { name: "sorId", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
            },
            {
              inline: true,
              label: "Category",
              isMandatory: true,
              key: "category",
              type: "text",
              disable: false,
              populators: { name: "category", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
            },
            {
              inline: true,
              label: "Description",
              isMandatory: true,
              key: "description",
              type: "text",
              disable: false,
              populators: { name: "description", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
            },
            {
              inline: true,
              label: "Unit Rate",
              isMandatory: true,
              key: "unitRate",
              type: "amount",
              disable: false,
              populators: {
                  prefix: "₹ ",
                  name: "amountInRs",
                  error: "PROJECT_PATTERN_ERR_MSG_PROJECT_ESTIMATED_COST",
                  validation: {
                    pattern: "^[1-9]\\d*(\\.\\d+)?$",
                    maxlength : 16,
                    step : "0.01",
                    min : 0,
                    max : 5000000
                  }
                }
            },
            {
              inline: true,
              label: "No of units",
              isMandatory: true,
              key: "noOfUnit",
              type: "number",
              disable: false,
              populators: { name: "noOfUnit", error: " Required ", validation: { min: 0, max: 9999999999 } },
            },
            {
              inline: true,
              label: "UOM",
              isMandatory: true,
              key: "uom",
              type: "text",
              disable: false,
              populators: { name: "uom", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
            },
            {
              inline: true,
              label: "Length",
              isMandatory: true,
              key: "length",
              type: "number",
              disable: false,
              populators: { name: "length", error: " Required ", validation: { min: 0, max: 9999999999 } },
            },
            {
              inline: true,
              label: "Width",
              isMandatory: true,
              key: "width",
              type: "number",
              disable: false,
              populators: { name: "width", error: " Required ", validation: { min: 0, max: 9999999999 } },
            },
          ]
        },
      },
    ],
  },
];
