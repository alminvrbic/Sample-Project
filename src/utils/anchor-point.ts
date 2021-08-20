import {
  PerpectiveTransform,
  RotateTransform,
  RotateXTransform,
  RotateYTransform,
  RotateZTransform,
  ScaleTransform,
  ScaleXTransform,
  ScaleYTransform,
  SkewXTransform,
  SkewYTransform,
  TransformsStyle,
  TranslateXTransform,
  TranslateYTransform,
} from 'react-native';

export interface Point {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

const isValidPointValue = (value: number): boolean => {
  return value >= 0 && value <= 1.0;
};

const isValidPoint = (point: Point): boolean => {
  return isValidPointValue(point.x) && isValidPointValue(point.y);
};

const defaultAnchorPoint = {x: 0.5, y: 0.5};

export const withAnchorPoint = (
  transform: TransformsStyle,
  anchorPoint: Point,
  size: Size,
) => {
  if (!isValidPoint(anchorPoint)) {
    return transform;
  }

  let injectedTransform = transform.transform;
  if (!injectedTransform) {
    return transform;
  }

  if (anchorPoint.x !== defaultAnchorPoint.x && size.width) {
    const shiftTranslateX: (
      | PerpectiveTransform
      | RotateTransform
      | RotateXTransform
      | RotateYTransform
      | RotateZTransform
      | ScaleTransform
      | ScaleXTransform
      | ScaleYTransform
      | TranslateXTransform
      | TranslateYTransform
      | SkewXTransform
      | SkewYTransform
    )[] = [];

    // shift before rotation
    shiftTranslateX.push({
      translateX: size.width * (anchorPoint.x - defaultAnchorPoint.x),
    });

    // eslint-disable-next-line
    // @ts-ignore
    injectedTransform = shiftTranslateX.concat(injectedTransform);

    // shift after rotation
    injectedTransform.push({
      translateX: size.width * (defaultAnchorPoint.x - anchorPoint.x),
    });
  }

  if (!Array.isArray(injectedTransform)) {
    return {transform: injectedTransform};
  }

  if (anchorPoint.y !== defaultAnchorPoint.y && size.height) {
    const shiftTranslateY: (
      | PerpectiveTransform
      | RotateTransform
      | RotateXTransform
      | RotateYTransform
      | RotateZTransform
      | ScaleTransform
      | ScaleXTransform
      | ScaleYTransform
      | TranslateXTransform
      | TranslateYTransform
      | SkewXTransform
      | SkewYTransform
    )[] = [];
    // shift before rotation
    shiftTranslateY.push({
      translateY: size.height * (anchorPoint.y - defaultAnchorPoint.y),
    });

    // eslint-disable-next-line
    //@ts-ignore
    injectedTransform = shiftTranslateY.concat(injectedTransform);

    // shift after rotation
    injectedTransform.push({
      translateY: size.height * (defaultAnchorPoint.y - anchorPoint.y),
    });
  }

  return {transform: injectedTransform};
};
