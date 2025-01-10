import { createRoot } from "react-dom/client"
/*import { Fragment } from "react"*/


const root = createRoot(document.querySelector('#root'))

function Header() {
    return (
    <header className="header">
        <img className='img' src="src/assets/react.svg" alt="React Logo" />
        <nav>
            <ul className="nav-list">
                <li className="pricing">Pricing</li>
                <li className="about">About</li>
                <li className="contact">Contact</li>
            </ul>
        </nav>
    </header>
    )
}

function Footer() {
    return (
        <footer>c 20xx Gomes development. All rights reserved</footer>
    )
}

function MainContent() {
    return (
        <main>
            <h1>Reasons to be excited to be learning react</h1>
            <ol>
                <li>some thing</li>
                <li>some thing</li>
                <li>some thing</li>
                <li>some thing</li>
                <li>some thing</li>
                <li>some thing</li>
                <li>some thing</li>
            </ol>
        </main>
    )
}

function Page() {
    return (
    <>
        <Header />
        <MainContent />
        <Footer />
    </>
    )
}

root.render(
    <>
        <Page />
    </>
)