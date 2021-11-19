import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer"

function Home() {
    return (
        <div className="text-center">
            <h1 style={{color: '#777777'}}>Bienvenidos, elija su componente</h1>
            <Header />
            <Footer />
        </div>
    )
}

export default Home
