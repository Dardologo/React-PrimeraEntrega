import logoBeccaritas from "./assets/img/logoBeccaritas.png"
const Encabezado = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">

                    <img src={logoBeccaritas} alt="Logo de la empresa" />

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li classNameName="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Deportes</a>
                            </li>
                            <li classNameName="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Accesorios</a>
                            </li>
                            <li classNameName="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Ofertas</a>
                            </li>
                            <li classNameName="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Outlet</a>
                            </li>
                            <li classNameName="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Clubes</a>
                            </li>
                            <li classNameName="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Contactanos</a>
                            </li>

                        </ul>

                        <button className="btn btn-outline-success" type="submit"><i class="fa-solid fa-cart-shopping"></i></button>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Encabezado;