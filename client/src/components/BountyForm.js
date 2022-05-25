import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_BOUNTY } from '../utils/mutations';
import { QUERY_ME, QUERY_BOUNTIES } from '../utils/queries'

import { Form, Button, Alert } from "react-bootstrap";


const BountyForm = () => {
    
    const [showAlert, setShowAlert] = useState(false);
    const [BountyInfo, setBountyInfo] = useState('');
    const [addBounty, { error }] = useMutation(ADD_BOUNTY, {
        update(cache, { data: { addBounty }}) {

            try {
                const { me } = cache.readQuery({ query: QUERY_ME });
                cache.writeQuery({
                    query: QUERY_ME,
                    data: { me: { ...me, bounty: [...me.bounty, addBounty]}},
                });
            } catch (e) {
                console.warn('First bounty insertion by user!')
            }

            const { bounty } = cache.readQuery({ query: QUERY_BOUNTIES });
            cache.writeQuery({
                query: QUERY_BOUNTIES,
                data: { bounty: [addBounty, ...bounty]},
            });
        }
    });

    const handleChange = (event) => {
        setBountyInfo(event.target.value);
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addBounty({
                variables: { ...BountyInfo }
            });

            setBountyInfo('');
        }catch (e) {
            console.error(e);
        }
    }



    return (
        <>
      {/* ensures validation requirement is fulfilled  */}
      <Form onSubmit={handleFormSubmit}>
        {/* bootstrap alert if validation fails */}
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          UH OH! Please check your credentials, and try again.
        </Alert>

        <Form.Group>
          <h3 className="access-title">Add a New Bounty</h3>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your username"
            name="username"
            onChange={handleChange}
            value={BountyInfo.username}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email address"
            name="email"
            onChange={handleChange}
            value={BountyInfo.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="locale">Locale</Form.Label>
          <Form.Control
            type="text"
            placeholder="What locale is the bounty in?"
            name="locale"
            onChange={handleChange}
            value={BountyInfo.locale}
            required
          />
          <Form.Control.Feedback type="invalid">
            Locale is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="What is the first and last name of the bounty?"
            name="name"
            onChange={handleChange}
            value={BountyInfo.name}
            required
          />
          <Form.Control.Feedback type="invalid">
            Name is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="locale">Reward</Form.Label>
          <Form.Control
            type="text"
            placeholder="What is the reward for the bounty?"
            name="reward"
            onChange={handleChange}
            value={BountyInfo.reward}
            required
          />
          <Form.Control.Feedback type="invalid">
            Locale is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="description">Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Please describe the person in question"
            name="description"
            onChange={handleChange}
            value={BountyInfo.description}
            required
          />
          <Form.Control.Feedback type="invalid">
            Description is required!
          </Form.Control.Feedback>
        </Form.Group>
        <button
        //   disabled={
        //     !(
        //         BountyInfo.email &&
        //         BountyInfo.locale &&
        //         BountyInfo.username &&
        //         BountyInfo.reward && 
        //         BountyInfo.description
        //     )
        //   }
          type="submit"
          className="btn"
        >
          Submit
        </button>
      </Form>

        </>
    )
}

export default BountyForm;