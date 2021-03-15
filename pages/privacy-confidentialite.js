import React from "react";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Privacy = () => {
  const { t, i18n } = useTranslation("privacy");
  return (
    <>
      <h1 className="gc-h1">{t("title")}</h1>

      <div>
        <p>
          <Trans t={t} i18nKey="body">
            The Government of Canada is committed to protect the privacy of its visitors on its
            websites. This privacy notice summarizes the privacy policy and practices of Canadian
            Digital Service websites, which are under the responsibility of the{" "}
            <a
              href={
                i18n.language === "en"
                  ? "https://www.canada.ca/en/treasury-board-secretariat.html"
                  : "https://www.canada.ca/fr/secretariat-conseil-tresor.html"
              }
            >
              Treasury Board Secretariat
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
          <Trans t={t} i18nKey="privInternet">
            Specific personal information, such as your name, phone number or email address, is not
            automatically gathered. TBS would only obtain this type of information if you supply it
            by email or by registering in a secure portion of the site for a program or service
            (e.g. personal information provided voluntarily when you complete an online form or
            request for service). <br />
            <br />
            The nature of the Internet is such that Web servers automatically collect certain
            information about a visit to a website, including the visitor's Internet Protocol (IP)
            address. IP addresses are unique numbers assigned by Internet Service Providers (ISP) to
            all devices used to access the Internet. Web servers automatically log the IP addresses
            of visitors to their sites. The IP address, on its own, does not identify an individual.
            However, in certain circumstances, such as with the co-operation of an ISP for example,
            it could be used to identify an individual using the site. For this reason, the
            Government of Canada considers the IP address to be personal information, particularly
            when combined with other data automatically collected when a visitor requests a Web page
            such as the page or pages visited, date and time of the visit.
            <br />
            <br />
            In cases where services are provided by organisations outside of the Government of
            Canada, such as social media platforms, search or mobile applications, IP addresses may
            be recorded by the third-party service provider.
            <br />
            <br />
            All personal information created, held or collected by the Government of Canada is
            protected under the federal{" "}
            <a href="http://laws-lois.justice.gc.ca/eng/acts/P-21/index.html">Privacy Act</a>. At
            any point of collection, you will be asked for consent to collect your information or
            you will be advised of the authority for such collection. You will also be informed of
            the purpose for which the personal information is being collected, and how to exercise
            your right of access to, and correction of, that information. In such cases, how your
            personal information is handled is described in a Personal Information Collection
            Statement.
            <br />
            <br />
            Visitors' personal information is not usually disclosed to anyone except Government of
            Canada personnel who need the information to carry out their responsibilities. Any
            further disclosure of the personal information you provide would be in accordance with
            the federal{" "}
            <a href="http://laws-lois.justice.gc.ca/eng/acts/P-21/index.html">Privacy Act</a>."
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
