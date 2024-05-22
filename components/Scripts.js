import Script from 'next/script'
import { useConfig } from '@/lib/config'

const Scripts = () => {
  const BLOG = useConfig()

  return (
    <>
      {BLOG.analytics && BLOG.analytics.provider === 'ackee' && (
        <Script
          src={BLOG.analytics.ackeeConfig.tracker}
          data-ackee-server={BLOG.analytics.ackeeConfig.dataAckeeServer}
          data-ackee-domain-id={BLOG.analytics.ackeeConfig.domainId}
        />
      )}
      {BLOG.analytics && BLOG.analytics.provider === 'ga' && (
        <>

        <!-- Matomo -->
        <script>
          var _paq = window._paq = window._paq || [];
          /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
          _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
          _paq.push(["setCookieDomain", "*.kuapp.com"]);
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="//218.78.53.236:8000/matomo/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '2']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
          })();
        </script>
        <!-- End Matomo Code -->

        
        </>
      )}
    </>
  )
}

export default Scripts
