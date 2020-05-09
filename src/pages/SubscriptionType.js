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


export const SubscriptionTypeList = (props) => (
    <List {...props}>
        <Datagrid>
            <NumberField label="ID" source="id" />
            <TextField source="name" />
            <NumberField source="price" />
            <TextField source="description" />
            <EditButton basePath="/subscription_type" />
        </Datagrid>
    </List>
);

export const SubscriptionTypeCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput validate={required()} source="name" />
            <TextInput multiline source="description" />
            <NumberInput validate={required()} source="price" />
        </SimpleForm>
    </Create>
);

export const SubscriptionTypeEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput validate={required()} source="name" />
            <TextInput multiline source="description" />
            <NumberInput validate={required()} source="price" />
        </SimpleForm>
    </Edit>
);
