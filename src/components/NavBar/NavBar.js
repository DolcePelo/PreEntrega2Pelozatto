import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="hero is-primary">
            <h3>Luxe Loom</h3>
            <div>
                <button>New Arrivals</button>
                <button>Prendas</button>
                <button>Joyas</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;