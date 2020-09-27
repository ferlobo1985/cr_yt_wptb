import React from 'react';
import { Form,Button,Alert} from  'react-bootstrap';
import { useFormik } from  'formik';
import * as Yup from 'yup';

const Stage1 = () => {

    const formik = useFormik({
        initialValues:{ player:'' },
        validationSchema: Yup.object({
            player: Yup.string().max(5,'Must be 15 character or less')
            .required('Sorry, the name is required')
        }),
        onSubmit: ( values)=>{
            console.log(values)
        }
    })

    return(
        <>
            <Form onSubmit={formik.handleSubmit} className="mt-4">
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Add player name"
                        name="player"
                        onChange={formik.handleChange}
                        value={formik.values.player}
                    />
                </Form.Group>

                { formik.errors.player && formik.touched.player ?
                    <Alert variant="danger">
                        { formik.errors.player}
                    </Alert>
                :null}
                <Button className="miami" variant="primary" type="submit">
                    Add player
                </Button>
            </Form>
        </>
    )
}

export default Stage1;