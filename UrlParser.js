/**
 * Semih ERDOGAN <semih.erdogan@vidizayn.com>
 */
var UrlParser = (function () {
    function UrlParser() {
        this.wl = window.location;
    }
    UrlParser.prototype.segments = function () {
        var _split = this.wl.pathname.split('/').filter(function (i) {
            return i !== '';
        });
        _split.unshift('/');
        return _split;
    };
    UrlParser.prototype.parameters = function () {
        var query = this.wl.search.substr(1);
        if (query === '')
            return;
        var result = {};
        query.split('&').forEach(function (i) {
            var item = i.split('=');
            result[item[0]] = decodeURIComponent(item[1]);
        });
        return result;
    };
    UrlParser.prototype.segment = function (i) {
        try {
            return this.segments()[i];
        }
        catch (e) {
            return null;
        }
    };
    UrlParser.prototype.parameter = function (p) {
        try {
            return this.parameters()[p];
        }
        catch (e) {
            return null;
        }
    };
    UrlParser.prototype.uriString = function () {
        return this.segments().join('/').substring(1);
    };
    return UrlParser;
}());
