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
    TextInput,
    ShowButton,
    Show,
    SimpleShowLayout,
    required
} from 'react-admin';
import {AwaitSelectInput} from "../components/AwaitSelectInput";


export const BeeFarmList = (props) => (
    <List {...props}>
        <Datagrid>
            <NumberField label="ID" source="id" />
            <TextField source="name" />
            <TextField label="User" source="user.surname" />
            <TextField label="Farm type" source="bee_farm_type.name" />
            <TextField label="Family size" source="bee_farm_size.name" />
            <ShowButton />
            <EditButton basePath="/bee_farm" />
        </Datagrid>
    </List>
);

export const BeeFarmCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput validate={required()} source="name" />
            <TextInput multiline source="location" />
            <AwaitSelectInput label="User" validate={required()} source="user_id" optionText="surname" fetchRel={"user"} />
            <AwaitSelectInput label="Farm type" validate={required()} source="bee_farm_type_id" optionText="name" fetchRel={"bee_farm_type"} />
            <AwaitSelectInput label="Farm size" validate={required()} source="bee_farm_size_id" optionText="name" fetchRel={"bee_farm_size"} />
        </SimpleForm>
    </Create>
);

export const BeeFarmEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput validate={required()} source="name" />
            <TextInput multiline source="location" />
            <AwaitSelectInput label="User" validate={required()} source="user_id" optionText="surname" fetchRel={"user"} />
            <AwaitSelectInput label="Farm type" validate={required()} source="bee_farm_type_id" optionText="name" fetchRel={"bee_farm_type"} />
            <AwaitSelectInput label="Farm size" validate={required()} source="bee_farm_size_id" optionText="name" fetchRel={"bee_farm_size"} />
        </SimpleForm>
    </Edit>
);

export const BeeFarmShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <NumberField label="ID" source="id" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TextField source="name" />
            <TextField source="location" />
            <TextField label="User" source="user.surname" />
            <TextField label="Farm type" source="bee_farm_type.name" />
            <TextField label="Family size" source="bee_farm_size.name" />
        </SimpleShowLayout>
    </Show>
);
