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


export const HoneySaleList = (props) => (
    <List {...props}>
        <Datagrid>
            <NumberField label="ID" source="id" />
            <DateField source="date" />
            <NumberField source="amount" />
            <NumberField source="total_price" />
            <TextField label="Honey" source="honey_type.name" />
            <TextField label="Farm" source="bee_farm.name" />
            <EditButton basePath="/honey_sale" />
        </Datagrid>
    </List>
);

export const HoneySaleCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <NumberInput validate={required()} source="amount" />
            <NumberInput validate={required()} source="total_price" />
            <DateInput source="date" />
            <AwaitSelectInput label="Honey" validate={required()} source="honey_type_id" optionText="name" fetchRel={"honey_type"} />
            <AwaitSelectInput label="Farm" validate={required()} source="bee_farm_id" optionText="name" fetchRel={"bee_farm"} />
        </SimpleForm>
    </Create>
);

export const HoneySaleEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput validate={required()} source="amount" />
            <NumberInput validate={required()} source="total_price" />
            <DateInput source="date" />
            <AwaitSelectInput label="Honey" validate={required()} source="honey_type_id" optionText="name" fetchRel={"honey_type"} />
            <AwaitSelectInput label="Farm" validate={required()} source="bee_farm_id" optionText="name" fetchRel={"bee_farm"} />
        </SimpleForm>
    </Edit>
);
