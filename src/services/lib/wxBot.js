'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _touch = require('touch');

var _touch2 = _interopRequireDefault(_touch);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

var _toughCookie = require('tough-cookie');

var _toughCookie2 = _interopRequireDefault(_toughCookie);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _toughCookieFilestore = require('tough-cookie-filestore');

var _toughCookieFilestore2 = _interopRequireDefault(_toughCookieFilestore);

var _nodeAxiosCookiejar = require('node-axios-cookiejar');

var _nodeAxiosCookiejar2 = _interopRequireDefault(_nodeAxiosCookiejar);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _conf = require('./conf');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var URLS = (0, _conf.getUrls)({});

var debug = (0, _debug2.default)('wxbot');
var makeDeviceId = function makeDeviceId() {
  return 'e' + Math.random().toFixed(15).toString().subString(2, 17);
};

var cookiePath = _path2.default.join(process.cwd(), '.cookie.json');
_touch2.default.sync(cookiePath);
var jar = new _toughCookie2.default.CookieJar(new _toughCookieFilestore2.default(cookiePath));

var req = _axios2.default.create({
  timeout: 35e3,
  header: {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) ' + 'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2652.0 Safari/537.36',
    'Referer': 'https://wx2.qq.com/'
  },
  jar: jar,
  withCredentials: true,
  xsrfCookieName: null,
  xsrfHeaderName: null,
  httpAgent: new _http2.default.Agent({ keepAlive: true }),
  httpsAgage: new _https2.default.Agent({ keepAlive: true })
});

(0, _nodeAxiosCookiejar2.default)(req);

var wxBot = function (_EventEmitter) {
  (0, _inherits3.default)(wxBot, _EventEmitter);

  function wxBot() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, wxBot);

    var _this = (0, _possibleConstructorReturn3.default)(this, (wxBot.__proto__ || (0, _getPrototypeOf2.default)(wxBot)).call(this));

    (0, _assign2.default)(_this, _conf.CODES);

    debug('wxBot init');
    return _this;
  }

  (0, _createClass3.default)(wxBot, [{
    key: 'run',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.init();

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function run() {
        return _ref.apply(this, arguments);
      }

      return run;
    }()
  }, {
    key: 'init',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var qrcodeUrl;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                debug('begin login....');

                this.initConfig();

                _context2.prev = 2;
                _context2.next = 5;
                return this.fetchUUID();

              case 5:
                this.uuid = _context2.sent;

                debug('uuid=' + this.uuid);
                _context2.next = 13;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2['catch'](2);

                debug('fetch uuid error', _context2.t0);
                this.init();

              case 13:
                if (this.uuid) {
                  _context2.next = 17;
                  break;
                }

                debug('get uuid error ,reget...');
                this.init();
                return _context2.abrupt('return');

              case 17:
                console.log('get uuid ->' + this.uuid);
                debug('get uuid ->' + this.uuid);
                qrcodeUrl = URLS.QRCODE_PATH + this.uuid;

                console.log(qrcodeUrl);
                this.emit('qrcode', qrcodeUrl);

              case 22:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 9]]);
      }));

      function init() {
        return _ref2.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: 'initConfig',
    value: function initConfig() {
      this.baseHost = '';
      this.pushHost = '';
      this.uuid = '';
      this.redirectUri = '';
      this.skey = '';
      this.sid = '';
      this.uin = '';
      this.passTicket = '';
      this.baseRequest = null;
      this.my = null;
      this.syncKey = null;
      this.formatSyncKey = '';
      this.deviceid = makeDeviceId();
    }
  }, {
    key: 'fetchUUID',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        var result, _result, data, uuid;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                debug('start get uuid');
                result = void 0;
                _context3.prev = 2;
                _context3.next = 5;
                return req.get(URLS.API_jsLogin, {
                  params: {
                    appid: 'wx782c26e4c19acffb',
                    fun: 'new',
                    lang: 'zh_CN',
                    _: +new Date()
                  }
                });

              case 5:
                result = _context3.sent;
                _context3.next = 14;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3['catch'](2);

                debug('get uuid error reget....');
                _context3.next = 13;
                return this.fetchUUID();

              case 13:
                return _context3.abrupt('return', _context3.sent);

              case 14:
                _result = result, data = _result.data;

                if (/uuid = "(.+)";$/.test(data)) {
                  _context3.next = 17;
                  break;
                }

                throw new Error('get uuid failed');

              case 17:
                uuid = data.match(/uuid = "(.+)";$/)[1];
                return _context3.abrupt('return', uuid);

              case 19:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 8]]);
      }));

      function fetchUUID() {
        return _ref3.apply(this, arguments);
      }

      return fetchUUID;
    }()
  }, {
    key: 'test',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.fetchUUID();

              case 3:
                this.uuid = _context4.sent;
                _context4.next = 9;
                break;

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4['catch'](0);

                debug('fetch uuid error', _context4.t0);

              case 9:

                debug('get uuid ->' + this.uuid);

              case 10:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 6]]);
      }));

      function test() {
        return _ref4.apply(this, arguments);
      }

      return test;
    }()
  }]);
  return wxBot;
}(_events2.default);

module.exports = wxBot;