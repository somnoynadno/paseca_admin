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


export const BeeFarmSizeList = (props) => (
    <List {...props}>
        <Datagrid>
            <NumberField label="ID" source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <NumberField source="max_x" />
            <NumberField source="max_y" />
            <EditButton basePath="/bee_farm_size" />
        </Datagrid>
    </List>
);

export const BeeFarmSizeCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput validate={required()} source="name" />
            <TextInput multiline source="description" />
            <NumberInput validate={required()} source="max_x" />
            <NumberInput validate={required()} source="max_y" />
        </SimpleForm>
    </Create>
);

export const BeeFarmSizeEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput validate={required()} source="name" />
            <TextInput multiline source="description" />
            <NumberInput validate={required()} source="max_x" />
            <NumberInput validate={required()} source="max_y" />
        </SimpleForm>
    </Edit>
);
