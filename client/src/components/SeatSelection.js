import { Col, Row } from 'antd';
import React from 'react';

function SeatSelection({ selectedSeats, setSelectedSeats, bus }) {
  const capacity = bus.capacity;

  return (
    <div>
      <div className='bus-container'>
        <Row>
          {Array.from(Array(capacity).keys()).map((seat) => (
            <Col span={6}>
              <div className='seat'>{seat + 1}</div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default SeatSelection;
