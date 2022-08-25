export const firstHandleBack = (helperOpens, unregister, setValue) => {

  const { setOpen, setActiveStep, setOpenWarning } = helperOpens;

  setOpenWarning(false)
  setOpen(false)
  unregister('');
  setActiveStep((prevActiveStep) => {
    setValue('form', '')
    return prevActiveStep - 1
  });
}