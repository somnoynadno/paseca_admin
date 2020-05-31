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


export const SwarmStatusList = (props) => (
    <List {...props}>
        <Datagrid>
            <NumberField label="ID" source="id" />
            <TextField source="status" />
            <EditButton basePath="/swarm_status" />
        </Datagrid>
    </List>
);

export const SwarmStatusCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput validate={required()} source="status" />
        </SimpleForm>
    </Create>
);

export const SwarmStatusEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput validate={required()} source="status" />
        </SimpleForm>
    </Edit>
);
