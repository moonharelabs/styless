"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (window) {
  var moonHare = {};
  moonHare.variants = {};
  moonHare.plugins = {};
  moonHare.filters = [];
  moonHare.styleEl = window.document.createElement('style');
  moonHare.styleEl.id = 'MOONHARE_STYLE_ELEMENT'; // Append <style> element to <head>

  window.document.head.appendChild(moonHare.styleEl); // @copyright - jQuery(https://tldrlegal.com/license/mit-license)
  // @reference https://github.com/jquery/jquery/blob/main/src/selector/escapeSelector.js

  moonHare.escapeSelector = function (sel) {
    var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

    function fcssescape(ch, asCodePoint) {
      if (asCodePoint) {
        if (ch === "\0") {
          return "\uFFFD";
        }

        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
      }

      return "\\" + ch;
    }

    return (sel + "").replace(rcssescape, fcssescape);
  };

  moonHare.defaultVariant = function (parts) {
    if (parts.length === 1) {
      Object.keys(this.plugins).forEach(function (pluginName) {
        if (parts[0].startsWith(pluginName)) return this.plugins[pluginName].call(this, parts);
      }, this);
      return ['', ''];
    }

    if (parts.length === 2) {
      return ['.' + this.escapeSelector(parts.join(':')), "{".concat(parts[0], ": ").concat(parts[1], ";}")];
    }

    return ['', ''];
  };

  moonHare.addStyles = function (styles) {
    this.styleEl.innerHTML = styles;
  };

  moonHare.clearStyles = function () {
    this.styleEl.innerHTML = '';
  };

  moonHare.generateStyles = function () {
    var classList = [];

    _toConsumableArray(window.document.querySelectorAll('*')).forEach(function (el) {
      return classList = [].concat(_toConsumableArray(classList), _toConsumableArray(el.classList));
    });

    var styleSheet = classList.map(function (cls) {
      var parts = cls.split(':');
      return (this.variants[parts[0]] || this.defaultVariant).call(this, parts);
    }, this);
    this.filters.forEach(function (filter) {
      styleSheet = filter.call(this, styleSheet);
    }, this);
    return styleSheet.flat().join('');
  };

  moonHare.start = function () {
    this.addStyles(this.generateStyles());
  };

  if (window.document.readyState != 'loading') moonHare.start();else window.document.addEventListener('DOMContentLoaded', function(){moonHare.start()});
  window.moonHare = moonHare;
})(window);
