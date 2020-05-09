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


export const BeeBreedList = (props) => (
    <List {...props}>
        <Datagrid>
            <NumberField label="ID" source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <EditButton basePath="/bee_breed" />
        </Datagrid>
    </List>
);

export const BeeBreedCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput validate={required()} source="name" />
            <TextInput validate={required()} source="description" />
        </SimpleForm>
    </Create>
);

export const BeeBreedEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput validate={required()} source="name" />
            <TextInput validate={required()} source="description" />
        </SimpleForm>
    </Edit>
);
