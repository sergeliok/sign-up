import consts from '../const';

const {
  NEXT_STEP,
  PREV_STEP,
} = consts;

export const nextStep = () => ({
  type: NEXT_STEP,
});

export const prevStep = () => ({
  type: PREV_STEP,
});
