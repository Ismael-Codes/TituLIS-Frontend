export const handleResetHelper = (setOpenWarning, unregister, setActiveStep, setFinalData) => {

  setFinalData({
    select: null,
    input: null,
    files: null,
  })
  
  setOpenWarning(false)
  unregister('');
  setActiveStep(0);
}