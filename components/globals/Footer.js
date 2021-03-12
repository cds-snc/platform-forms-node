import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <footer className="gc-footer" data-testid="footer">
      <div className="gc-footer-container items-start">
        <div>
          <ul>
            <li>
              <Link href={"/privacy-confidentialite"}>{t("footer.privacy.desc")}</Link>
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
};

export default Footer;
