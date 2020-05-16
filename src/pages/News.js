import React from 'react';
import {
    List,
    Create,
    Edit,
    Datagrid,
    SimpleForm,
    EditButton,
    TextField,
    NumberField,
    TextInput,
    required
} from 'react-admin';


export const NewsList = (props) => (
    <List {...props}>
        <Datagrid>
            <NumberField label="ID" source="id" />
            <TextField source="title" />
            <TextField source="text" />
            <EditButton basePath="/news" />
        </Datagrid>
    </List>
);

export const NewsCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput validate={required()} source="title" />
            <TextInput multiline validate={required()} source="text" />
        </SimpleForm>
    </Create>
);

export const NewsEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput validate={required()} source="title" />
            <TextInput multiline validate={required()} source="text" />
        </SimpleForm>
    </Edit>
);
