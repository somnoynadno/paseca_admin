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
    SimpleShowLayout,
    BooleanInput,
    BooleanField,
    required
} from 'react-admin';
import {AwaitSelectInput} from "../components/AwaitSelectInput";


export const ReminderList = (props) => (
    <List {...props}>
        <Datagrid>
            <NumberField label="ID" source="id" />
            <DateField source="date" />
            <TextField source="title" />
            <TextField label="Bee farm" source="bee_farm.name" />
            <ShowButton />
            <EditButton basePath="/reminder" />
        </Datagrid>
    </List>
);

export const ReminderCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput validate={required()} source="title" />
            <TextInput multiline validate={required()} source="text" />
            <AwaitSelectInput label="Bee farm" validate={required()} source="bee_farm_id" optionText="name" fetchRel={"bee_farm"} />
            <DateTimeInput validate={required()} source="date" />
            <BooleanInput validate={required()} default={false} source="is_checked" />
        </SimpleForm>
    </Create>
);

export const ReminderEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput validate={required()} source="title" />
            <TextInput multiline validate={required()} source="text" />
            <AwaitSelectInput label="Bee farm" validate={required()} source="bee_farm_id" optionText="name" fetchRel={"bee_farm"} />
            <DateTimeInput validate={required()} source="date" />
            <BooleanInput validate={required()} default={false} source="is_checked" />
        </SimpleForm>
    </Edit>
);

export const ReminderShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <NumberField label="ID" source="id" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <DateField source="date" />
            <TextField source="title" />
            <TextField source="text" />
            <BooleanField source="is_checked" />
            <TextField label="Bee farm" source="bee_farm.name" />
        </SimpleShowLayout>
    </Show>
);
