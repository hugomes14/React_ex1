import { createRoot } from "react-dom/client"


const root = createRoot(document.querySelector('#root'))

function Page() {
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

root.render(
    <Page />
)