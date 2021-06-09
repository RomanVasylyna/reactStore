import React, {useRef} from 'react';
import {Form, Button} from 'react-bootstrap';

const Hello = () => {


    const nickname = useRef(null);
    const age = useRef(null);
    const gender = useRef(null);


    const handleSubmit = e => {
    e.preventDefault();
    let user = {nickname:nickname.current.value, age:age.current.value, gender:gender.current.value}
    console.log(user);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Nickname" className="form-control" style={{ marginBottom: '10px'}} ref={nickname}></input>
            <input type="number" placeholder="Enter Age" className="form-control" style={{ marginBottom: '10px'}} ref={age}></input>
            <select className="form-control" style={{ marginBottom: '10px'}} ref={gender}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <Button variant="primary" type="submit" className="form-control">Submit</Button>
        </Form>
    )
}

export default Hello
