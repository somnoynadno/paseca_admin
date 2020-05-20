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


export const PollenHarvestList = (props) => (
    <List {...props}>
        <Datagrid>
            <NumberField label="ID" source="id" />
            <DateField source="date" />
            <NumberField source="amount" />
            <TextField label="Farm" source="bee_farm.name" />
            <EditButton basePath="/pollen_harvest" />
        </Datagrid>
    </List>
);

export const PollenHarvestCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <NumberInput validate={required()} source="amount" />
            <DateTimeInput source="date" />
            <AwaitSelectInput label="Farm" validate={required()} source="bee_farm_id" optionText="name" fetchRel={"bee_farm"} />
        </SimpleForm>
    </Create>
);

export const PollenHarvestEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput validate={required()} source="amount" />
            <DateTimeInput source="date" />
            <AwaitSelectInput label="Farm" validate={required()} source="bee_farm_id" optionText="name" fetchRel={"bee_farm"} />
        </SimpleForm>
    </Edit>
);
