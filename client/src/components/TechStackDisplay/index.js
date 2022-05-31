import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'


export const TechStackDisplay = ({ techStack }) => {

    return (
        <Container className=''>
            <Card className='shadow' style={{ backgroundColor: 'rgba(255, 255, 255, .30)', backdropFilter: 'blur(5px)'}}>
                <Row xs={1} md={6} className="g-2">
                    {techStack.map(tech => (
                        tech['lg_badge_url'] != null ?
                            <Col key={tech['tech_name']}>
                                <img src={tech['lg_badge_url']} height="100px" />
                            </Col> : null
                    ))}
                </Row>
            </Card>
        </Container>
    )
}
