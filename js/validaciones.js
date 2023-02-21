export function valida (input) {
  const tipoInput = input.dataset.tipo
  if (validadores[tipoInput]) {
    validadores[tipoInput](input)
  }

  if (input.validity.valid) {
    input.parentElement.classList.remove('input-container--invalid')
    input.parentElement.querySelector('.input-message-error').innerHTML = ''
  } else {
    input.parentElement.classList.add('input-container--invalid')
    input.parentElement.querySelector('.input-message-error').innerHTML = mostrarError(tipoInput, input)
  }
}

const mensajeError = {
  nombre: {
    valueMissing: 'El campo nombre no puede estar vacío'
  },
  email: {
    valueMissing: 'El campo email no puede estar vacío',
    typeMismatch: 'El correo no es válido'
  },
  password: {
    valueMissing: 'El campo contraseña no puede estar vacío',
    patternMismatch: 'Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra en mayúscula, un número y no puede contener caracteres especiales'
  },
  nacimiento: {
    valueMissing: 'El campo fecha de nacimiento no puede estar vacío',
    customError: 'Debes tener 18 años o más'
  },
  telefono: {
    valueMissing: 'El campo número de teléfono no puede estar vacío',
    patternMismatch: 'El formato requerido es: (código de área) número de teléfono'
  },
  direccion: {
    valueMissing: 'El campo dirección completa no puede estar vacío',
    patternMismatch: 'La dirección completa tiene que tener entre 10 y 40 caractéres'
  },
  ciudad: {
    valueMissing: 'El campo ciudad no puede estar vacío',
    patternMismatch: 'La dirección completa tiene que tener entre 10 y 40 caractéres'
  },
  provincia: {
    valueMissing: 'El campo Provincia no puede estar vacío',
    patternMismatch: 'La dirección completa tiene que tener entre 10 y 40 caractéres'
  }
}

const tipoErrores = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'customError'
]

const validadores = {
  nacimiento: (input) => validarNacimiento(input)
}

function mostrarError (tipoInput, input) {
  let mensaje = ''
  tipoErrores.forEach(error => {
    if (input.validity[error]) {
      mensaje = mensajeError[tipoInput][error]
    }
  })

  return mensaje
}

function validarNacimiento (input) {
  const fechaCliente = new Date(input.value)
  let mensaje = ''
  if (!mayorEdad(fechaCliente)) {
    mensaje = 'Debes tener 18 años o más'
  }
  input.setCustomValidity(mensaje)
}

function mayorEdad (fecha) {
  const fechaActual = new Date()
  const calculoFecha = new Date(
    fecha.getUTCFullYear() + 18,
    fecha.getUTCMonth(),
    fecha.getUTCDate()
  )
  return calculoFecha <= fechaActual
}
