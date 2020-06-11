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
    required,
    TextInput, ShowButton,
} from 'react-admin';


export const WikiSectionList = (props) => (
    <List {...props}>
        <Datagrid>
            <NumberField label="ID" source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="url" />
            <EditButton basePath="/wiki_section" />
        </Datagrid>
    </List>
);

export const WikiSectionCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput validate={required()} source="name" />
            <TextInput multiline source="description" />
            <TextInput validate={required()} source="url" />
        </SimpleForm>
    </Create>
);

export const WikiSectionEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput validate={required()} source="name" />
            <TextInput multiline source="description" />
            <TextInput validate={required()} source="url" />
        </SimpleForm>
    </Edit>
);
