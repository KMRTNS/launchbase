function age(timestamp) {
  const today = new Date()
  const birthDate = new Date(timestamp)

  // ANO
  let age = today.getFullYear() - birthDate.getFullYear()

  // MÊS
  const month = today.getMonth() - birthDate.getMonth()

  // LÓGICA
  if(month < 0 || month == 00 && today.getDate() < birthDate.getDate()) {
    age = age -1
  }

  return age

}

// ANO
// 2019 - 1984 = 35 

// MÊS 
// 11 - 12 = -1
// 11 - 11 = 0
// 11 - 10 = 1

// DIA 
// 01 - 12 = -11
// 12 - 12 = 0
// 13 - 10 = 1