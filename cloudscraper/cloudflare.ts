import htmlparser2 from "htmlparser2";
import * as re from "regexp";
import {
  CloudflareCode1020,
  CloudflareIUAMError,
  CloudflareSolveError,
  CloudflareChallengeError,
  CloudflareCaptchaError,
  CloudflareCaptchaProvider,
} from "./expetions";

class Cloudflare {
  constructor(cloudscraper) {}

  unescape = (htmlText: any) => {
    return new htmlparser2.Parser(htmlText);
  };

  isIUAMChallenge(resp: any): boolean {
    try {
      return (
        resp.headers.get("Server", "").startsWith("cloudflare") &&
        [429, 503].includes(resp.statusCode) &&
        /\/cdn-cgi\/images\/trace\/jsch\//.test(resp.text) &&
        /<form .*?="challenge-form" action="\/\S+__cf_chl_f_tk=/.test(resp.text)
      );
    } catch (error) {
      if (error instanceof TypeError) {
        return false;
      }
      throw error;
    }
  }

  isNewIUAMChallenge(resp: any): boolean {
    try {
      return (
        this.isIUAMChallenge(resp) &&
        /cpo.src\s*=\s*['"]\/cdn-cgi\/challenge-platform\/\S+orchestrate\/jsch\/v1/.test(
          resp.text
        )
      );
    } catch (error) {
      if (error instanceof TypeError) {
        return false;
      }
      throw error;
    }
  }

  isCaptchaChallenge(resp: any): boolean {
    try {
      return (
        resp.headers.get("Server", "").startsWith("cloudflare") &&
        resp.statusCode === 403 &&
        /\/cdn-cgi\/images\/trace\/(captcha|managed)\//.test(resp.text) &&
        /<form .*?="challenge-form" action="\/\S+__cf_chl_f_tk=/.test(resp.text)
      );
    } catch (error) {
      // AttributeError
    }

    return false;
  }
}

export default Cloudflare;
