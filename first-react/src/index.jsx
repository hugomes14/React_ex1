import { createRoot } from "react-dom/client"

const root = createRoot(document.querySelector('#root'))

root.render(
    <main>
        <img src="src/assets/react.svg" width='40px' alt="React logo" />
        <h1>Fun facts about React</h1>
        <ul>    
            <li>Was first released in 2013</li>
            <li>Was dfd</li>
            <li>Was dfd</li>
            <li>Was dfd</li>
            <li>Was dfd</li>
        </ul>
    </main>
)

/* "puts them in the html doc"
it should return a object related with the creatElement function of react
it need to be wrapped around in some other structure
declarative means that one line of code runs multiple tasks, impearative means you need to write all the tusks by yourself
composable means that a project or some thing else is made of parts that can be reusable in other situation, instead of be made from a single unreusable part
*/