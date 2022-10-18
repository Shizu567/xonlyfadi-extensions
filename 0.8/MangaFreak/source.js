(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Sources = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeColor = void 0;
var BadgeColor;
(function (BadgeColor) {
    BadgeColor["BLUE"] = "default";
    BadgeColor["GREEN"] = "success";
    BadgeColor["GREY"] = "info";
    BadgeColor["YELLOW"] = "warning";
    BadgeColor["RED"] = "danger";
})(BadgeColor = exports.BadgeColor || (exports.BadgeColor = {}));

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSectionType = void 0;
var HomeSectionType;
(function (HomeSectionType) {
    HomeSectionType["singleRowNormal"] = "singleRowNormal";
    HomeSectionType["singleRowLarge"] = "singleRowLarge";
    HomeSectionType["doubleRow"] = "doubleRow";
    HomeSectionType["featured"] = "featured";
})(HomeSectionType = exports.HomeSectionType || (exports.HomeSectionType = {}));

},{}],4:[function(require,module,exports){
"use strict";
/**
 * Request objects hold information for a particular source (see sources for example)
 * This allows us to to use a generic api to make the calls against any source
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlEncodeObject = exports.convertTime = exports.Source = void 0;
class Source {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
    /**
     * @deprecated use {@link Source.getSearchResults getSearchResults} instead
     */
    searchRequest(query, metadata) {
        return this.getSearchResults(query, metadata);
    }
    /**
     * @deprecated use {@link Source.getSearchTags} instead
     */
    async getTags() {
        // @ts-ignore
        return this.getSearchTags?.();
    }
}
exports.Source = Source;
// Many sites use '[x] time ago' - Figured it would be good to handle these cases in general
function convertTime(timeAgo) {
    let time;
    let trimmed = Number((/\d*/.exec(timeAgo) ?? [])[0]);
    trimmed = (trimmed == 0 && timeAgo.includes('a')) ? 1 : trimmed;
    if (timeAgo.includes('minutes')) {
        time = new Date(Date.now() - trimmed * 60000);
    }
    else if (timeAgo.includes('hours')) {
        time = new Date(Date.now() - trimmed * 3600000);
    }
    else if (timeAgo.includes('days')) {
        time = new Date(Date.now() - trimmed * 86400000);
    }
    else if (timeAgo.includes('year') || timeAgo.includes('years')) {
        time = new Date(Date.now() - trimmed * 31556952000);
    }
    else {
        time = new Date(Date.now());
    }
    return time;
}
exports.convertTime = convertTime;
/**
 * When a function requires a POST body, it always should be defined as a JsonObject
 * and then passed through this function to ensure that it's encoded properly.
 * @param obj
 */
function urlEncodeObject(obj) {
    let ret = {};
    for (const entry of Object.entries(obj)) {
        ret[encodeURIComponent(entry[0])] = encodeURIComponent(entry[1]);
    }
    return ret;
}
exports.urlEncodeObject = urlEncodeObject;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRating = exports.SourceIntents = void 0;
var SourceIntents;
(function (SourceIntents) {
    SourceIntents[SourceIntents["MANGA_CHAPTERS"] = 1] = "MANGA_CHAPTERS";
    SourceIntents[SourceIntents["MANGA_TRACKING"] = 2] = "MANGA_TRACKING";
    SourceIntents[SourceIntents["HOMEPAGE_SECTIONS"] = 4] = "HOMEPAGE_SECTIONS";
    SourceIntents[SourceIntents["COLLECTION_MANAGEMENT"] = 8] = "COLLECTION_MANAGEMENT";
    SourceIntents[SourceIntents["CLOUDFLARE_BYPASS_REQUIRED"] = 16] = "CLOUDFLARE_BYPASS_REQUIRED";
    SourceIntents[SourceIntents["SETTINGS_UI"] = 32] = "SETTINGS_UI";
})(SourceIntents = exports.SourceIntents || (exports.SourceIntents = {}));
/**
 * A content rating to be attributed to each source.
 */
var ContentRating;
(function (ContentRating) {
    ContentRating["EVERYONE"] = "EVERYONE";
    ContentRating["MATURE"] = "MATURE";
    ContentRating["ADULT"] = "ADULT";
})(ContentRating = exports.ContentRating || (exports.ContentRating = {}));

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracker = void 0;
class Tracker {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
}
exports.Tracker = Tracker;

},{}],7:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Source"), exports);
__exportStar(require("./Tracker"), exports);
__exportStar(require("./ByteArray"), exports);
__exportStar(require("./Badge"), exports);
__exportStar(require("./interfaces"), exports);
__exportStar(require("./SourceInfo"), exports);
__exportStar(require("./HomeSectionType"), exports);

},{"./Badge":1,"./ByteArray":2,"./HomeSectionType":3,"./Source":4,"./SourceInfo":5,"./Tracker":6,"./interfaces":12}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],12:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./ChapterProviding"), exports);
__exportStar(require("./Searchable"), exports);
__exportStar(require("./Requestable"), exports);
__exportStar(require("./MangaProviding"), exports);

},{"./ChapterProviding":8,"./MangaProviding":9,"./Requestable":10,"./Searchable":11}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],44:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],45:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],46:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],47:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],50:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],51:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],52:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],53:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],54:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],55:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],56:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],57:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./DynamicUI/Exports/DUIBinding"), exports);
__exportStar(require("./DynamicUI/Exports/DUIForm"), exports);
__exportStar(require("./DynamicUI/Exports/DUIFormRow"), exports);
__exportStar(require("./DynamicUI/Exports/DUISection"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIButton"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIHeader"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIInputField"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUILabel"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUILink"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIMultilineLabel"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUINavigationButton"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIOAuthButton"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUISecureInputField"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUISelect"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIStepper"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUISwitch"), exports);
__exportStar(require("./Exports/ChapterDetails"), exports);
__exportStar(require("./Exports/Chapter"), exports);
__exportStar(require("./Exports/Cookie"), exports);
__exportStar(require("./Exports/HomeSection"), exports);
__exportStar(require("./Exports/IconText"), exports);
__exportStar(require("./Exports/MangaInfo"), exports);
__exportStar(require("./Exports/PartialSourceManga"), exports);
__exportStar(require("./Exports/MangaUpdates"), exports);
__exportStar(require("./Exports/PBCanvas"), exports);
__exportStar(require("./Exports/PBImage"), exports);
__exportStar(require("./Exports/PagedResults"), exports);
__exportStar(require("./Exports/RawData"), exports);
__exportStar(require("./Exports/Request"), exports);
__exportStar(require("./Exports/SourceInterceptor"), exports);
__exportStar(require("./Exports/RequestManager"), exports);
__exportStar(require("./Exports/Response"), exports);
__exportStar(require("./Exports/SearchField"), exports);
__exportStar(require("./Exports/SearchRequest"), exports);
__exportStar(require("./Exports/SourceCookieStore"), exports);
__exportStar(require("./Exports/SourceManga"), exports);
__exportStar(require("./Exports/SecureStateManager"), exports);
__exportStar(require("./Exports/SourceStateManager"), exports);
__exportStar(require("./Exports/Tag"), exports);
__exportStar(require("./Exports/TagSection"), exports);
__exportStar(require("./Exports/TrackedMangaChapterReadAction"), exports);
__exportStar(require("./Exports/TrackedManga"), exports);
__exportStar(require("./Exports/TrackerActionQueue"), exports);

},{"./DynamicUI/Exports/DUIBinding":14,"./DynamicUI/Exports/DUIForm":15,"./DynamicUI/Exports/DUIFormRow":16,"./DynamicUI/Exports/DUISection":17,"./DynamicUI/Rows/Exports/DUIButton":18,"./DynamicUI/Rows/Exports/DUIHeader":19,"./DynamicUI/Rows/Exports/DUIInputField":20,"./DynamicUI/Rows/Exports/DUILabel":21,"./DynamicUI/Rows/Exports/DUILink":22,"./DynamicUI/Rows/Exports/DUIMultilineLabel":23,"./DynamicUI/Rows/Exports/DUINavigationButton":24,"./DynamicUI/Rows/Exports/DUIOAuthButton":25,"./DynamicUI/Rows/Exports/DUISecureInputField":26,"./DynamicUI/Rows/Exports/DUISelect":27,"./DynamicUI/Rows/Exports/DUIStepper":28,"./DynamicUI/Rows/Exports/DUISwitch":29,"./Exports/Chapter":30,"./Exports/ChapterDetails":31,"./Exports/Cookie":32,"./Exports/HomeSection":33,"./Exports/IconText":34,"./Exports/MangaInfo":35,"./Exports/MangaUpdates":36,"./Exports/PBCanvas":37,"./Exports/PBImage":38,"./Exports/PagedResults":39,"./Exports/PartialSourceManga":40,"./Exports/RawData":41,"./Exports/Request":42,"./Exports/RequestManager":43,"./Exports/Response":44,"./Exports/SearchField":45,"./Exports/SearchRequest":46,"./Exports/SecureStateManager":47,"./Exports/SourceCookieStore":48,"./Exports/SourceInterceptor":49,"./Exports/SourceManga":50,"./Exports/SourceStateManager":51,"./Exports/Tag":52,"./Exports/TagSection":53,"./Exports/TrackedManga":54,"./Exports/TrackedMangaChapterReadAction":55,"./Exports/TrackerActionQueue":56}],58:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./generated/_exports"), exports);
__exportStar(require("./base/index"), exports);
__exportStar(require("./compat/DyamicUI"), exports);

},{"./base/index":7,"./compat/DyamicUI":13,"./generated/_exports":57}],59:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MangaFreak = exports.MangaFreakInfo = void 0;
const types_1 = require("@paperback/types");
const MangaFreakParser_1 = require("./MangaFreakParser");
const MangaFreak_Base = 'https://w13.mangafreak.net';
exports.MangaFreakInfo = {
    author: 'xOnlyFadi',
    description: 'Extension that pulls manga from mangafreak.net',
    icon: 'icon.png',
    name: 'MangaFreak',
    version: '1.0.2',
    authorWebsite: 'https://github.com/xOnlyFadi',
    websiteBaseURL: MangaFreak_Base,
    contentRating: types_1.ContentRating.EVERYONE,
    language: 'English',
    sourceTags: [
        {
            text: 'Cloudflare',
            type: types_1.BadgeColor.RED
        }
    ]
};
class MangaFreak extends types_1.Source {
    constructor() {
        super(...arguments);
        this.parser = new MangaFreakParser_1.Parser();
        this.requestManager = App.createRequestManager({
            requestsPerSecond: 3,
            requestTimeout: 15000,
            interceptor: {
                interceptRequest: async (request) => {
                    request.headers = {
                        ...(request.headers ?? {}),
                        ...{
                            'user-agent': await this.requestManager.getDefaultUserAgent(),
                            'referer': `${MangaFreak_Base}/`
                        }
                    };
                    return request;
                },
                interceptResponse: async (response) => {
                    return response;
                }
            }
        });
    }
    getMangaShareUrl(mangaId) {
        return `${MangaFreak_Base}/Manga/${mangaId}`;
    }
    async getCloudflareBypassRequestAsync() {
        return App.createRequest({
            url: `${MangaFreak_Base}/Genre/All/1`,
            method: 'GET',
            headers: {
                'user-agent': await this.requestManager.getDefaultUserAgent(),
                'referer': `${MangaFreak_Base}/`
            }
        });
    }
    async getHomePageSections(sectionCallback) {
        let options = App.createRequest({
            url: `${MangaFreak_Base}/Latest_Releases/1`,
            method: 'GET'
        });
        let response = await this.requestManager.schedule(options, 1);
        const $ = this.cheerio.load(response.data);
        options = App.createRequest({
            url: `${MangaFreak_Base}/Genre/All/1`,
            method: 'GET'
        });
        response = await this.requestManager.schedule(options, 1);
        const $$ = this.cheerio.load(response.data);
        this.CloudFlareError(response.status);
        return this.parser.parseHomeSections($, $$, sectionCallback, this);
    }
    async getViewMoreItems(homepageSectionId, metadata) {
        let page = metadata?.page ?? 1;
        if (page == -1)
            return App.createPagedResults({ results: [], metadata: { page: -1 } });
        let param = '';
        let isPop = false;
        switch (homepageSectionId) {
            case '1':
                param = `/Latest_Releases/${page}`;
                isPop = false;
                break;
            case '2':
                param = `/Genre/All/${page}`;
                isPop = true;
                break;
            default:
                throw new Error(`Invalid homeSectionId | ${homepageSectionId}`);
        }
        const request = App.createRequest({
            url: `${MangaFreak_Base}${param}`,
            method: 'GET',
        });
        const response = await this.requestManager.schedule(request, 1);
        const $ = this.cheerio.load(response.data);
        const manga = this.parser.ViewMoreParse($, this, isPop);
        page++;
        if (!this.parser.NextPage($))
            page = -1;
        return App.createPagedResults({
            results: manga,
            metadata: { page: page }
        });
    }
    async getSearchTags() {
        const options = App.createRequest({
            url: `${MangaFreak_Base}/Search`,
            method: 'GET'
        });
        const response = await this.requestManager.schedule(options, 1);
        this.CloudFlareError(response.status);
        const $ = this.cheerio.load(response.data);
        return [App.createTagSection({
                id: '1',
                label: 'Genres',
                tags: this.parser.parseTags($)
            })];
    }
    async getMangaDetails(mangaId) {
        const options = App.createRequest({
            url: `${MangaFreak_Base}/Manga/${mangaId}`,
            method: 'GET',
        });
        const response = await this.requestManager.schedule(options, 1);
        this.CloudFlareError(response.status);
        const $ = this.cheerio.load(response.data);
        return this.parser.parseMangaDetails($, mangaId, this);
    }
    async getChapters(mangaId) {
        const options = App.createRequest({
            url: `${MangaFreak_Base}/Manga/${mangaId}`,
            method: 'GET'
        });
        const response = await this.requestManager.schedule(options, 1);
        this.CloudFlareError(response.status);
        const $ = this.cheerio.load(response.data);
        return this.parser.parseChapters($, mangaId, this);
    }
    async getChapterDetails(mangaId, chapterId) {
        const options = App.createRequest({
            url: `${MangaFreak_Base}${chapterId}`,
            method: 'GET'
        });
        const response = await this.requestManager.schedule(options, 1);
        this.CloudFlareError(response.status);
        const $ = this.cheerio.load(response.data);
        return this.parser.parseChapterDetails($, mangaId, chapterId);
    }
    async getSearchResults(query, metadata) {
        let page = metadata?.page ?? 1;
        if (page == -1)
            return App.createPagedResults({ results: [], metadata: { page: -1 } });
        const request = this.constructSearchRequest(page, query);
        const data = await this.requestManager.schedule(request, 2);
        this.CloudFlareError(data.status);
        const $ = this.cheerio.load(data.data);
        const manga = this.parser.parseSearchResults($, this);
        page++;
        if (!this.parser.NextPage($))
            page = -1;
        return App.createPagedResults({
            results: manga,
            metadata: { page: page },
        });
    }
    constructSearchRequest(_page, query) {
        if (!this.isEmpty(query?.title)) {
            if (query.includedTags?.length === 0) {
                return App.createRequest({
                    url: `${MangaFreak_Base}/Search/${query?.title?.replace(/%20/g, '+').replace(/ /g, '+') ?? ''}`,
                    method: 'GET',
                });
            }
            else {
                let url = MangaFreak_Base;
                if (!this.isEmpty(query?.title)) {
                    url += `/Search/${query?.title?.replace(/%20/g, '+').replace(/ /g, '+') ?? ''}`;
                }
                url += '/Genre/';
                const getGenresOrderedKeyList = this.getGenresKeyList();
                const selectedGenreKey = query?.includedTags?.map((x) => x.id).toString();
                const selectedGenreKeys = selectedGenreKey?.split(',');
                for (let genreKeyIndex = 0; genreKeyIndex < getGenresOrderedKeyList.length; genreKeyIndex++) {
                    if (selectedGenreKeys?.includes(getGenresOrderedKeyList[genreKeyIndex] ?? '')) {
                        url += '1';
                    }
                    else {
                        url += '0';
                    }
                }
                url += '/Status/0/Type/0';
                return App.createRequest({
                    url: url,
                    method: 'GET',
                });
            }
        }
        else {
            throw new Error('please search with a title otherwise the search with genres will not work');
        }
    }
    parseStatus(str) {
        let status = 'ONGOING';
        switch (str.toLowerCase()) {
            case 'ongoing':
            case 'on-going':
                status = 'ONGOING';
                break;
            case 'completed':
                status = 'COMPLETED';
                break;
        }
        return status;
    }
    getGenresKeyList() {
        return [
            'Act',
            'Adult',
            'Adventure',
            'Animated',
            'Comedy',
            'Demons',
            'Drama',
            'Ecchi',
            'Fantasy',
            'Gender%20Bender',
            'Harem',
            'Ancients',
            'Horror',
            'Josei',
            'Magic',
            'Manhwa',
            'Martial%20Arts',
            'Mature',
            'Mecha',
            'Military',
            'Mystery',
            'One%20Shot',
            'Psychological',
            'Romance',
            'School%20Life',
            'Sci%20Fi',
            'Sci%20Fi%20Shounen',
            'Sci%20Fim',
            'Seinen',
            'Shotacon',
            'Shoujo',
            'Shoujo%20Ai',
            'Shoujoai',
            'Shounen',
            'Shounen%20Ai',
            'Shounenai',
            'Slice%20Of%20Life',
            'Smut',
            'Sports',
            'Super%20Power',
            'Superhero',
            'Supernatural',
            'Tragedy',
            'Vampire',
            'Yaoi',
            'Yuri'
        ];
    }
    CloudFlareError(status) {
        if (status == 503) {
            throw new Error('CLOUDFLARE BYPASS ERROR:\nPlease go to Settings > Sources > MangaFreak and press Cloudflare Bypass or press the Cloud image on the right');
        }
    }
    isEmpty(str) {
        return (!str || 0 === str.length);
    }
}
exports.MangaFreak = MangaFreak;

},{"./MangaFreakParser":60,"@paperback/types":58}],60:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
class Parser {
    constructor() {
        this.chapterTitleRegex = /Chapter ([\d.]+)/i;
    }
    decodeHTMLEntity(str) {
        return str.replace(/&#(\d+)/g, (_match, dec) => {
            return String.fromCharCode(dec);
        });
    }
    async parseHomeSections($, $$, sectionCallback, _source) {
        const section1 = App.createHomeSection({ id: '1', title: 'Latest', containsMoreItems: true, type: 'singleRowNormal' });
        const section2 = App.createHomeSection({ id: '2', title: 'Popular', containsMoreItems: true, type: 'singleRowNormal' });
        const popular = [];
        const latest = [];
        const arrLatest = $('div.latest_releases_item').toArray();
        const arrPopular = $$('div.ranking_item').toArray();
        for (const obj of arrLatest) {
            const info = $('a', obj);
            const id = info.attr('href')?.replace(/\/manga\//gi, '') ?? '';
            const title = info.text() ?? '';
            const image = this.getImageSrc($('img', obj)).replace('mini', 'manga').substringBeforeLast('/') + '.jpg' ?? '';
            latest.push(App.createPartialSourceManga({
                mangaId: id,
                image,
                title: this.decodeHTMLEntity(title),
            }));
        }
        section1.items = latest;
        sectionCallback(section1);
        for (const obj of arrPopular) {
            const info = $$('a', obj);
            const id = info.attr('href')?.replace(/\/manga\//gi, '') ?? '';
            const title = info.text() ?? '';
            const image = this.getImageSrc($$('img', obj)) ?? '';
            popular.push(App.createPartialSourceManga({
                mangaId: id,
                image,
                title: this.decodeHTMLEntity(title),
            }));
        }
        section2.items = popular;
        sectionCallback(section2);
    }
    parseChapterDetails($, mangaId, chapterId) {
        const pages = [];
        for (const obj of $('img#gohere').toArray()) {
            const page = this.getImageSrc($(obj)) ?? '';
            if (!page) {
                throw new Error(`Could not parse page for ${chapterId}`);
            }
            pages.push(page);
        }
        return App.createChapterDetails({
            id: chapterId,
            mangaId: mangaId,
            pages: pages,
        });
    }
    parseChapters($, mangaId, _source) {
        const chapters = [];
        let lastNumber = null;
        const arrChapters = $('div.manga_series_list tr:has(a)').toArray();
        for (const obj of arrChapters) {
            const url = $('a', obj).attr('href') ?? '';
            const name = $('td', obj).eq(0).text().trim() ?? 'No Chpater Name';
            const release_date = $('td', obj).eq(1).text();
            const match = name.match(this.chapterTitleRegex);
            let chapNum;
            if (match && !isNaN(Number(match[1]))) {
                chapNum = Number(match[1]);
            }
            else {
                if (lastNumber === null) {
                    chapNum = 0;
                }
                else {
                    chapNum = Number((lastNumber + 0.001).toFixed(3));
                }
            }
            lastNumber = chapNum;
            chapters.push(App.createChapter({
                id: encodeURI(url),
                name: this.encodeText(name),
                chapNum: chapNum ?? 0,
                time: new Date(release_date),
                langCode: 'English'
            }));
        }
        return chapters;
    }
    parseMangaDetails($, mangaId, source) {
        const title = $('div.manga_series_data h5').first().text().trim() ?? '';
        const image = this.getImageSrc($('div.manga_series_image img')) ?? 'https://paperback.moe/icons/logo-alt.svg';
        let desc = $('div.manga_series_description p').text().trim() ?? '';
        if (desc == '')
            desc = 'No Decscription provided by the source (MangaFreak)';
        const author = $('div.manga_series_data > div').eq(2).text().trim() ?? '';
        const artist = $('div.manga_series_data > div').eq(3).text().trim() ?? '';
        const status = $('div.manga_series_data > div').eq(1).text().trim() ?? '';
        const arrayTags = [];
        const genres = $('div.series_sub_genre_list a').toArray();
        for (const obj of genres) {
            arrayTags.push({
                id: $(obj)?.attr('href') ?? '',
                label: $(obj).text() ?? ''
            });
        }
        const tagSections = [App.createTagSection({ id: '0', label: 'genres', tags: arrayTags.map((x) => App.createTag(x)) })];
        return App.createSourceManga({
            id: mangaId,
            mangaInfo: App.createMangaInfo({
                titles: [this.decodeHTMLEntity(title)],
                image,
                status: source.parseStatus(status),
                author: this.decodeHTMLEntity(author),
                artist: this.decodeHTMLEntity(artist),
                tags: tagSections,
                desc,
            })
        });
    }
    parseTags($) {
        const genres = [];
        for (const obj of $('.main .select_genre div[id="genrebox"] div').toArray()) {
            genres.push(App.createTag({
                id: encodeURI($(obj).text().trim()),
                label: $(obj).text().trim()
            }));
        }
        return genres;
    }
    parseSearchResults($, _source) {
        const results = [];
        for (const obj of $('div.manga_search_item , div.mangaka_search_item').toArray()) {
            const info = $('h3 a, h5 a', obj);
            const id = info.attr('href')?.replace(/\/manga\//gi, '') ?? '';
            const title = info.text() ?? '';
            const image = this.getImageSrc($('img', obj)) ?? '';
            results.push(App.createPartialSourceManga({
                mangaId: id,
                image,
                title: this.decodeHTMLEntity(title),
            }));
        }
        return results;
    }
    ViewMoreParse($, _source, isPopular) {
        const results = [];
        if (isPopular) {
            for (const obj of $('div.ranking_item').toArray()) {
                const info = $('a', obj);
                const id = info.attr('href') ?? '';
                const title = info.text() ?? '';
                const image = this.getImageSrc($('img', obj)) ?? '';
                if (id) {
                    results.push(App.createPartialSourceManga({
                        mangaId: id,
                        image,
                        title: this.decodeHTMLEntity(title),
                    }));
                }
            }
        }
        else {
            for (const obj of $('div.latest_releases_item').toArray()) {
                const info = $('a', obj);
                const id = info.attr('href')?.replace(/\/manga\//gi, '') ?? '';
                const title = info.text() ?? '';
                const image = this.getImageSrc($('img', obj))?.replace('mini', 'manga').substringBeforeLast('/') + '.jpg' ?? '';
                results.push(App.createPartialSourceManga({
                    mangaId: id,
                    image,
                    title: this.decodeHTMLEntity(title),
                }));
            }
        }
        return results;
    }
    NextPage($) {
        const nextPage = $('a.next_p');
        if (nextPage.contents().length !== 0) {
            return true;
        }
        else {
            return false;
        }
    }
    encodeText(str) {
        return str.replace(/&#([0-9]{1,4})/gi, (_, numStr) => {
            const num = parseInt(numStr, 10);
            return String.fromCharCode(num);
        });
    }
    getImageSrc(imageObj) {
        let image;
        if (typeof imageObj?.attr('data-src') != 'undefined') {
            image = imageObj?.attr('data-src');
        }
        else if (typeof imageObj?.attr('data-lazy-src') != 'undefined') {
            image = imageObj?.attr('data-lazy-src');
        }
        else if (typeof imageObj?.attr('srcset') != 'undefined') {
            image = imageObj?.attr('srcset')?.split(' ')[0] ?? '';
        }
        else if (typeof imageObj?.attr('data-cfsrc') != 'undefined') {
            image = imageObj?.attr('data-cfsrc')?.split(' ')[0] ?? '';
        }
        else {
            image = imageObj?.attr('src');
        }
        return encodeURI(decodeURI(this.decodeHTMLEntity(image?.trim() ?? '')));
    }
}
exports.Parser = Parser;
String.prototype.substringBeforeLast = function (character) {
    const lastIndexOfCharacter = this.lastIndexOf(character);
    return this.substring(0, lastIndexOfCharacter);
};
String.prototype.substringAfterFirst = function (substring) {
    const startingIndexOfSubstring = this.indexOf(substring);
    const endIndexOfSubstring = startingIndexOfSubstring + substring.length - 1;
    return this.substring(endIndexOfSubstring + 1, this.length);
};

},{}]},{},[59])(59)
});
