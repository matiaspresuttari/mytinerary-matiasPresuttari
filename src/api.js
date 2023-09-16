let apiUrl = 'https://localhost:8000'

if (process.env.NODE_ENV==='production'){
    apiUrl=import.meta.env.VITE_URL
}

export default apiUrl