var y=Object.defineProperty;var s=(e,t)=>y(e,"name",{value:t,configurable:!0});function _(e){if(!e)return null;let t={cache:e.cache,credentials:e.credentials,headers:e.headers,integrity:e.integrity,keepalive:e.keepalive,method:e.method,mode:e.mode,redirect:e.redirect,referrer:e.referrer,referrerPolicy:e.referrerPolicy,window:null};return e.method!=="GET"&&e.method!=="HEAD"&&e.body&&(t.body=e.body),new Request(e.url,t)}s(_,"deserialize");async function p(e){return{body:await e.arrayBuffer(),headers:Object.fromEntries(e.headers.entries()),status:e.status,statusText:e.statusText}}s(p,"serialize");import{bundle as K,transpile as V}from"https://deno.land/x/emit@0.24.1/mod.ts";import{format as w}from"https://deno.land/std@0.195.0/datetime/mod.ts";import{load as C}from"https://deno.land/std@0.195.0/dotenv/mod.ts";import{createOAuth2Token as W}from"https://deno.land/x/deno_gcp_admin@0.0.5/auth.ts";import{parse as B}from"https://deno.land/std@0.195.0/flags/mod.ts";import{Server as b}from"https://deno.land/std@0.195.0/http/server.ts";import*as M from"https://deno.land/std@0.195.0/fs/mod.ts";import*as q from"https://deno.land/std@0.195.0/http/http_status.ts";import*as Y from"https://deno.land/std@0.195.0/log/mod.ts";import*as g from"https://deno.land/std@0.195.0/path/mod.ts";import{assert as $,assertAlmostEquals as H,assertArrayIncludes as J,assertEquals as X,assertExists as j,assertFalse as Q,assertInstanceOf as ee,assertIsError as te,assertMatch as re,assertNotEquals as se,assertNotMatch as ae,assertNotStrictEquals as ne,assertObjectMatch as oe,assertRejects as ie,assertStrictEquals as le,assertStringIncludes as _e,assertThrows as pe,equal as de,fail as ue,unimplemented as ce,unreachable as Ee}from"https://deno.land/std@0.195.0/testing/asserts.ts";import{afterAll as fe,afterEach as ge,beforeAll as Oe,beforeEach as Pe,describe as Le,it as ye}from"https://deno.land/std@0.195.0/testing/bdd.ts";var O="worker.js";var u=class{static{s(this,"Settings")}get ZUPLO_GCP_BUNDLE_BUCKET_NAME(){return Deno.env.get("ZUPLO_GCP_BUNDLE_BUCKET_NAME")}get ZUPLO_GCP_BUNDLE_BUCKET_PATH(){return g.join(this.DEPLOYMENT_NAME??"",this.ZUPLO_DEPLOYMENT_SECRET??"",O)}get ZUPLO_ACCOUNT_NAME(){return Deno.env.get("ZUPLO_ACCOUNT_NAME")}get ZUPLO_PROJECT_NAME(){return Deno.env.get("ZUPLO_PROJECT_NAME")}get DEPLOYMENT_NAME(){return Deno.env.get("DEPLOYMENT_NAME")}get ZUPLO_GCP_CLOUD_STORAGE_KEY(){return Deno.env.get("ZUPLO_GCP_CLOUD_STORAGE_KEY")}get ZUPLO_DEPLOYMENT_SECRET(){return Deno.env.get("ZUPLO_DEPLOYMENT_SECRET")}get PROD_SERVER_PORT(){return Deno.env.get("PORT")?parseInt(Deno.env.get("PORT")):3e3}get SHOULD_LOAD_ENV_VARS(){return!!(d.ZUPLO_ACCOUNT_NAME&&d.ZUPLO_PROJECT_NAME&&d.MANAGEMENT_API_URL&&d.ZUPLO_AUTH_API_JWT)}get IS_TEST(){return!!Deno.env.get("DENO_TEST")}get ZUPLO_AUTH_API_JWT(){return Deno.env.get("__ZUPLO_AUTH_API_JWT")}get MANAGEMENT_API_URL(){return Deno.env.get("MANAGEMENT_API_URL")}get IS_VERBOSE_DEBUG(){return!!Deno.env.get("DENO_VERBOSE_DEBUG")}},d=new u;var R=["__ZUPLO_DEPLOYMENT_NAME","__ZUPLO_LOGGING_ID","__ZUPLO_LOG_LEVEL","__ZUPLO_LOG_FORMAT","__ZUPLO_METRICS_API_URL","__ZUPLO_REMOTE_LOG_URL","__ZUPLO_REMOTE_LOG_TOKEN","__ZUPLO_ASSETS_CDN_URL","__ZUPLO_AUTH_API_JWT","__ZUPLO_EXTERNAL_SERVICES","MANAGEMENT_API_URL"],Ue=R.filter(e=>!["__ZUPLO_REMOTE_LOG_URL","__ZUPLO_METRICS_API_URL"].includes(e));var c="OkMessage",E="ErrorMessage",P="WebSocketMessage",o=class e extends Error{static{s(this,"WorkerError")}constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}},i=class{static{s(this,"OkMessage")}_type;_requestId;response;constructor(t,r){this._type=c,this._requestId=r,this.response=t}},a=class{static{s(this,"ErrorMessage")}_type;_requestId;error;constructor(t,r){this._type=E,this._requestId=r,this.error=t}},l=class{static{s(this,"WebSocketMessage")}_type;_requestId;websocket;constructor(t,r){this._type=P,this._requestId=r,this.websocket=t}};delete self.Deno;var m=class extends Event{static{s(this,"FetchEvent")}request;_requestId;constructor(t,r){super("fetch"),this.request=t,this._requestId=r}async respondWith(t){try{let r=await t;if(r.headers.get("Upgrade")==="websocket"){let n=await r.json(),L={url:n&&n.url?n.url:null};self.postMessage(new l(L,this._requestId))}else{let n=await p(r);self.postMessage(new i(n,this._requestId))}}catch(r){self.postMessage(new a(r,this._requestId))}}waitUntil(t){t.catch(r=>{console.error(r)})}passThroughOnException(){self.postMessage(new a(new o("passThroughOnException is not implemented."),this._requestId))}};self.onmessage=async e=>{try{let t=await _(e.data.request);if(t!==null){let r=new m(t,e.data._requestId);self.dispatchEvent(r)}}catch(t){self.postMessage(new a(t,e.data._requestId))}};var f=class e{static{s(this,"ZuploSimpleKVNamespace")}static cache=new Map;get(t,r){return Promise.resolve(e.cache.get(t))}put(t,r,n){return e.cache.set(t,r),Promise.resolve()}delete(t){return e.cache.delete(t),Promise.resolve()}list(t){return Promise.reject("KVNamespace#list is not implemented")}getWithMetadata(t,r){return Promise.reject("KVNamespace#getWithMetadata is not implemented")}};self.ZUPLO_KV=new f;
