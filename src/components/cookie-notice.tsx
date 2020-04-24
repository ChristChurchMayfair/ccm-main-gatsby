import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const CookieNotice = () => {
    const data = useStaticQuery<GatsbyTypes.CookieNoticeQuery>(graphql`
        query CookieNotice {
            site {
                siteMetadata {
                    cookie_notice
                }
            }
        }
    `)
    return (
        <div id="cookie-notice" className="cookie-notice">
            <div className="notice">
                {data?.site?.siteMetadata?.cookie_notice}
            </div>
            <a id="decline-cookie-button" className="button decline" href="#">
                Decline
            </a>
            <a id="accept-cookie-button" className="button accept" href="#">
                Accept
            </a>
        </div>
    )
}

export default CookieNotice

// function hideCookieNotice() {
//     var cookie_notice = document.getElementById("cookie-notice");

//     setTimeout(function() {
//         cookie_notice.style.bottom = "-400px";
//     },200);

//     setTimeout(function() {
//         cookie_notice.style.display = "none";
//     },1000);
// }

// function acceptCookies() {
//     console.log("Accepted cookies!");
//     hideCookieNotice();
//     Cookies.set('ccm_cookie_consent', 'accepted', { expires: 365 });
// }

// function declineCookies() {
//     console.log("Declined cookies!");
//     hideCookieNotice();
//     Cookies.set('ccm_cookie_consent', 'declined', { expires: 365 });
// }

// function disableGATracking() {
//     window['ga-disable-UA-39016872-2'] = true;
// }

// document.addEventListener("DOMContentLoaded", function() {
//     var cookie_consent = Cookies.get('ccm_cookie_consent')

//     var accept_cookie_button = document.getElementById("accept-cookie-button");
//     var decline_cookie_button = document.getElementById("decline-cookie-button");

//     accept_cookie_button.addEventListener("click",acceptCookies);
//     decline_cookie_button.addEventListener("click",declineCookies);

//     if (cookie_consent == null) {
//         console.log("User has not seen or consented to cookies");

//         var cookie_notice = document.getElementById("cookie-notice");

//         setTimeout(function() {
//             cookie_notice.style.bottom = "0px";
//         },2000);
//     } else if (cookie_consent == "accepted") {
//         disableGATracking();
//     }
// });
