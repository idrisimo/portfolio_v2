import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import '../../styles/App.css'

export const TechStackDisplay = ({ techStack }) => {

    return (
        
            <Card className='shadow border-white glassPanel w-75'>
                <Row className="row-cols-4 row-cols-md-6 g-2 p-2">
                    {techStack.map(tech => (
                        tech['lg_badge_url'] != null ?
                            <Col key={tech['tech_name']}>
                                <img className='flexImg' src={tech['lg_badge_url']} alt={`${tech['tech_name']} badge large`}/>
                            </Col> : null
                    ))}
                </Row>
            </Card>
        
    )
}
