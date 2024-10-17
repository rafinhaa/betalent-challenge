const phone = (phone: string) => {
  return phone.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, "+$1 ($2) $3-$4")
}

const date = (date: string) => {
  return new Date(date).toLocaleDateString("pt-BR", { timeZone: "UTC" })
}

export default { phone, date }
