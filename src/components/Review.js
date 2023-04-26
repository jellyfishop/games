import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Review({ reviewData }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Reviews
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            {
              reviewData.map(item=>(
                <div body style={{ width: '400px' }}>
                  <h6>{item.name} : {item.date}</h6>
                  <p>{item.rating}</p>
                  <p>{item.comments}</p>
            
              </div>

              ))
               
            }
          </div>

        </Collapse>
      </div>
    </div>
  )
}

export default Review