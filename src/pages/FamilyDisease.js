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
    NumberField,
    required
} from 'react-admin';
import {AwaitSelectInput} from "../components/AwaitSelectInput";


export const FamilyDiseaseList = (props) => (
    <List {...props}>
        <Datagrid>
            <NumberField label="ID" source="id" />
            <DateField source="updated_at" />
            <TextField label="Family" source="bee_family.name" />
            <TextField label="Disease" source="bee_disease.name" />
            <EditButton basePath="/family_disease" />
        </Datagrid>
    </List>
);

export const FamilyDiseaseCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <AwaitSelectInput label="Bee family" validate={required()} source="bee_family_id" optionText="name" fetchRel={"bee_family"} />
            <AwaitSelectInput label="Bee disease" validate={required()} source="bee_disease_id" optionText="name" fetchRel={"bee_disease"} />
        </SimpleForm>
    </Create>
);

export const FamilyDiseaseEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <AwaitSelectInput label="Bee family" validate={required()} source="bee_family_id" optionText="name" fetchRel={"bee_family"} />
            <AwaitSelectInput label="Bee disease" validate={required()} source="bee_disease_id" optionText="name" fetchRel={"bee_disease"} />
        </SimpleForm>
    </Edit>
);
