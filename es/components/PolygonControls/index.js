var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  from {\n    opacity: 0;\n    transform: scale(0);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n'], ['\n  from {\n    opacity: 0;\n    transform: scale(0);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  background: white;\n  border-radius: 2px;\n  box-shadow:\n    0px 1px 5px 0px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n    0px 3px 1px -2px rgba(0, 0, 0, 0.12);\n  transform-origin: top left;\n\n  animation: ', ' 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  overflow: hidden;\n'], ['\n  background: white;\n  border-radius: 2px;\n  box-shadow:\n    0px 1px 5px 0px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n    0px 3px 1px -2px rgba(0, 0, 0, 0.12);\n  transform-origin: top left;\n\n  animation: ', ' 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  overflow: hidden;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  background: whitesmoke;\n  border: 0;\n  box-sizing: border-box;\n  color: #363636;\n  cursor: pointer;\n  font-size: 1rem;\n  margin: 0;\n  outline: 0;\n  padding: 8px 16px;\n  text-align: center;\n  text-shadow: 0 1px 0 rgba(0,0,0,0.1);\n  width: 100%;\n\n  transition: background 0.21s ease-in-out;\n\n  &:focus, &:hover {\n    background: #eeeeee;\n  }\n'], ['\n  background: whitesmoke;\n  border: 0;\n  box-sizing: border-box;\n  color: #363636;\n  cursor: pointer;\n  font-size: 1rem;\n  margin: 0;\n  outline: 0;\n  padding: 8px 16px;\n  text-align: center;\n  text-shadow: 0 1px 0 rgba(0,0,0,0.1);\n  width: 100%;\n\n  transition: background 0.21s ease-in-out;\n\n  &:focus, &:hover {\n    background: #eeeeee;\n  }\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { getHorizontallyCentralPoint, getVerticallyLowestPoint } from '../../utils/pointsUtils';

var fadeInScale = keyframes(_templateObject);

var Container = styled.div(_templateObject2, fadeInScale);
//  margin-left: -50%;
//  margin-right: 50%
//`

var Button = styled.div(_templateObject3);

function PolygonControls(props) {
  var geometry = props.annotation.geometry;
  // Only show polygon controls if there are at least three points set

  if (!geometry || !geometry.points || geometry.points.length === 0) return null;

  var zoomBetweenZeroAndOne = Math.abs((props.imageZoomAmount - 1) / 4 - 1);

  var fontSize = 1 / 5 + zoomBetweenZeroAndOne * (4 / 5);
  var paddingHorizontal = 1 / 5 * 8 + 4 / 5 * 8 * zoomBetweenZeroAndOne;
  var paddingVertical = 1 / 5 * 16 + 4 / 5 * 16 * zoomBetweenZeroAndOne;

  return React.createElement(
    'div',
    {
      style: _extends({
        position: 'absolute',
        left: getHorizontallyCentralPoint(geometry.points) + '%',
        top: getVerticallyLowestPoint(geometry.points) + 15 * (5 / 5) + '%'
      }, props.style)
    },
    React.createElement(
      Container,
      {
        className: props.className
      },
      geometry.points.length >= 2 && React.createElement(
        Button,
        {
          onClick: props.onSelectionUndo,
          style: { fontSize: fontSize + 'rem', padding: paddingHorizontal + 'px ' + paddingVertical + 'px' }
        },
        'Undo'
      ),
      React.createElement(
        Button,
        {
          onClick: props.onSelectionClear,
          style: { fontSize: fontSize + 'rem', padding: paddingHorizontal + 'px ' + paddingVertical + 'px' }
        },
        'Clear'
      ),
      geometry.points.length >= 3 && React.createElement(
        Button,
        {
          onClick: props.onSelectionComplete,
          style: { fontSize: fontSize + 'rem', padding: paddingHorizontal + 'px ' + paddingVertical + 'px' }
        },
        'Done'
      )
    )
  );
}

PolygonControls.defaultProps = {
  className: '',
  style: {}
};

export default PolygonControls;