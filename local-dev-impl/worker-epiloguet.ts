var c = Object.defineProperty;
var i = (r, o) => c(r, "name", { value: o, configurable: !0 });
var e = class {
    static {
      i(this, "ConsoleAdapter");
    }
    debug(...o) {
      o.forEach((n) => {
        console.debug(JSON.stringify(n));
      });
    }
    info(...o) {
      o.forEach((n) => {
        console.info(JSON.stringify(n));
      });
    }
    log(...o) {
      o.forEach((n) => {
        console.log(JSON.stringify(n));
      });
    }
    warn(...o) {
      o.forEach((n) => {
        console.warn(JSON.stringify(n));
      });
    }
    error(...o) {
      o.forEach((n) => {
        console.error(JSON.stringify(n));
      });
    }
  },
  s = new e();
var g = "system-logger";
globalThis.__ZUPLO_SERVICE_PROVIDER &&
  globalThis.__ZUPLO_SERVICE_PROVIDER.addService(g, {
    logger: s,
    captureUserLogs: !0,
  });
export { g as SYSTEM_LOGGER };
