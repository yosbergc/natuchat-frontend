function registerService(username: string, email: string, password: string) {
    return fetch('http://127.0.0.1:5000/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: username,
            email,
            password
        })
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(res => {
                throw new Error(res)
            });
        }
        return response.json()
    })
    .then(data => data)
    .catch(error => {
        throw new Error(error)
    })
}

export { registerService }