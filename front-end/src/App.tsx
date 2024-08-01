import React from 'react'
import { Row, Col } from 'antd'
import Footer from './components/footer'
import Header from './components/header'
import Navicator from './components/navicator'
export default function App() {
    return (
        <>
            <Row className='wrapper' style={{ 'border': '1px solid red' }}>
                <Col span={4} className='wrapper__left'>left
                    <Navicator></Navicator>
                </Col>
                <Col span={20} className='wrapper__right'>
                    <Header />
                    <Row className='wrapper__right__content'>
                        <h1>我是Content</h1>
                    </Row>
                    <Footer />
                </Col>
            </Row>
        </>
    )
}
