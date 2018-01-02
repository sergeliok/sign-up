import {
  NEXT_STEP,
  PREV_STEP,
} from '../const';

export const nextStep = () => ({
  type: NEXT_STEP,
});

export const prevStep = () => ({
  type: PREV_STEP,
});
