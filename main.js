const form = document.getElementById("form")

const a = document.getElementById("a")
const b = document.getElementById("b")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const aValue = parseFloat(a.value)
  const bValue = parseFloat(b.value)

  if (isNaN(aValue) || isNaN(bValue)) {
    return
  }

  alert(aValue + bValue)
})
