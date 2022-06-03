import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

class PageMain extends React.PureComponent {
    render() {
        return (
            <div>
                <Header />
                <Sidebar />
            </div>
        )
    }
}

export default PageMain
