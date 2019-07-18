"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = matchInDepth;

var _matchInDepthMarkers = require("./matchInDepthMarkers");





function matchInDepth(payload, condition) {
  if (
  typeof condition === 'string' ||
  typeof condition === 'number' ||
  typeof condition === 'boolean')
  {
    return payload === condition;
  }

  // Check for in condition
  if (typeof condition === 'object') {
    const inCondition = condition[_matchInDepthMarkers.midMarker_in];

    if (inCondition) {
      // In condition - match until one match is found
      for (let inConditionOption of inCondition) {
        if (matchInDepth(payload, inConditionOption)) {
          return true;
        }
      }
    }

    for (let ix in condition) {
      const payloadValue = payload[ix];
      const conditionValue = condition[ix];

      if (conditionValue === _matchInDepthMarkers.midMarker_notNull) {
        if (payloadValue == null) {
          return false;
        } else {
          continue;
        }
      }
      if (conditionValue === _matchInDepthMarkers.midMarker_isNull) {
        if (payloadValue != null) {
          return false;
        } else {
          continue;
        }
      }

      const typeOfValue = typeof payloadValue;
      const typeOfCondition = typeof conditionValue;

      if (typeOfCondition === 'object') {
        // Regular object - match recursively, if the object is of the same type

        if (typeOfValue !== typeOfCondition) {
          return false;
        }
        if (!matchInDepth(payloadValue, conditionValue)) {
          return false;
        }
      } else {
        if (payloadValue !== conditionValue) {
          return false;
        }
      }
    }
  }

  return true;
}
//# sourceMappingURL=matchInDepth.js.map