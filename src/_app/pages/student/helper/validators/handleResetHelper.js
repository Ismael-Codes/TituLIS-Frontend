export const handleResetHelper = (setOpenWarning, unregister, setActiveStep) => {
  setOpenWarning(false)
  unregister('');
  setActiveStep(0);
}