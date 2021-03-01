import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "../i18n";
import { useRouter } from "next/router";
import { Link } from "../i18n";

const Privacy = ({ t }) => {
  const router = useRouter();
  const urlQuery = router.query;

  return (
    <>
      <h1 className="gc-h1">{t("title")}</h1>

      <div>
        <p>{t('body')}</p>
      </div>
    </>
  );
};

Privacy.getInitialProps = async () => ({
  namespacesRequired: ["privacy"],
});

Privacy.propTypes = {
  t: PropTypes.func.isRequired,
};

t('body', { tbs: <Link href="/where-ever">$t(link_)</Link> });



export default withTranslation("privacy")(Privacy);
