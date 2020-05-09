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


export const HiveList = (props) => (
    <List {...props}>
        <Datagrid>
            <NumberField label="ID" source="id" />
            <TextField source="name" />
            <TextField label="Bee family" source="bee_family.name" />
            <TextField label="Format" source="hive_format.name" />
            <TextField label="Frame type" source="hive_frame_type.name" />
            <ShowButton />
            <EditButton basePath="/hive" />
        </Datagrid>
    </List>
);

export const HiveCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput validate={required()} source="name" />
            <TextInput source="coord_x" />
            <TextInput source="coord_y" />
            <AwaitSelectInput label="Bee family" source="bee_family_id" optionText="name" fetchRel={"bee_family"} />
            <AwaitSelectInput label="Hive format" validate={required()} source="hive_format_id" optionText="name" fetchRel={"hive_format"} />
            <AwaitSelectInput label="Frame type" validate={required()} source="hive_frame_type_id" optionText="name" fetchRel={"hive_frame_type"} />
        </SimpleForm>
    </Create>
);

export const HiveEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput validate={required()} source="name" />
            <TextInput source="coord_x" />
            <TextInput source="coord_y" />
            <AwaitSelectInput label="Bee family" source="bee_family_id" optionText="name" fetchRel={"bee_family"} />
            <AwaitSelectInput label="Hive format" validate={required()} source="hive_format_id" optionText="name" fetchRel={"hive_format"} />
            <AwaitSelectInput label="Frame type" validate={required()} source="hive_frame_type_id" optionText="name" fetchRel={"hive_frame_type"} />
        </SimpleForm>
    </Edit>
);

export const HiveShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <NumberField label="ID" source="id" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TextField source="name" />
            <TextField source="coord_x" />
            <TextField source="coord_y" />
            <TextField label="Bee family" source="bee_family.name" />
            <TextField label="Format" source="hive_format.name" />
            <TextField label="Frame type" source="hive_frame_type.name" />
        </SimpleShowLayout>
    </Show>
);
