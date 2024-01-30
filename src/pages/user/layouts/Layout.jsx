import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <div>
                <h1>this is navbar</h1>
            </div>

            {/* dynamic router changes content  */}
            <Outlet/>

        </div>
    )
}

export default Layout;