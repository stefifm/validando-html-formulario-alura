const inputNacimiento = document.querySelector('#birth')

inputNacimiento.addEventListener('blur', (e) => {
  e.preventDefault()
  validarNacimiento(e.target)
})

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
