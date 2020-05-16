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
    NumberInput,
    required
} from 'react-admin';


export const HoneyTypeList = (props) => (
    <List {...props}>
        <Datagrid>
            <NumberField label="ID" source="id" />
            <TextField source="name" />
            <NumberField source="base_price" />
            <TextField source="description" />
            <EditButton basePath="/honey_type" />
        </Datagrid>
    </List>
);

export const HoneyTypeCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput validate={required()} source="name" />
            <TextInput multiline source="description" />
            <NumberInput validate={required()} source="base_price" />
        </SimpleForm>
    </Create>
);

export const HoneyTypeEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput validate={required()} source="name" />
            <TextInput multiline source="description" />
            <NumberInput validate={required()} source="base_price" />
        </SimpleForm>
    </Edit>
);
