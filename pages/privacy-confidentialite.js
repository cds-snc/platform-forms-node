import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

const Privacy = () => {
  const { t } = useTranslation("privacy");
  return (
    <>
      <h1 className="gc-h1">{t("title")}</h1>

      <div>
        <p>{t("body", { tbs: <Link href="/where-ever">$t(link_)</Link> })}</p>
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "privacy"])),
  },
});

//t("body", { tbs: <Link href="/where-ever">$t(link_)</Link> });

export default Privacy;
