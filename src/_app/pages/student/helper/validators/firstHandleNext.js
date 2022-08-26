export const firstHandleNext = (data, helperOpens) => {

  const { setOpen, setActiveStep } = helperOpens;

  (!data == undefined || !data == '')
    ? (
      setActiveStep((prevActiveStep) => prevActiveStep + 1),
      setOpen(false)
    )
    : setOpen(true)
}