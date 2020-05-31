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
    required,
    DateField,
    DateTimeInput,
    NumberInput
} from 'react-admin';
import {AwaitSelectInput} from "../components/AwaitSelectInput";


export const SwarmList = (props) => (
    <List {...props}>
        <Datagrid>
            <NumberField label="ID" source="id" />
            <NumberField source="order" />
            <DateField source="date" />
            <TextField label="Bee family" source="bee_family.name" />
            <TextField label="Swarm status" source="swarm_status.status" />
            <EditButton basePath="/swarm" />
        </Datagrid>
    </List>
);

export const SwarmCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <NumberInput validate={required()} source="order" />
            <DateTimeInput validate={required()} source="date" />
            <AwaitSelectInput label="Bee family" validate={required()} source="bee_family_id" optionText="name" fetchRel={"bee_family"} />
            <AwaitSelectInput label="Swarm status" validate={required()} source="swarm_status_id" optionText="status" fetchRel={"swarm_status"} />
        </SimpleForm>
    </Create>
);

export const SwarmEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput validate={required()} source="order" />
            <DateTimeInput validate={required()} source="date" />
            <AwaitSelectInput label="Bee family" validate={required()} source="bee_family_id" optionText="name" fetchRel={"bee_family"} />
            <AwaitSelectInput label="Swarm status" validate={required()} source="swarm_status_id" optionText="status" fetchRel={"swarm_status"} />
        </SimpleForm>
    </Edit>
);
