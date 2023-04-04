import "../assets/scss/sidebar.scss";

function SideBar() {
    return (
        <section className="side_bar">
            <div className="top">
                <span className="logo">Admin</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <li>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>Dashboard</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">color option</div>
        </section>
    )
}

export default SideBar;