import React from "react";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import I18nLink from "../components/globals/TranslatedLink";

const Privacy = () => {
  const { t } = useTranslation("privacy");
  return (
    <>
      <h1 className="gc-h1">{t("title")}</h1>

      <div>
        <p>
          <Trans t={t} i18nKey="body">
            w<I18nLink href="https://www.canada.ca/en/treasury-board-secretariat.html">{{ tbs_link: t("Treasury Board Secretariat") }}</I18nLink>w
          </Trans>
        </p>
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "privacy"])),
  },
});

export default Privacy;
