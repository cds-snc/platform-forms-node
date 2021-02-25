import React from "react";
import PropTypes from "prop-types";
import { withTranslation, Link } from "../../i18n";

const Footer = ({ t }) => (
  <footer className="gc-footer" data-testid="footer">
    <div className="gc-footer-container items-start">
      <div>
        <ul>
          <li>
            <Link href={"/privacy"}>{t("footer.privacy.desc")}</Link>
          </li>
          <li>
            <Link href={"/terms-avis"}>{t("footer.terms.desc")}</Link>
          </li>
        </ul>
      </div>
      <div>
        <img alt={t("fip.text")} src="/img/wmms-blk.svg" />
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  t: PropTypes.func.isRequired,
  i18n: PropTypes.object.isRequired,
};

export default withTranslation("common")(Footer);
