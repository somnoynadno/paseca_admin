import React from 'react';
import {
    List,
    Create,
    Edit,
    Datagrid,
    SimpleForm,
    EditButton,
    TextField,
    DateInput,
    DateField,
    NumberField,
    NumberInput,
    required
} from 'react-admin';
import {AwaitSelectInput} from "../components/AwaitSelectInput";


export const HoneyHarvestList = (props) => (
    <List {...props}>
        <Datagrid>
            <NumberField label="ID" source="id" />
            <DateField source="date" />
            <NumberField source="amount" />
            <NumberField source="total_price" />
            <TextField label="Honey" source="honey_type.name" />
            <TextField label="Family" source="bee_family.name" />
            <EditButton basePath="/honey_harvest" />
        </Datagrid>
    </List>
);

export const HoneyHarvestCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <NumberInput validate={required()} source="amount" />
            <NumberInput validate={required()} source="total_price" />
            <DateInput source="date" />
            <AwaitSelectInput label="Honey" validate={required()} source="honey_type_id" optionText="name" fetchRel={"honey_type"} />
            <AwaitSelectInput label="Family" validate={required()} source="bee_family_id" optionText="name" fetchRel={"bee_family"} />
        </SimpleForm>
    </Create>
);

export const HoneyHarvestEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput validate={required()} source="amount" />
            <NumberInput validate={required()} source="total_price" />
            <DateInput source="date" />
            <AwaitSelectInput label="Honey" validate={required()} source="honey_type_id" optionText="name" fetchRel={"honey_type"} />
            <AwaitSelectInput label="Family" validate={required()} source="bee_family_id" optionText="name" fetchRel={"bee_family"} />
        </SimpleForm>
    </Edit>
);
