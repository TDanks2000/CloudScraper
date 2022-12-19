export class CloudflareException extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class CloudflareLoopProtection extends CloudflareException {
  constructor(message: string) {
    super(message);
  }
}

export class CloudflareCode1020 extends CloudflareException {
  constructor(message: string) {
    super(message);
  }
}

export class CloudflareIUAMError extends CloudflareException {
  constructor(message: string) {
    super(message);
  }
}

export class CloudflareChallengeError extends CloudflareException {
  constructor(message: string) {
    super(message);
  }
}

export class CloudflareSolveError extends CloudflareException {
  constructor(message: string) {
    super(message);
  }
}

export class CloudflareCaptchaError extends CloudflareException {
  constructor(message: string) {
    super(message);
  }
}

export class CloudflareCaptchaProvider extends CloudflareException {
  constructor(message: string) {
    super(message);
  }
}

export class CaptchaException extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class CaptchaServiceUnavailable extends CaptchaException {
  constructor(message: string) {
    super(message);
  }
}

export class CaptchaAPIError extends CaptchaException {
  constructor(message: string) {
    super(message);
  }
}

export class CaptchaAccountError extends CaptchaException {
  constructor(message: string) {
    super(message);
  }
}

export class CaptchaTimeout extends CaptchaException {
  constructor(message: string) {
    super(message);
  }
}

export class CaptchaParameter extends CaptchaException {
  constructor(message: string) {
    super(message);
  }
}

export class CaptchaBadJobID extends CaptchaException {
  constructor(message: string) {
    super(message);
  }
}

export class CaptchaReportError extends CaptchaException {
  constructor(message: string) {
    super(message);
  }
}
