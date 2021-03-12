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
            The Government of Canada is committed to protect the privacy of its visitors on its
            websites. This privacy notice summarizes the privacy policy and practices of Canadian
            Digital Service websites, which are under the responsibility of the{" "}
            <a href="https://www.canada.ca/en/treasury-board-secretariat.html">
              {{ tbs_link: t("Treasury Board Secretariat") }}
            </a>{" "}
            (TBS).
          </Trans>
        </p>
      </div>
      <br />
      <br />
      <h2 className="gc-h2">{t("title2")}</h2>

      <div>
        <p>
          <Trans t={t} i18nKey="privInternet"></Trans>
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
