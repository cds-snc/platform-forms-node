import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "../i18n";
import { useRouter } from "next/router";

const Terms = ({ t }) => {
  const router = useRouter();
  const urlQuery = router.query;

  return (
    <>
      <h1 className="gc-h1">{t("title")}</h1>

      <div>
        <p>{t("body")}</p>
      </div>
    </>
  );
};

Terms.getInitialProps = async () => ({
  namespacesRequired: ["terms"],
});

Terms.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("terms")(Terms);
