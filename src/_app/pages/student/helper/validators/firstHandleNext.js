export const firstHandleNext = (data, helperOpens) => {

  const { setOpen, setActiveStep } = helperOpens;

  if (data !== undefined && data !== '') {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setOpen(false)
  } else {
    setOpen(true)
  }
}