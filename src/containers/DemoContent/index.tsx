import React from "react";
import Gist from "react-gist";
import { useIntl } from "react-intl";
// const Gist = require("react-gist");
import { localizationKeys } from "../../locale/keys";
export default function DemoContent() {
  const intl = useIntl();
  return (
    <div>
      <h3>Demo:</h3>
      <p>{intl.formatMessage({ id: localizationKeys.general.greeting })}</p>
      <p>{intl.formatMessage({ id: localizationKeys.general.intro })}</p>
      <h3>Code: </h3>
      <Gist id="57ace50b3900ccd53b14eb201688231f" />
    </div>
  );
}
