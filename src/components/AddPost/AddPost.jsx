import React from "react";
import css from './AddPost.module.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import List from "../Home/List/List";

const AddPost = (props) => {
    let location = React.createRef();
    let description = React.createRef();
    let price = React.createRef();

    let addPost = () => {
        let l = location.current.value;
        let d = description.current.value;
        let p = price.current.value;
        if (d === '' || l === '' || p === ''){
            alert('Не все данные были введены!')
        } else {
            props.addPost('https://images.homedepot-static.com/productImages/b6f29ab9-550e-4545-bfe5-7f6dd17b77bc/svn/toter-commercial-trash-cans-79296-r2968-64_1000.jpg', l, d, p);
            location.current.value = '';
            description.current.value = '';
            price.current.value = '';
            props.updatePostChange('');
            alert('Новый пост был добавлен!')
        }
    }

    let onPostChange = () => {
        let d = description.current.value;
        let p = price.current.value;
        let l = location.current.value;
        props.updatePostChange(l, d, p);
    }

    return (
        <div>
            <Card style={{width: '18rem'}} className={css.content}>
                <div className={css.plusContent}>
                    <div className={css.crossPlus}>+</div>
                    <div className={css.plusText}>Добавьте изображение</div>
                </div>
                <Card.Body className={css.overflow}>
                    <Form>
                        <Form.Label>Укажите местоположение</Form.Label>
                        <Form.Control onChange={onPostChange} ref={location} size="sm" type="text" placeholder="" value={props.newPostLocation}/>
                        <br/>
                        <Form.Label>Опишите участок</Form.Label>
                        <Form.Control onChange={onPostChange} value={props.newPostDescription} ref={description} as="textarea" rows="3"/>
                        <br/>
                        <Form.Label>Укажите цену</Form.Label>
                        <Form.Control onChange={onPostChange} ref={price} size="sm" type="number" placeholder="" value={props.newPostPrice}/>
                    </Form>
                    <br/>
                    <Button onClick={addPost} variant="dark">Опубликовать</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AddPost;