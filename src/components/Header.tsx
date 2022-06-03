import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.css'

interface IHeaderProps {
    disabled?: boolean
}

class Header extends React.PureComponent<IHeaderProps> {
    render() {
        return (
            <header className={'header' + (this.props.disabled ? ' logout' : '')}>
                <div className='header__wrapper'>
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
                </div>
            </header>
        )
    }
}

export default Header
