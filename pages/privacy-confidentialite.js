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
            The <I18nLink href="/sandbox">{{ tbs_link: t("tbs_link") }}</I18nLink>
            is committed to protect the privacy of its visitors on its websites. This Privacy Notice
            summarizes the privacy policy and practices on the Canadian Digital Service website, a
            website under the responsibility of the Treasury Board Secretariat (TBS).
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
