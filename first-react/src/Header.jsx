export default function Header() {
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