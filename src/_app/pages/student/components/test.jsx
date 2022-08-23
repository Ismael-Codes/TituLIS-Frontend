
<form onSubmit={handleSubmit(onSubmit)}>
  {/* <form> */}
  <Grid container spacing={2} className="mb-3">

    {/* //? Titulo */}
    <Grid item='true' xs={12} textAlign="center">
      <h1>Proceso de Solicitud</h1>
    </Grid>

    {/* //? Primero */}
    <Grid spacing={2} xs={12} md={6} className="mb-3">

      {/* //? Select */}
      <Grid item='true' xs={12}>
        <TextField
          select
          fullWidth
          label="Seleccione Modalidad de Titulación"
          defaultValue={''}
          {...register("form")}
          inputProps={register('form', {
            required: 'Por favor seleccione una modalidad',
          })}
          error={!!errors?.form}
          helperText={errors?.form?.message}
        // required={true}
        >
          {message.map((option, index) => (
            <MenuItem key={index} value={option.descripcion.value}>
              {option.nombre}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* //? Alert */}
      <Collapse in={open}>
        <Grid item='true' xs={12}>
          <Alert severity="warning" className="mb-2" action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }>
            <AlertTitle>Info</AlertTitle>
            Los <strong>requisitos</strong> y <strong>documentación</strong> varían dependiendo de la <strong>modalidad</strong>
          </Alert>
        </Grid>
      </Collapse>


      {/* //? InputSelect */}
      {
        (inputSelect == undefined)
          ? <></>
          : inputSelect.map((option, index) => (
            <InputSelect key={index} url={option.url} name={option.name} code={option.code} setValue={setValue} register={register} errors={errors} />
          ))
      }

      {/* //? InputText */}
      {
        (inputText == undefined)
          ? <></>
          : inputText.map((option, index) => (
            <InputText key={index} name={option.name} code={option.code} setValue={setValue} register={register} errors={errors} />
          ))
      }

      {/* //? Documentación Label */}
      <Grid item='true' xs={12}>
        <Typography component={'h1'} align='center'>Documentación</Typography>
      </Grid>

      {/* //? InputFiles */}
      <Box
        sx={{
          // backgroundColor: 'white',
          border: '1px dashed black',
          borderRadius: '8px',
        }}
      >
        <Grid spacing={1} container item='true' xs={12}>
          {
            (inputFile == undefined)
              ? <Grid item='true' xs={12} align='center'> <Typography>Selecciona una modalidad para poder ingresar los documentos correspondientes</Typography> </Grid>
              : inputFile.map((option, index) => (
                <InputFile key={index} name={option.name} code={option.code} setValue={setValue} dataForm={dataForm[option.code]} />
              ))
          }
        </Grid>
      </Box>

    </Grid>

    {/*//? Segundo */}
    <Grid spacing={2} xs={12} md={6} className="mb-3">
      {/* //? Acordions */}
      <Grid item='true' xs={12}>
        {
          (!dataForm.form == "") ? <CustomizedAccordions info={info} label={label} /> : <Typography variant="body1" align="center">Selecciona una modalidad para poder visualizar los requisitos generales, específicos y documentación correspondiente a la modalidad</Typography>
        }
      </Grid>
    </Grid>

    {/* //? Boton de enviar */}
    <Grid item='true' xs={12}>
      <Button type='submit' variant="contained" color="success" size="large" onClick={sendData(inputFile, inputText, inputSelect, dataForm)}>
        enviar Solicitud
      </Button>
    </Grid>
  </Grid>
</form >