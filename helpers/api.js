export async function getCategories(axios) {
  const payload = await axios.get(`categories`)
  return payload.data.items
}

export async function getApps(axios, params) {
  const payload = await axios.get(`apps/`, {
    params
  })
  return payload.data
}
