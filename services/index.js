function apiCall(endpoint,data) {
  return fetch(`https://max-personal-website-backend.herokuapp.com/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
}

export default apiCall;