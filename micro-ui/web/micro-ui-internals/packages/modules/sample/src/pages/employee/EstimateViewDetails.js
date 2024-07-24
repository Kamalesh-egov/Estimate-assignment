import React, { Fragment, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { Button, Header, Loader, ViewComposer } from "@egovernments/digit-ui-react-components";

const EstimateViewDetails = (props) => {
  const { t } = useTranslation();
  const history = useHistory();
  const tenantId = Digit.ULBService.getCurrentTenantId();

  const reqCriteria = {
    url: "/mdms-v2/v2/_search",
    params: {
      tenantId: tenantId,
      limit: 10,
      offset: 0,
    },
    body: {
      apiOperation: "SEARCH",
      MdmsCriteria: {
        tenantId,
        id: ["d91dfa17-c1ac-4c0d-8a48-f501ace3c9da"],
      },
    },
    config: {
      select: (data) => {
        console.log(data, "hi")
        const response = data?.mdms?.[0];
        console.log(response.data, "hi")
        return {
          cards: [
            {
              name: "estimateDetails",
              sections: [
                {
                  type: "DATA",
                  cardHeader: { value: t("Estimate Details"), inlineStyles: { marginTop: 0, fontSize: "1.5rem" } },
                  values: [
                    {
                      key: "Id",
                      value: response?.id ? response?.id : t("NA"),
                    },
                    {
                      key: "Num1",
                      value: response?.data?.num1 ? response?.data?.num1 : t("NA"),
                    },
                    {
                      key: "Num1",
                      value: response?.data?.num1 ? response?.data?.num1 : t("NA"),
                    },
                    {
                      key: "Dummy1 Id",
                      value: response?.data?.dummy1Id ? response?.data?.dummy1Id : t("NA"),
                    },
                    {
                      key: "Dummy2 Id",
                      value: response?.data?.dummy2Id ? response?.data?.dummy2Id : t("NA"),
                    },
                  ],
                },
              ],
            },
          ],
        };
      },
    },
  };
  const { isLoading, data } = Digit.Hooks.useCustomAPIHook(reqCriteria);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
    {/* {console.log(JSON.stringify(data))}
    {console.log(JSON.stringify(response))} */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Header className="summary-header">{t("ESTIMATE DETAILS")}</Header>
      </div>
      <div className="campaign-summary-container">
        <ViewComposer data={data} />
      </div>
    </>
  );
};

export default EstimateViewDetails;
