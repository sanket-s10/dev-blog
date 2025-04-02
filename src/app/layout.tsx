import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html data-wf-domain="elysian-tennis.webflow.io" data-wf-page="67041c2a6a806901e0c7ed22" data-wf-site="67041c2a6a806901e0c7ed1b" data-wf-status="1">
    <head>
        <meta charSet="utf-8"/>
        <title>Dev Blog</title>
        <meta content="Dev Blog" property="og:title"/>
        <meta content="https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/6709bb5398ae78d8a9fac41f_elysian-tennis-webflow-og-image.jpg" property="og:image"/>
        <meta content="Dev Blog" property="twitter:title"/>
        <meta content="https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/6709bb5398ae78d8a9fac41f_elysian-tennis-webflow-og-image.jpg" property="twitter:image"/>
        <meta content="width=device-width, initial-scale=1" name="viewport"/>
        <meta content="Webflow" name="generator"/>
        <link href="https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/css/elysian-tennis.webflow.1919b59b5.css" rel="stylesheet" type="text/css"/>
        <link href="https://cdn.prod.website-files.com/img/favicon.ico" rel="shortcut icon" type="image/x-icon"/>
        <link href="https://cdn.prod.website-files.com/img/webclip.png" rel="apple-touch-icon"/>
    </head>
    <body>
        {children}
      </body>
    </html>
  );
}
