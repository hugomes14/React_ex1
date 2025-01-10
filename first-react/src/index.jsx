import { createRoot } from "react-dom/client"


const root = createRoot(document.querySelector('#root'))

function Page() {
    return (
    <div>
        <header>
            <img src="src/assets/react.svg" width='40px' alt="React Logo" />
        </header>
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
        <footer>c 20xx Gomes development. All rights reserved</footer>
    </div>
    )
}

root.render(
    <Page />
)