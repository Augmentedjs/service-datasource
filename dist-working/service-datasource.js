exports["servicedatasource"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/datasource.js":
/*!***************************!*\
  !*** ./src/datasource.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _datasourceStyle = __webpack_require__(/*! ./datasourceStyle.js */ "./src/datasourceStyle.js");

var _datasourceStyle2 = _interopRequireDefault(_datasourceStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The datasource object for use as an interface for a datasource
 * @interface DataSource
 * @memberof Augmented.Service
 */
class DataSource {
  constructor(client, style, url) {
    this.connected = false;
    this.style = style ? style : _datasourceStyle2.default.DATABASE;
    this._client = client ? client : null;
    this.url = url ? url : "";
    this._db = null;
    this._collection = null;
  }

  /**
   * @property {object} client The client for use in the DataSource
   * @memberof Augmented.Service.DataSource
   */

  /**
   * @property {string} url The url for the datasource (if applicable)
   * @memberof Augmented.Service.DataSource
   */

  /**
   * @property {object} db The database (or simular) for the datasource (if applicable)
   * @memberof Augmented.Service.DataSource
   */

  /**
   * @property {object} collection The collection for use in the DataSource
   * @memberof Augmented.Service.DataSource
   */

  /**
   * @method getConnection Get a connection to the DataSource
   * @memberof Augmented.Service.DataSource
   * @returns {boolean} Returns true if a connection is established
   */
  getConnection() {
    return false;
  }

  /**
   * @method closeConnection Close a connection to the DataSource (depending on type may not be needed)
   * @memberof Augmented.Service.DataSource
   * @returns {boolean} Returns true if a connection is established
   */
  closeConnection() {}

  /**
   * @method insert Insert data
   * @memberof Augmented.Service.DataSource
   * @param {object} data Data to insert
   */
  insert(data) {}

  /**
   * @method remove Remove data
   * @memberof Augmented.Service.DataSource
   * @param {object} data Data to remove
   */
  remove(data) {}

  /**
   * @method update Update data
   * @memberof Augmented.Service.DataSource
   * @param {object} data Data to update
   */
  update(data) {}

  /**
   * @method query Query data
   * @memberof Augmented.Service.DataSource
   * @param {object} query The query object
   * @param {function} callback A callback to execute during the query
   * @returns {object} Returns a value from the query or response code
   */
  query(query, callback) {
    return null;
  }

  /**
    * @method getCollection Get the collection
    * @memberof Augmented.Service.DataSource
    * @returns {object} Returns the collection
    */
  get collection() {
    return this._collection;
  }

  /**
   * @method setCollection Set the collection by name
   * @memberof Augmented.Service.DataSource
   * @param {string} name The name of the collection
   */
  set collection(name) {
    this._collection = name;
  }

  /**
    * @method getClient Get the client
    * @memberof Augmented.Service.DataSource
    * @returns {object} Returns the client
    */
  get client() {
    return this._client;
  }

}

;
exports.default = DataSource;

/***/ }),

/***/ "./src/datasourceFactory.js":
/*!**********************************!*\
  !*** ./src/datasourceFactory.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _memoryDataSource = __webpack_require__(/*! ./memoryDataSource.js */ "./src/memoryDataSource.js");

var _memoryDataSource2 = _interopRequireDefault(_memoryDataSource);

var _mongoDataSource = __webpack_require__(/*! ./mongoDataSource.js */ "./src/mongoDataSource.js");

var _mongoDataSource2 = _interopRequireDefault(_mongoDataSource);

var _solrDataSource = __webpack_require__(/*! ./solrDataSource.js */ "./src/solrDataSource.js");

var _solrDataSource2 = _interopRequireDefault(_solrDataSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The datasource factory to return an instance of a datasource configured by type
 * @namespace DataSourceFactory
 * @memberof Augmented.Service
 */
class DataSourceFactory {
  constructor() {}

  static getDatasource(type, client) {
    if (type === DataSourceFactory.Type.MONGODB) {
      return new _mongoDataSource2.default(client);
    } else if (type === DataSourceFactory.Type.SOLR) {
      return new _solrDataSource2.default(client);
    } else if (type === DataSourceFactory.Type.MEMORY) {
      return new _memoryDataSource2.default();
    }

    return null;
  }

}

;
DataSourceFactory.Type = {};
DataSourceFactory.Type.MEMORY = Symbol("memory");
DataSourceFactory.Type.MONGODB = Symbol("mongodb");
DataSourceFactory.Type.SOLR = Symbol("solr");
exports.default = DataSourceFactory;

/***/ }),

/***/ "./src/datasourceStyle.js":
/*!********************************!*\
  !*** ./src/datasourceStyle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const DATASOURCE_STYLE = {};
DATASOURCE_STYLE.DATABASE = Symbol("database");
DATASOURCE_STYLE.MEMORY = Symbol("memory");
DATASOURCE_STYLE.SEARCH = Symbol("search");
exports.default = DATASOURCE_STYLE;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _datasource = __webpack_require__(/*! ./datasource.js */ "./src/datasource.js");

var _datasource2 = _interopRequireDefault(_datasource);

var _datasourceStyle = __webpack_require__(/*! ./datasourceStyle.js */ "./src/datasourceStyle.js");

var _datasourceStyle2 = _interopRequireDefault(_datasourceStyle);

var _memoryDataSource = __webpack_require__(/*! ./memoryDataSource.js */ "./src/memoryDataSource.js");

var _memoryDataSource2 = _interopRequireDefault(_memoryDataSource);

var _mongoDataSource = __webpack_require__(/*! ./mongoDataSource.js */ "./src/mongoDataSource.js");

var _mongoDataSource2 = _interopRequireDefault(_mongoDataSource);

var _solrDataSource = __webpack_require__(/*! ./solrDataSource.js */ "./src/solrDataSource.js");

var _solrDataSource2 = _interopRequireDefault(_solrDataSource);

var _datasourceFactory = __webpack_require__(/*! ./datasourceFactory.js */ "./src/datasourceFactory.js");

var _datasourceFactory2 = _interopRequireDefault(_datasourceFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.DataSource = _datasource2.default;
module.exports.DATASOURCE_STYLE = _datasourceStyle2.default;
module.exports.MemoryDataSource = _memoryDataSource2.default;
module.exports.MongoDataSource = _mongoDataSource2.default;
module.exports.SOLRDataSource = _solrDataSource2.default;
module.exports.DataSourceFactory = _datasourceFactory2.default;

/***/ }),

/***/ "./src/memoryDataSource.js":
/*!*********************************!*\
  !*** ./src/memoryDataSource.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _datasource = __webpack_require__(/*! ./datasource.js */ "./src/datasource.js");

var _datasource2 = _interopRequireDefault(_datasource);

var _datasourceStyle = __webpack_require__(/*! ./datasourceStyle.js */ "./src/datasourceStyle.js");

var _datasourceStyle2 = _interopRequireDefault(_datasourceStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MemoryDataSource extends _datasource2.default {
  constructor() {
    super(null, _datasourceStyle2.default.MEMORY, null);
    this._db = {};
  }

  getConnection(url, collection) {
    this.connected = true;

    if (collection) {
      this._collection = collection;
    }

    this.url = url;
    return true;
  }

  closeConnection() {
    if (this._db && this.connected) {
      this.connected = false;
      this._db = null;
      this._collection = null;
    }
  }

  setCollection(name) {
    if (name && Augmented.isString(name)) {
      this._collection = name;
      this._db[this._collection] = {};
    }
  }

  query(query, callback) {
    let ret = {};

    if (this._collection && this.connected) {
      //debug("The query: " + query);
      let myQuery = query;

      if (Augmented.isFunction(query)) {
        myQuery = query();
      }

      const obj = this._db[this._collection];
      ret = obj[myQuery];

      if (callback) {
        callback(ret);
      }
    }

    return ret;
  }

  insert(data, callback) {
    let ret = {};

    if (this._collection && this.connected) {
      const obj = this._db[this._collection];
      obj[this._collection] = data;
      ret = data;

      if (callback) {
        callback(da);
      }
    } else {
      throw new Error("no collection defined or not connected.");
    }

    return ret;
  }

}

;
exports.default = MemoryDataSource;

/***/ }),

/***/ "./src/mongoDataSource.js":
/*!********************************!*\
  !*** ./src/mongoDataSource.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _datasource = __webpack_require__(/*! ./datasource.js */ "./src/datasource.js");

var _datasource2 = _interopRequireDefault(_datasource);

var _datasourceStyle = __webpack_require__(/*! ./datasourceStyle.js */ "./src/datasourceStyle.js");

var _datasourceStyle2 = _interopRequireDefault(_datasourceStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const debug = (message) => {
//   console.debug(message);
// };

/**
 * The MongoDB datasource instance class
 * @extends DataSource
 */
class MongoDataSource extends _datasource2.default {
  constructor(client) {
    super(client, _datasourceStyle2.default.DATABASE, null);
  }

  setCollection(name) {
    //debug("setCollection: " + name);
    if (name && Augmented.isString(name)) {
      //debug("collection: " + name);
      this._collection = this._db.collection(name);
    } //else {
    //    debug("no collection set");
    //}

  }

  getConnection(url, collection) {
    this.connected = false;
    let that = this;

    if (this.client && !this.connected) {
      // unclear if the client supports arrow functions
      this._client.connect(url, (err, db) => {
        if (!err) {
          if (collection) {
            //debug("getConnection: collection: " + collection);
            that._collection = db.collection(collection);
          } //else {
          //debug("getConnection: no collection");
          //}


          that._db = db;
          that.url = url;
          that.connected = true;
          that.style = _datasourceStyle2.default.DATABASE;
        } else {
          throw new Error(err);
        }
      });

      return true;
    } else {
      throw new Error("No client was passed."); //logger.error("no client was passed.");
    }

    return false;
  }

  closeConnection() {
    if (this._db && this.connected) {
      this._db.close();

      this.connected = false;
      this._db = null;
      this._collection = null;
    }
  }

  query(query, callback) {
    let ret = {};

    if (this._collection && this.connected) {
      //debug("The query: " + query);
      let myQuery = query;

      if (Augmented.isFunction(query)) {
        myQuery = query();
      } // unclear if the client supports arrow functions


      this._collection.find(myQuery).toArray((err, results) => {
        if (!err) {
          //debug("Results: " + JSON.stringify(results));
          if (results) {
            ret = results;
          }

          if (callback) {
            callback(ret);
          } else {//debug("MongoDatasource, no callback");
          }
        } else {
          throw new Error(err);
        }
      });
    } else {
      throw new Error("no collection defined or not connected to db."); //logger.error("no collection defined or not connected to db.");
    } //debug("ret: " + JSON.stringify(ret));


    return ret;
  }

  insert(data, callback) {
    let ret = {};

    if (this._collection && this.connected) {
      if (Array.isArray(data)) {
        // unclear if the client supports arrow functions
        this._collection.insertMany(data, (err, result) => {
          if (!err) {
            //debug("Result: " + JSON.stringify(result));
            if (result) {
              ret = result;

              if (callback) {
                callback(ret);
              }
            }
          } else {
            throw new Error(err);
          }
        });
      } else {
        // unclear if the client supports arrow functions
        this._collection.insertOne(data, (err, result) => {
          if (!err) {
            //debug("Result: " + JSON.stringify(result));
            if (result) {
              ret = result;

              if (callback) {
                callback(ret);
              }
            }
          } else {
            throw new Error(err);
          }
        });
      }
    } else {
      throw new Error("no collection defined or not connected to db."); //logger.error("no collection defined or not connected to db.");
    } //debug("ret: " + JSON.stringify(ret));


    return ret;
  }

  update(query, data, callback) {
    if (this._collection && this.connected) {
      //debug("The query: " + query);
      let myQuery = query;

      if (Augmented.isFunction(query)) {
        myQuery = query();
      } // unclear if the client supports arrow functions


      this.collection.update(myQuery, data, (err, result) => {
        if (!err) {//debug("Result: " + JSON.stringify(result));
        } else {
          throw new Error(err);
        }
      });

      if (callback) {
        callback(data);
      }
    } else {
      throw new Error("no collection defined or not connected to db."); //logger.error("no collection defined or not connected to db.");
    }

    return data;
  }

  remove(query, callback) {
    let ret = {};

    if (this._collection && this.connected) {
      //debug("The query: " + query);
      let myQuery = query;

      if (Augmented.isFunction(query)) {
        myQuery = query();
      } // unclear if the client supports arrow functions


      this.collection.remove(myQuery, (err, results) => {
        if (!err) {
          if (callback) {
            callback();
          }
        } else {
          throw new Error(err);
        }
      });
    } else {
      throw new Error("no collection defined or not connected to db."); //logger.error("no collection defined or not connected to db.");
    }

    return ret;
  }

}

;
exports.default = MongoDataSource;

/***/ }),

/***/ "./src/solrDataSource.js":
/*!*******************************!*\
  !*** ./src/solrDataSource.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _datasource = __webpack_require__(/*! ./datasource.js */ "./src/datasource.js");

var _datasource2 = _interopRequireDefault(_datasource);

var _datasourceStyle = __webpack_require__(/*! ./datasourceStyle.js */ "./src/datasourceStyle.js");

var _datasourceStyle2 = _interopRequireDefault(_datasourceStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The SOLR datasource instance class - WIP
 * @constructor SOLRDataSource
 * @implements {Augmented.Service.DataSource}
 * @augments Augmented.Service.DataSource
 * @memberof Augmented.Service
 */
class SOLRDataSource extends _datasource2.default {
  constructor(client) {
    super(client, _datasourceStyle2.default.DATABASE, null);
  }

  getConnection(url, collection) {
    this.connected = false;
    let that = this;

    if (this._client && !this.connected) {
      this._client.ping((err, db) => {
        if (!err) {
          //logger.debug("collection: " + collection);
          that._collection = collection;
          that._db = db;
          that.url = url;
          that.connected = true;
          that.style = _datasourceStyle2.default.SEARCH;
        } else {
          throw new Error(err);
        }
      });
    } else {
      throw new Error("No client was passed.");
    }

    return this.connected;
  }

  closeConnection() {
    if (this._db && this.connected) {
      this.connected = false;
      this._db = null;
      this._collection = null;
    }
  }

  query(query, callback) {
    let ret = {};
    return ret;
  }

  insert(data, callback) {
    let ret = {};
    return ret;
  }

  update(query, data, callback) {
    return data;
  }

  remove(query, callback) {
    let ret = {};
    return ret;
  }

}

;
exports.default = SOLRDataSource;

/***/ })

/******/ });
//# sourceMappingURL=service-datasource.js.map