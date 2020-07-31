import React, { useState } from 'react';
import { Card, Badge, Button, Collapse } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

const Job = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <Card className="mb-3" style={{ boxShadow: '0 6px 6px rgba(0,0,0,0.2)' }}>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {props.job.title} -{' '}
              <span className="text-muted font-weight-light">
                {props.job.company}
              </span>
            </Card.Title>
            <Card.Subtitle>
              {new Date(props.job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge variant="warning" className="mr-2">
              {props.job.type}
            </Badge>
            <Badge variant="success">{props.job.location}</Badge>
            <div style={{ wordBreak: 'break-all' }}>
              <ReactMarkdown source={props.job.how_to_apply} />
            </div>
          </div>
          <img
            className="d-none d-md-block"
            height="50"
            src={props.job.company_logo}
            alt="logo of the company that's put up the ad"
          />
        </div>
        <Card.Text>
          <Button onClick={() => setOpen(!open)} variant="primary">
            {open ? 'Hide Details' : 'View Details'}
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4">
            <ReactMarkdown source={props.job.description} />
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
};

export default Job;
