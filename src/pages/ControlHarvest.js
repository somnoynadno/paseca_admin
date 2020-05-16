import React from 'react';
import {
    List,
    Create,
    Edit,
    Datagrid,
    SimpleForm,
    EditButton,
    TextField,
    DateTimeInput,
    DateField,
    NumberField,
    NumberInput,
    required
} from 'react-admin';
import {AwaitSelectInput} from "../components/AwaitSelectInput";


export const ControlHarvestList = (props) => (
    <List {...props}>
        <Datagrid>
            <NumberField label="ID" source="id" />
            <DateField source="date" />
            <NumberField source="amount" />
            <TextField label="Family" source="bee_family.name" />
            <EditButton basePath="/control_harvest" />
        </Datagrid>
    </List>
);

export const ControlHarvestCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <NumberInput validate={required()} source="amount" />
            <DateTimeInput source="date" />
            <AwaitSelectInput label="Family" validate={required()} source="bee_family_id" optionText="name" fetchRel={"bee_family"} />
        </SimpleForm>
    </Create>
);

export const ControlHarvestEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput validate={required()} source="amount" />
            <DateTimeInput source="date" />
            <AwaitSelectInput label="Family" validate={required()} source="bee_family_id" optionText="name" fetchRel={"bee_family"} />
        </SimpleForm>
    </Edit>
);
