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
    BooleanField,
    BooleanInput,
    required
} from 'react-admin';
import {AwaitSelectInput} from "../components/AwaitSelectInput";


export const BeeFamilyList = (props) => (
    <List {...props}>
        <Datagrid>
            <NumberField label="ID" source="id" />
            <TextField source="name" />
            <TextField label="Bee farm" source="bee_farm.name" />
            <TextField label="Bee breed" source="bee_breed.name" />
            <TextField label="Family status" source="bee_family_status.status" />
            <BooleanField source="is_control" />
            <ShowButton />
            <EditButton basePath="/bee_family" />
        </Datagrid>
    </List>
);

export const BeeFamilyCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput validate={required()} source="name" />
            <AwaitSelectInput label="Bee farm" validate={required()} source="bee_farm_id" optionText="name" fetchRel={"bee_farm"} />
            <AwaitSelectInput label="Bee breed" validate={required()} source="bee_breed_id" optionText="name" fetchRel={"bee_breed"} />
            <DateTimeInput source="last_inspection_date" />
            <DateTimeInput source="queen_bee_born_date" />
            <BooleanInput source="is_control" validate={required()} default={false} />
            <AwaitSelectInput label="Family status" validate={required()} source="bee_family_status_id" optionText="status" fetchRel={"bee_family_status"} />
            <AwaitSelectInput label="Hive" source="hive_id" optionText="name" fetchRel={"hive"} />
            <AwaitSelectInput label="Parent1" source="parent1_id" optionText="name" fetchRel={"bee_family"} />
            <AwaitSelectInput label="Parent2" source="parent2_id" optionText="name" fetchRel={"bee_family"} />
        </SimpleForm>
    </Create>
);

export const BeeFamilyEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput validate={required()} source="name" />
            <AwaitSelectInput label="Bee farm" validate={required()} source="bee_farm_id" optionText="name" fetchRel={"bee_farm"} />
            <AwaitSelectInput label="Bee breed" validate={required()} source="bee_breed_id" optionText="name" fetchRel={"bee_breed"} />
            <DateTimeInput source="last_inspection_date" />
            <DateTimeInput source="queen_bee_born_date" />
            <BooleanInput source="is_control" validate={required()} default={false} />
            <AwaitSelectInput label="Family status" validate={required()} source="bee_family_status_id" optionText="status" fetchRel={"bee_family_status"} />
            <AwaitSelectInput label="Hive" source="hive_id" optionText="name" fetchRel={"hive"} />
            <AwaitSelectInput label="Parent1" source="parent1_id" optionText="name" fetchRel={"bee_family"} />
            <AwaitSelectInput label="Parent2" source="parent2_id" optionText="name" fetchRel={"bee_family"} />
        </SimpleForm>
    </Edit>
);

export const BeeFamilyShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <NumberField label="ID" source="id" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TextField source="name" />
            <TextField label="Bee farm" source="bee_farm.name" />
            <TextField label="Bee breed" source="bee_breed.name" />
            <DateField source="last_inspection_date" />
            <DateField source="queen_bee_born_date" />
            <TextField label="Family status" source="bee_family_status.status" />
            <TextField label="Hive" source="hive.name" />
            <TextField label="Parent1" source="parent1.name" />
            <TextField label="Parent2" source="parent2.name" />
        </SimpleShowLayout>
    </Show>
);
