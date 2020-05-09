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


export const BeeFamilyStatusList = (props) => (
    <List {...props}>
        <Datagrid>
            <NumberField label="ID" source="id" />
            <TextField source="status" />
            <TextField source="color" />
            <EditButton basePath="/bee_family_status" />
        </Datagrid>
    </List>
);

export const BeeFamilyStatusCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput validate={required()} source="status" />
            <TextInput source="color" />
        </SimpleForm>
    </Create>
);

export const BeeFamilyStatusEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput validate={required()} source="status" />
            <TextInput source="color" />
        </SimpleForm>
    </Edit>
);
