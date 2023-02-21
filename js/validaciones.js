export function valida (input) {
  const tipoInput = input.dataset.tipo
  if (validadores[tipoInput]) {
    validadores[tipoInput](input)
  }
}

const validadores = {
  nacimiento: (input) => validarNacimiento(input)
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
