import Image from "next/image";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="section is-footer" style={{ backgroundColor: "white"}}>
      <div className="container-large">
        {/* Newsletter Signup Section */}
        <div className="margin-bottom-64">
          <div className="wrap_flex is-align-top">
            <div className="max-width-440">
              <div className="margin-bottom-8">
                <p className="heading-style-h2">Join our newsletter</p>
              </div>
              <p className="text-size-medium">
                Join our newsletter to stay up to date on academy news, events, camps, and special deals.
              </p>
            </div>

            {/* Email Subscription Form */}
            <div className="email-form_wrap w-form">
              <form
                id="wf-form-Subscribe-Form"
                name="wf-form-Subscribe-Form"
                data-name="Subscribe Form"
                method="get"
                className="email_form"
                aria-label="Subscribe Form"
              >
                <div className="form-field-wrapper">
                  <input
                    className="form-input w-input"
                    maxLength={256}
                    name="email"
                    data-name="email"
                    placeholder="Enter your email"
                    type="email"
                    id="email-4"
                    required
                  />
                </div>
                <input
                  type="submit"
                  data-wait="Please wait..."
                  className="button w-button"
                  value="Subscribe"
                />
              </form>

              {/* Form Success Message */}
              <div
                className="form-success w-form-done"
                tabIndex={-1}
                role="region"
                aria-label="Subscribe Form success"
              >
                <div>Thank you! Your submission has been received!</div>
              </div>

              {/* Form Error Message */}
              <div
                className="form-error w-form-fail"
                tabIndex={-1}
                role="region"
                aria-label="Subscribe Form failure"
              >
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Social Links */}
        <div className="footer_copyright">
          <div className="opacity-60">
            <div className="footer_copyright-inner">
              <p className="text-size-regular">© 2024 Byte / {"{ Brew }"}. All rights reserved.</p>

              {/* Footer Bottom Links */}
              <div className="footer_bottom-links-container">
                {bottomLinks.map((link, index) => (
                  <a key={index} href={link.href} className="text-size-small w-inline-block">
                    <div className="text-size-regular">{link.text}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <ul role="list" className="social-links">
            {socialLinks.map((link, index) => (
              <li key={index} className="social-links_item">
                <a href={link.href} className="social-link w-inline-block">
                  <Image src={link.image} alt={link.alt} width={24} height={24} className="icon-24" />
                  <div
                    className="link-box"
                    style={{
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(0.5, 0.5, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                      opacity: 0,
                    }}
                  ></div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

// Footer bottom links
const bottomLinks = [
  { href: "/template/license", text: "License" },
  { href: "/template/styleguide", text: "Styleguide" },
  { href: "/template/changelog", text: "Changelog" },
];

// Social media links
const socialLinks = [
  {
    href: "#",
    image:
      "https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/670579c6d6302f0c7476d8aa_x-icon.svg",
    alt: "Twitter",
  },
  {
    href: "#",
    image:
      "https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/670579c6c9f6ee644ca816ad_yt-icon.svg",
    alt: "YouTube",
  },
  {
    href: "#",
    image:
      "https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/670579c659a21d0666b60f80_fb-icon.svg",
    alt: "Facebook",
  },
  {
    href: "#",
    image:
      "https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/670579c6dcbfeadee27d5e70_ig-icon.svg",
    alt: "Instagram",
  },
];

export default Footer;
