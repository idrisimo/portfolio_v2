import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import '../../styles/App.css'

export const TechStackDisplay = ({ techStack }) => {

    return (
        
            <Card className='shadow border-white glassPanel'>
                <Row xs={3} md={6} className="g-2 p-5">
                    {techStack.map(tech => (
                        tech['lg_badge_url'] != null ?
                            <Col key={tech['tech_name']}>
                                <img className='flexImg' src={tech['lg_badge_url']}/>
                            </Col> : null
                    ))}
                </Row>
            </Card>
        
    )
}
