"use client";

import Script from "next/script";

type GtmProps = {
  /** ID do container Web: ex. GTM-XXXXXXX */
  gtmId?: string;
  /** Nome do dataLayer (opcional). Padrão: "dataLayer" */
  dataLayerName?: string;
  /** Dados iniciais opcionais a empurrar no dataLayer antes do GTM carregar */
  initialDataLayer?: Record<string, unknown>;
};

export default function Gtm({
  gtmId = process.env.NEXT_PUBLIC_GTM_WEB_ID || "GTM-5XQCR5RZ",
  dataLayerName = "dataLayer",
  initialDataLayer = {},
}: GtmProps) {
  if (!gtmId) return null;

  // se o dataLayer não for "dataLayer", precisamos usar o &l=customName na URL
  const dlParam = dataLayerName !== "dataLayer" ? `&l=${dataLayerName}` : "";

  return (
    <>
      {/* Inicializa o dataLayer e dispara o evento gtm.js o mais cedo possível */}
      <Script id="gtm-init" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js', ...(${JSON.stringify(
              initialDataLayer
            )})});
            var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','${dataLayerName}','${gtmId}');
        `}
      </Script>

      {/* Noscript fallback (recomendado pelo Google) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}${dlParam}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}
