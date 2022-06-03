import React from 'react'
import { Route, Routes } from 'react-router-dom'

import PageMain from './Page_Main'
import PageHistory from './Page_History'
import PageBag from './Page_Bag'
import PageLogout from './Page_Logout'

class PagesRouter extends React.Component {
    render() {
        return (
            <Routes>
                <Route path='/' element={<PageMain />} />
                <Route path='/history' element={<PageHistory />} />
                <Route path='/bag' element={<PageBag />} />
                <Route path='/logout' element={<PageLogout />} />
                {/* <Route path="/client/:clid" element={<Page_Client/>} /> */}
            </Routes>
        )
    }
}

export default PagesRouter
