let edad = prompt('Introduce tu edad: ')

if (edad < 9) {
  alert('Eres un niño')
} else if (edad > 10 && edad < 12) {
  alert('Eres un pre adolescente')
} else if (edad > 12 && edad < 18) {
  alert('Eres un Adolescente')
} else if (edad > 18) {
    alert('Eres un adulto');
}
