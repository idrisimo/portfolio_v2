import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'


export const TechStackDisplay = ({ techStack }) => {

    return (
        <Card>
            <Row xs={1} md={2} className="g-4">
                {techStack.map(tech => (
                    <Col>
                        <img src={tech['lg_badge_url']} />
                    </Col>
                ))}

            </Row>
        </Card>
    )
}
