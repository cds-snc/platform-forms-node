import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const TranslatedLink = ({ children, href, locale }) => {
  let validChildren = children;
  if (Array.isArray(children) && children.length == 1) {
    validChildren = children[0];
  }
  const props = { children: validChildren, href, locale };
  return <Link {...props} />;
};

TranslatedLink.propTypes = {
  children: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired,
  locale: PropTypes.string,
};

export default TranslatedLink;
