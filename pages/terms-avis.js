import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Terms = () => {
  const { t } = useTranslation("terms");

  return (
    <>
      <h1 className="gc-h1">{t("title")}</h1>

      <div>
        <p>{t("body")}</p>
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "welcome"])),
  },
});

export default Terms;
