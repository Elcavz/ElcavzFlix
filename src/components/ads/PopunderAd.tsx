'use client'; // Required since we're using useEffect

import Script from 'next/script'
import { useEffect } from 'react';

export default function PopunderAd() {
  useEffect(() => {
    // This ensures the script only runs on client side
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.dataset.cfasync = 'false';
      script.innerHTML = `/*<![CDATA[/* */
        (function(){var p=window,l="e28f83e42cd3e7dae61a460805d43253",s=[["siteId",960*379+979+302+4814508],["minBid",0],["popundersPerIP","0"],["delayBetween",0],["default","https://moviesx.me/EiEoU88J/51176010"],["defaultPerDay",0],["topmostLayer","auto"]],q=["d3d3LnZpc2FyaW9tZWRpYS5jb20vcmpzLmNvb2tpZS5taW4uY3Nz","ZDEzazdwcmF4MXlpMDQuY2xvdWRmcm9udC5uZXQvV1Evb2Nocm9tYS5taW4uanM="],n=-1,a,b,j=function(){clearTimeout(b);n++;if(q[n]&&!(1773792312000<(new Date).getTime()&&1<n)){a=p.document.createElement("script");a.type="text/javascript";a.async=!0;var w=p.document.getElementsByTagName("script")[0];a.src="https://"+atob(q[n]);a.crossOrigin="anonymous";a.onerror=j;a.onload=function(){clearTimeout(b);p[l.slice(0,16)+l.slice(0,16)]||j()};b=setTimeout(j,5E3);w.parentNode.insertBefore(a,w)}};if(!p[l]){try{Object.freeze(p[l]=s)}catch(e){}j()}})();
        /*]]>/* */`;
      document.body.appendChild(script);
      
      return () => {
        // Cleanup on component unmount
        document.body.removeChild(script);
      };
    }
  }, []);

  return null; // This component doesn't render anything
}