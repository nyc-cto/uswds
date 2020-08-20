/**
 * JSX Footer Component Attributes
 * @function Footer
 * @param {Object} config The configuration object for footer attributes
 * @property {string} config.variant - The USWDS Footer variant
 * @property {*} config.children     - The children passed in
 * @example
 *   const config = {
 *     variant: "big",
 *     children: <h1>Child of Footer</h1>,
 *   }
 *   Footer(config);
 * @example
 *   <Footer variant={"big"}>
 *     <h1>Child of Footer</h1>
 *   </Footer>
 * @example
 *   // Full usage example
 *   <Footer variant={"big"}>
 *     <FooterPrimarySection>
 *       <FooterPrimaryLink innerText={"Topic"} />
 *       <FooterSecondaryLink href={"#"} innerText={"Link 1"} />
 *       <FooterSecondaryLink href={"#"} innerText={"Link 2"} />
 *       <FooterSecondaryLink href={"#"} innerText={"Link 3"} />
 *     </FooterPrimarySection>
 *     <FooterSecondarySection>
 *       <img src="example.jpg" alt="example" />
 *     </FooterSecondarySection>
 *   </Footer>
 * @returns {HTMLFooterElement} The HTML <code>footer</code>
 */
exports.Footer = function(config) {
  // Variant is big, nothing (medium), or slim
  const variant = config.variant ? `usa-footer--${config.variant}` : "";
  return <footer class={`usa-footer ${variant}`}>{config.children}</footer>;
};

/**
 * JSX Footer Primary Section Component Attributes
 * @function FooterPrimarySection
 * @param {Object} config The configuration object for footer primary section attributes
 * @property {*} config.children - The children passed in
 * @example
 *   const config = {
 *     children: "Topic",
 *   }
 *   FooterPrimarySection(config);
 * @example
 *   <FooterPrimarySection>
 *     <p>Example Primary Section</p>
 *   </FooterPrimarySection>
 * @returns {HTMLDivElement} The HTML <code>div</code> for a primary section
 */
exports.FooterPrimarySection = function(config) {
  return <div class="usa-footer_primary-section">{config.children}</div>;
};

/**
 * JSX Footer Primary Link Component Attributes
 * @function FooterPrimaryLink
 * @param {Object} config The configuration object for footer primary link attributes
 * @property {string} config.innerText - The text for a primary link
 * @example
 *   const config = {
 *     innerText: "Topic 1",
 *   }
 *   FooterPrimaryLink(config);
 * @example
 *   <FooterPrimaryLink innerText={"Topic 1"} />
 * @returns {HTMLHeadElement} The HTML <code>h4</code> for a primary link
 */
exports.FooterPrimaryLink = function(config) {
  return <h4 class="usa-footer__primary-link">{config.innerText}</h4>;
};

/**
 * JSX Footer Secondary Link Component Attributes
 * @function FooterSecondaryLink
 * @param {Object} config The configuration object for footer secondary link attributes
 * @property {string} config.href      - The href attribute
 * @property {string} config.innerText - The text to display for the <code>a</code> tag
 * @example
 *   const config = {
 *     href: "https://github.com",
 *     innerText: "GitHub",
 *   }
 *   FooterSecondaryLink(config);
 * @example
 *   <FooterSecondaryLink href={"https://github.com"} innerText={"GitHub"} />
 * @returns {HTMLListElement} The HTML <code>li</code> that contains an <code>a</code> link for a secondary link
 */
exports.FooterSecondaryLink = function(config) {
  return (
    <li class="usa-footer__secondary-link">
      <a href={config.href}>{config.innerText}</a>
    </li>
  );
};

/**
 * JSX Footer Secondary Section Component Attributes
 * @function FooterSecondarySection
 * @param {Object} config The configuration object for footer secondary section attributes
 * @property {*} config.children - The children passed in
 * @example
 *   const config = {
 *     children: "Have a nice day!",
 *   }
 *   FooterSecondarySection(config);
 * @example
 *   <FooterSecondarySection>
 *     <p>(800) CALL-GOVT</p>
 *   </FooterSecondarySection>
 * @returns {HTMLDivElement} The HTML <code>div</code> for a secondary section
 */
exports.FooterSecondarySection = function(config) {
  return <div class="usa-footer_secondary-section">{config.children}</div>;
};
