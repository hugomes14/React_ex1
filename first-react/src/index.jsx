import { createRoot } from "react-dom/client"
/*import { Fragment } from "react"*/


const root = createRoot(document.querySelector('#root'))

function Header() {
    return (
    <header>
        <img src="src/assets/react.svg" width='40px' alt="React Logo" />
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