const stripe_sky = 'pk_test_51OwIodRpj35rmseF3mmLQmIknH28RX7LAnlA2NYfnITpdXpGDLEwPwla5iNRNYPxlF8xiLqlvpmcIiFDholwErnE000oRB5DdG'


const production = 'production'
const dev = 'development'

const mode = production

let app_url, api_url

if (mode === production) {
    app_url = "https://mynul-shop.vercel.app"
    api_url = "https://mynul-shop-server.onrender.com"
} else {
    app_url = 'http://localhost:3000'
    api_url = 'http://localhost:5000'
}

export {
    app_url,
    api_url,
    stripe_sky
}