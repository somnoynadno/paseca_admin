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


export const BeeDiseaseList = (props) => (
    <List {...props}>
        <Datagrid>
            <NumberField label="ID" source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <EditButton basePath="/bee_disease" />
        </Datagrid>
    </List>
);

export const BeeDiseaseCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput validate={required()} source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);

export const BeeDiseaseEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput validate={required()} source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);
