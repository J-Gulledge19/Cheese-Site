const URL = "https://cheese-api-gxqk.onrender.com"

export const cheeseLoader = async () => {
  const response = await fetch(URL + "/cheese")
  const people = await response.json()
  return people
}

export const showCheeseLoader = async ({params}) => {
  const response = await fetch(URL + "/cheese/" + params.id )
  const person = await response.json()
  return person
}