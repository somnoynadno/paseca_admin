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


export const HiveFrameTypeList = (props) => (
    <List {...props}>
        <Datagrid>
            <NumberField label="ID" source="id" />
            <TextField source="name" />
            <EditButton basePath="/hive_frame_type" />
        </Datagrid>
    </List>
);

export const HiveFrameTypeCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput validate={required()} source="name" />
        </SimpleForm>
    </Create>
);

export const HiveFrameTypeEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput validate={required()} source="name" />
        </SimpleForm>
    </Edit>
);
