import React from 'react'
import { NavLink } from 'react-router-dom'

import './Sidebar.css'

// interface ISidebarProps {
//     disabled?: boolean
// }

class Sidebar extends React.PureComponent {
    render() {
        return (
            <aside className='sidebar'>
                Phones
                {/* <div className='header__wrapper'>
                    <div>Varin shop</div>
                    <div>Hi, Varyas!</div>
                    <div>
                        <NavLink to='/logout' className={(obj) => 'pageLink' + (obj.isActive ? ' activePageLink' : '')}>
                            Logout
                        </NavLink>
                        <NavLink
                            to='/history'
                            className={(obj) => 'pageLink' + (obj.isActive ? ' activePageLink' : '')}
                        >
                            History
                        </NavLink>
                        <NavLink to='/bag' className={(obj) => 'pageLink' + (obj.isActive ? ' activePageLink' : '')}>
                            Bag
                        </NavLink>
                    </div>
                </div> */}
            </aside>
        )
    }
}

export default Sidebar
