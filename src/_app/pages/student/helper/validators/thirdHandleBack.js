export const thirdHandleBack = (helperOpens, unregister, setValue, dataForm) => {

  const { setOpen, setActiveStep, setOpenWarning } = helperOpens;

  setOpenWarning(false)
  setOpen(false)
  const helper = dataForm.form;
  unregister('');
  setActiveStep((prevActiveStep) => {
    setValue('form', helper)
    return prevActiveStep - 1
  });

}