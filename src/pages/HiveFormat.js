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


export const HiveFormatList = (props) => (
    <List {...props}>
        <Datagrid>
            <NumberField label="ID" source="id" />
            <TextField source="name" />
            <NumberField source="size" />
            <EditButton basePath="/hive_format" />
        </Datagrid>
    </List>
);

export const HiveFormatCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput validate={required()} source="name" />
            <NumberInput source="size" />
        </SimpleForm>
    </Create>
);

export const HiveFormatEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput validate={required()} source="name" />
            <NumberInput source="size" />
        </SimpleForm>
    </Edit>
);
