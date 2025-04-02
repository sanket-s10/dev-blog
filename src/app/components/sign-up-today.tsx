"use client"
import { FormEvent, useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    setMessage("Thank you! Your submission has been received!");
  };

  return (
    <section className="section background-color-black">
      <div className="container-large">
        <div
          data-w-id="f34fdec2-7330-0cd6-5ea1-badf54d8c9e2"
          className="wrap_flex is-align-top"
        >
          <div className="max-w-lg">
            <h2 className="heading-style-h2">
              <span
                className="is-word is-1"
              >
                Hi👋 from Byte / {"{ Brew }"}
              </span>{" "}
            </h2>
            <h4 className="heading-style-h4 mt-4">
              <span
                className="is-word is-2"
              >
                Where code meets community.
              </span>{" "}
            </h4>
            <br/>
            <p className="leading-5 pt-3">
              <span
                className="is-word is-3"
              >
                Join a global network of developers sharing ideas, tutorials, and the occasional meme.
              </span>{" "}
              <span
                className="is-word is-4"
              >
                🚀 Built by devs, for devs.
              </span>
            </p>
          </div>
          <div className="max-width-440 is-full-responsive">
            <div className="margin-bottom-8">
              <div className="text-color-darkgrey">
                <p

                  className="text-size-medium"
                >
                  Stay up to date
                </p>
              </div>
            </div>
            <div className="email-form_wrap w-form">
              <form
                id="wf-form-Subscribe-Form"
                name="wf-form-Subscribe-Form"
                data-name="Subscribe Form"
                method="get"
                className="email_form"
                onSubmit={handleSubmit}
                aria-label="Subscribe Form"
              >
                <div className="form-field-wrapper">
                  <input
                    className="form-input is-green w-input"
                    maxLength={256}
                    name="email"
                    data-name="email"

                    placeholder="Enter your email"
                    type="email"
                    id="email-2"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <input
                  type="submit"
                  data-wait="Please wait..."

                  className="button w-button"
                  value="Subscribe"
                />
              </form>
              {message && (
                <div className="form-success w-form-done" role="region">
                  <div>{message}</div>
                </div>
              )}
              <div className="form-error w-form-fail" role="region">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
