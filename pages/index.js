import Router from 'next/router'
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useFormik} from "formik";
import Head from "next/head";
import s from './styles/index.module.css'

export default function Index() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 6) {
                errors.password = 'Invalid password address';
            }
            return errors;
        },
        onSubmit: values => {
            if(values.email !== 'Required' || values.password !== 'Required'){
                Router.push('/area')
            }
            formik.resetForm();
        },
    })

    return (
        <>
            <Head>
                <title>{"Autorisation"}</title>
            </Head>
            <h1>Autorisation</h1>
            <Grid container justify="center">
                <Grid item xs={4}>
                    <FormControl>
                        <form onSubmit={formik.handleSubmit}>
                            <FormGroup>
                                <TextField
                                    label="Email"
                                    margin="normal"
                                    {...formik.getFieldProps('email')}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email ?
                                    <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                                <TextField
                                    type="password"
                                    label="Password"
                                    margin="normal"
                                    name="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.password && formik.errors.password ?
                                    <div style={{color: 'red'}}>{formik.errors.password}</div> : null}

                                <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
                            </FormGroup>
                        </form>
                    </FormControl>
                </Grid>
            </Grid>
        </>
    )
}
