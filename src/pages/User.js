import React from 'react';
import {
    List,
    Create,
    Edit,
    Datagrid,
    SimpleForm,
    EditButton,
    DateField,
    TextField,
    DateTimeInput,
    NumberField,
    TextInput,
    ShowButton,
    Show,
    BooleanField,
    BooleanInput,
    SimpleShowLayout,
    EmailField,
    required
} from 'react-admin';
import {AwaitSelectInput} from "../components/AwaitSelectInput";


export const UserList = (props) => (
    <List {...props}>
        <Datagrid>
            <NumberField label="ID" source="id" />
            <TextField source="surname" />
            <EmailField source="email" />
            <BooleanField source="is_admin" />
            <TextField label="Subscription type" source="subscription_type.name" />
            <TextField label="Subscription status" source="subscription_status.status" />
            <ShowButton />
            <EditButton basePath="/user" />
        </Datagrid>
    </List>
);

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput validate={required()} source="email" />
            <TextInput validate={required()} source="name" />
            <TextInput validate={required()} source="surname" />
            <TextInput validate={required()} source="password" />
            <BooleanInput validate={required()} default={false} source="is_admin" />
            <DateTimeInput source="subscription_end" />
            <AwaitSelectInput label="Subscription type" validate={required()} source="subscription_type_id" optionText="name" fetchRel={"subscription_type"} />
            <AwaitSelectInput label="Subscription status" validate={required()} source="subscription_status_id" optionText="status" fetchRel={"subscription_status"} />
        </SimpleForm>
    </Create>
);

export const UserEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput validate={required()} source="email" />
            <TextInput validate={required()} source="name" />
            <TextInput validate={required()} source="surname" />
            <TextInput validate={required()} source="password" />
            <BooleanInput validate={required()} default={false} source="is_admin" />
            <DateTimeInput source="subscription_end" />
            <AwaitSelectInput label="Subscription type" validate={required()} source="subscription_type_id" optionText="name" fetchRel={"subscription_type"} />
            <AwaitSelectInput label="Subscription status" validate={required()} source="subscription_status_id" optionText="status" fetchRel={"subscription_status"} />
        </SimpleForm>
    </Edit>
);

export const UserShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <NumberField label="ID" source="id" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <DateField source="subscription_end" />
            <TextField source="surname" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="password" />
            <BooleanField source="is_admin" />
            <TextField label="Subscription type" source="subscription_type.name" />
            <TextField label="Subscription status" source="subscription_status.status" />
        </SimpleShowLayout>
    </Show>
);
